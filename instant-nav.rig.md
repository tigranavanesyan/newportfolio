# instant-nav rig: portfolio

- BUILD: `$env:EXPOSE_TESTING_API="1"; npm run build` then `npx next start --port 3001` (port 3001 so `next dev` on 3000 can stay up). Stop whatever already owns 3001 first.
- EXPOSE: `EXPOSE_TESTING_API=1` during `next build` (`experimental.exposeTestingApiInProductionBuild`)
- RUN: `$env:BASE_URL="http://localhost:3001"; npx playwright test e2e/home-shell.spec.ts`
- TEST USER: public; no authentication; state: public homepage, no flags or locale variants
- DRIFT: none known — same public homepage in the browser and in Playwright
- CONTRACTS: `/` initial load (`page.goto`); shell marker is the hero `h1` ("I design and ship web products end to end."); no deferred marker (the route is fully static). No `next/link` navigations and no `prefetch={true}` to preserve. `partialPrefetching: true` is on globally.
- LOOP: local build with the testing API → start on 3001 → focused Playwright suite → stop the process on 3001 → edit → repeat. Agent limits: none for the local loop.
- LIVENESS: n/a; local build and start
- WALLS: Windows PowerShell needs `$env:EXPOSE_TESTING_API="1"` (not a Unix prefix). `next start` can leave a child on 3001; stop by port, not only the launcher PID. Contact form needs Resend env only for `/api/contact`, not for the homepage shell test.
