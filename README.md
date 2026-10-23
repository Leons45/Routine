# Discipline Engine (website)

A premium, psychology-driven routine OS built around three real goals: gain weight on a deadline, get fluent in French, and stay in the gym. It runs in any browser, phone first, with a desktop layout. No build step, no backend. Data stays in your browser.

## The three pillars
- **Weight** — log weight whenever you want. The app tracks your trend, projects an ETA against your target, and tells you plainly whether you're on pace or behind. No calorie logging — just the trend that matters.
- **French** — a 10-week road to B2 speaking and listening in the TEF Canada format. Ten weekly themes (housing, work and hiring, immigration and settlement, health and wellbeing, environment and transport, technology and social media, education and youth, consumer rights, urban and community life, travel), chosen to match the scenario categories recent TEF Canada candidates report, with a different drill every day: Section A questions, Section B persuasion, past-tense stories, debates, timed mocks, weak-point precision work, and review. Listening rotates through short news, radio interviews, dictation, native podcasts, timed tests, Québécois content and films. Speaking and Listening are mandatory and locked (5–7 PM weekdays, 9:30–11:30 weekends). Writing is a flexible stopwatch. TEF never publishes an official topic bank, so this is realistic rehearsal material, not leaked questions.
- **Gym** — flexible logging, Mon/Tue/Thu/Fri around 8–9 PM. A 14-day chain and loss-aversion penalty keep you honest.
- **Fuel** — six real meals with portions: eggs at 7:45, lunch, chicken at 4 PM, a pre-gym snack, the mass-gainer shake straight after training, then dinner. Rest days eat dinner earlier but keep the shake. Lights out at 11:45 PM, up at 7:30.

## The home screen
A greeting and coach line, three rings (French today, weight toward goal, gym sessions this week) around your consistency score, the next due item, today's French drills, the fuel list with portions, the gym chain and a weight log. A French tab shows the full 10-week plan.

## The psychology built in
- **Mandatory vs. flexible, by design:** Speaking and Listening get full commitment-device treatment (locked schedule, pre-flight checklist, can't skip without a reason). Writing and Gym are logged on your terms — different goals need different friction.
- **Commitment + implementation intentions:** name your topic or audio source before a French session starts.
- **The 5-minute rule:** "Not feeling it?" starts a 5-minute session. At minute 5 you choose to continue or stop.
- **Downgrade, never quit:** skipping asks *why*, gives a tailored reframe, and offers a half-credit version instead of a zero.
- **Don't break the chain:** 14-day streak chains for French (mandatory) and Gym.
- **Loss aversion:** consistency-score penalties for missed blocks, and for closing out a day without gym or without both mandatory French sessions.
- **Weight ETA, not vibes:** a real projection from your logged trend against your deadline — tells you if the pace you're actually keeping gets you there.

## Act: stop thinking, start doing

For the loop where you think a lot and do little. The coral **Act** button floats on every tab.

1. **Brain dump (60 s).** Get it out of your head. Nothing typed is saved.
2. **Can you act on it today?** No means a held "release" and you move on. Yes means pick the smallest physical step.
3. **5-4-3-2-1 launch**, then choose: do the step (2 min), a 25-minute French sprint, a 10-minute move sprint (can count as your gym session), or eat now.

Spiralling? "Calm my body first" runs a 60-second double-inhale breathing reset. A daily **Worry window** (16:30 weekdays, 09:05 weekends) schedules the dump so worry has a place that is not your study time. Stats show actions today and an action streak.

## Put it online (GitHub Pages)
1. New GitHub repo, upload: `index.html`, `manifest.webmanifest`, `sw.js`, `icon.svg`, `README.md`.
2. Settings → Pages → Deploy from branch → `main` / root.
3. Open `https://<username>.github.io/<repo>/` on your phone and laptop — match the repo's exact case, GitHub Pages URLs are case-sensitive.
4. On iPhone Safari tap Share → Add to Home Screen so it opens full-screen.

## Config
Set your weight target and deadline (defaults to +8kg in 60 days from whenever you first open the app), per-skill French minute targets, strict mode, and sound — all in the Config tab. Export/Import backs up everything as JSON.

## Real push notifications (even when the app is closed)
A static site can't wake itself up on its own — that's an OS restriction, not a limitation of this app. So the push pipeline here uses a real, separate sender: a GitHub Action in this repo runs every 5 minutes (with a 45-minute catch-up window, since GitHub cron can run late), checks the time in America/Toronto against `data/schedule.json`, and sends a Web Push notification through Apple's push service for anything due. It works even if the app hasn't been opened all day, on iOS 16.4+, once installed via Add to Home Screen.

One-time setup:
1. Repo → Settings → Secrets and variables → Actions → add `VAPID_PUBLIC_KEY` and `VAPID_PRIVATE_KEY` (generated once, provided separately — don't commit the private key to the repo).
2. On the phone: Add to Home Screen → open from the Home Screen icon → Settings tab → "Set up push notifications" → allow the permission prompt.
3. Tap "Save to GitHub (1 tap)" in the same screen and press Commit changes. (Need two devices? Make `data/subscription.json` a JSON array of both subscriptions.)
4. From the GitHub repo's Actions tab, run the "Push reminders" workflow once manually (`workflow_dispatch`) to confirm a test notification arrives, instead of waiting for the next 10-minute tick.

`data/schedule.json` is a flat duplicate of `DEFAULT_SCHEDULE` in `index.html`, since the Action can't execute the app's JS — if you change meal times or days in the app, update that file too or the reminders will drift out of sync. `data/sent.json` tracks what's already been sent today so nothing double-fires; the Action commits it back after each run.

## Honest limits
A website can't lock your phone or run in the background — it enforces while the page is open (full-screen lockdown, alarms, score penalties) and sends real push notifications through the Action above. For things no notification can force (actually putting the phone down and starting), use Shortcuts / Screen Time on iPhone to force-open the app at block times.
Data lives per browser. Use Config → Export / Import to sync phone and laptop. If you had the previous version installed, your weight history carries over automatically — session/streak data starts fresh under the new model.
