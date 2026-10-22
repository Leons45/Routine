# Discipline Engine (website)

A psychology-driven routine enforcer with a live 3D dial (Three.js). It runs in any browser, phone first, with a desktop layout. No build step, no backend. Data stays in your browser.

## Your day (editable in Config → Schedule)
Weekdays: 6:30 wake · 7:00 meal 1 · 7:30 identity ritual · **9-5 work** · 10:30 meal 2 · 12:30 meal 3 · 3:30 meal 4 · **5-8 PM study (3 x 60 min)** · 8:00 meal 5 (earned dinner) · 8:35 optional bonus round (toward 4h) · 9:15 plan tomorrow · 9:45 meal 6 · 10:10 night ritual · 10:45 lights out.
Weekends keep the same 3 study sessions, 6 meals and rituals on a relaxed timetable.

**Gym** is separate from the timed schedule — it's flexible, not locked to a slot. A standing card on the Core tab lets you log a session any time the day; it just has to happen before the day ends.

## The psychology built in
- **Commitment + implementation intentions:** you must type exactly what you'll study before each session starts. Tomorrow's plan is written the night before.
- **Friction in the right place:** a 3-item pre-flight (phone away, water, material open) before the timer starts.
- **The 5-minute rule:** "Not feeling it?" starts a 5-minute session. At minute 5 you choose to continue or stop.
- **Downgrade, never quit:** skipping asks *why* (tired, distracted, overwhelmed...), gives a tailored reframe, and offers a 15-minute version instead of a zero.
- **Goal-gradient:** a progress ring on the dial and a bar toward your daily goal, with coaching text that changes with your progress.
- **Don't break the chain:** a 14-day study chain, a streak counter and a "never miss twice" warning.
- **Identity voting:** each completed session is a "vote" for the person you're becoming.
- **Variable rewards:** random "focus crit" XP bonuses, levels, perfect-day bonus.
- **Loss aversion:** XP penalties for missed blocks, strikes for leaving the tab mid-session, and a gym-streak penalty if the day closes without a logged session.
- **Parking lot:** jot distracting thoughts during focus instead of acting on them.

## Gym
No fixed time — log it whenever you train. A 14-day streak chain (same "don't break the chain" visual as study) and a Gym-streak stat sit on the Core tab; a 7-day bar strip is on the Stats tab. Miss a whole day and the streak resets with an XP penalty at the next day rollover, same loss-aversion logic as everything else.

## Put it online (GitHub Pages)
1. New GitHub repo, upload: `index.html`, `manifest.webmanifest`, `sw.js`, `icon.svg`, `README.md`.
2. Settings → Pages → Deploy from branch → `main` / root.
3. Open `https://<username>.github.io/<repo>/` on your phone and laptop.
4. Optional: on iPhone Safari tap Share → Add to Home Screen so it opens full-screen.

## Honest limits
A website can't lock your phone or run in the background. It enforces while the page is open (full-screen lockdown, alarms, XP penalties). Keep the tab open on your desk or phone, or set Shortcuts / Screen Time on iPhone to open it at block times.
Data lives per browser. Use Config → Export / Import to sync phone and laptop.
