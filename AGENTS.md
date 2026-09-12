<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project skills

This project includes first-party Next.js 16.3 workflow skills in `.cursor/skills/` and `.agents/skills/`:

- `next-dev-loop` — verify UI changes at runtime after edits (requires `next dev` + Turbopack)
- `next-cache-components-adoption` — migrate to Cache Components feature-by-feature
- `next-cache-components-optimizer` — grow static shells and optimize instant navigation on a route
- `next-partial-prefetching-adoption` — adopt Partial Prefetching after Cache Components
- `next-partial-prefetching-optimizer` — optimize what selected navigations prefetch

Also installed for this stack:

- `vercel-react-best-practices` — React/Next.js performance patterns from Vercel Engineering
- `web-design-guidelines` — accessibility and UI review

When changing app routes or components, verify behavior at runtime using `next-dev-loop` when a dev server is available.
