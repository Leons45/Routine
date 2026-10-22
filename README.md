# Discipline Engine (website)

A premium, psychology-driven routine OS built around three real goals: gain weight on a deadline, get fluent in French, and stay in the gym. It runs in any browser, phone first, with a desktop layout. No build step, no backend. Data stays in your browser.

## The three pillars
- **Weight** — log weight whenever you want. The app tracks your trend, projects an ETA against your target, and tells you plainly whether you're on pace or behind. No calorie logging — just the trend that matters.
- **French** — a 10-week road to B2 speaking and listening in the TEF Canada format. One theme per week (housing, work, health, transport, environment, tech, education, shopping, travel, life in Canada), a different drill every day: Section A questions, Section B persuasion, past-tense stories, debates, timed mocks, weak-point precision work, and review. Listening rotates through short news, radio interviews, dictation, native podcasts, timed tests, Québécois content and films. Speaking and Listening are mandatory and locked (5–7 PM weekdays, 9:30–11:30 weekends). Writing is a flexible stopwatch.
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

## Put it online (GitHub Pages)
1. New GitHub repo, upload: `index.html`, `manifest.webmanifest`, `sw.js`, `icon.svg`, `README.md`.
2. Settings → Pages → Deploy from branch → `main` / root.
3. Open `https://<username>.github.io/<repo>/` on your phone and laptop — match the repo's exact case, GitHub Pages URLs are case-sensitive.
4. On iPhone Safari tap Share → Add to Home Screen so it opens full-screen.

## Config
Set your weight target and deadline (defaults to +8kg in 60 days from whenever you first open the app), per-skill French minute targets, strict mode, and sound — all in the Config tab. Export/Import backs up everything as JSON.

## Honest limits
A website can't lock your phone or run in the background. It enforces while the page is open (full-screen lockdown, alarms, score penalties). Keep the tab open on your desk or phone, or use Shortcuts / Screen Time on iPhone to open it at block times.
Data lives per browser. Use Config → Export / Import to sync phone and laptop. If you had the previous version installed, your weight history carries over automatically — session/streak data starts fresh under the new model.
