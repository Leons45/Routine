// Runs on a GitHub Actions schedule. Checks the current time in America/Toronto
// against data/schedule.json, and sends a real Web Push notification (via APNs,
// since iOS 16.4+) for anything due in the current run window — so it arrives
// even if the Discipline Engine app hasn't been opened today.
//
// Needs two repo secrets: VAPID_PUBLIC_KEY and VAPID_PRIVATE_KEY (already
// generated), and data/subscription.json committed once after the phone
// subscribes from Settings → "Set up push notifications".
'use strict';
const fs = require('fs');
const path = require('path');
const webpush = require('web-push');

const ROOT = path.join(__dirname, '..');
const SCHEDULE_PATH = path.join(ROOT, 'data', 'schedule.json');
const SUB_PATH = path.join(ROOT, 'data', 'subscription.json');
const SENT_PATH = path.join(ROOT, 'data', 'sent.json');
// Matches the cron's actual cadence — widen this if the cron interval changes.
const WINDOW_MINUTES = 12;

function readJson(p, fallback) {
  try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch (e) { return fallback; }
}

function nowInToronto() {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Toronto', hour12: false,
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', weekday: 'short',
  }).formatToParts(new Date());
  const get = (t) => parts.find((p) => p.type === t).value;
  const dow = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 }[get('weekday')];
  const mins = (+get('hour')) * 60 + (+get('minute'));
  const dateKey = `${get('year')}-${get('month')}-${get('day')}`;
  return { dow, mins, dateKey };
}

function toMin(t) {
  const [h, m] = t.split(':').map(Number);
  return h * 60 + m;
}

async function main() {
  const pub = process.env.VAPID_PUBLIC_KEY;
  const priv = process.env.VAPID_PRIVATE_KEY;
  if (!pub || !priv) {
    console.log('VAPID keys missing from the environment — add the repo secrets. Skipping.');
    return;
  }
  const sub = readJson(SUB_PATH, null);
  if (!sub) {
    console.log('No data/subscription.json yet — nothing to send to. Skipping.');
    return;
  }
  webpush.setVapidDetails('mailto:rohit.kumar@leons.ca', pub, priv);

  const schedule = readJson(SCHEDULE_PATH, { items: [] }).items;
  const { dow, mins, dateKey } = nowInToronto();
  const sentAll = readJson(SENT_PATH, {});
  const sentToday = sentAll[dateKey] || [];

  const due = schedule.filter((it) => {
    if (!it.days.includes(dow)) return false;
    if (sentToday.includes(it.id)) return false;
    const t = toMin(it.t);
    return mins >= t && mins < t + WINDOW_MINUTES;
  });

  if (!due.length) {
    console.log(`Nothing due at ${dateKey} ${mins} min (dow ${dow}).`);
    return;
  }

  for (const it of due) {
    const payload = JSON.stringify({ id: it.id, title: it.title, body: it.body });
    try {
      await webpush.sendNotification(sub, payload);
      console.log(`Sent: ${it.title}`);
      sentToday.push(it.id);
    } catch (err) {
      console.error(`Failed to send ${it.title}:`, err.statusCode || err.message);
      // 404/410 means the subscription is gone (uninstalled, permission revoked) — don't retry it forever.
      if (err.statusCode === 404 || err.statusCode === 410) {
        fs.writeFileSync(SUB_PATH, '{}\n');
        console.log('Subscription expired — cleared data/subscription.json. Re-subscribe in Settings.');
        break;
      }
    }
  }

  sentAll[dateKey] = sentToday;
  // keep the log from growing forever
  for (const k of Object.keys(sentAll)) if (k < dateKey) delete sentAll[k];
  fs.writeFileSync(SENT_PATH, JSON.stringify(sentAll, null, 1) + '\n');
}

main().catch((e) => { console.error(e); process.exit(1); });
