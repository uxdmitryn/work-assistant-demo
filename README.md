# Work Assistant — demo

A dark-themed **Work Assistant** UI for a Design Engineer persona — daily briefings,
a commitments tracker, a review queue, an ideas board, Slack triage, a time-blocked
schedule, team snapshots, an agent outbox, and a capabilities toolkit.

**▶ Live demo:** https://uxdmitryn.github.io/work-assistant-demo/

All data is fictional placeholder content.

## Screens

| Section | Views |
| --- | --- |
| **Work Assistant** | Briefs · Review Queue · Commitments · Ideas · Slack · Schedule · Team |
| **Agents** | Outbox with working / ready / sent states, progress, and approvals |
| **Toolkit** | Capabilities (Skills · Integrations · Views) · Research · Workflows |

## Tech stack

- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite 6](https://vite.dev/) for dev server and build
- [Tailwind CSS v4](https://tailwindcss.com/) for styling
- [Geist / Geist Mono](https://vercel.com/font) (self-hosted variable fonts)
- [`marked`](https://marked.js.org/) to render the markdown briefings

Theme: near-black `#0a0a0a` background with a pink `#ff80c2` accent.

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server → http://localhost:5173/work-assistant-demo/
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build locally
```

> The Vite `base` is set to `/work-assistant-demo/` to match the GitHub Pages path,
> so the dev server serves from that sub-path too.

## Project structure

```
src/
  App.tsx              # header, section/tab navigation, view routing
  data.ts              # all demo content (edit text and data here)
  theme.ts             # color tokens + helpers (workstream hues, alpha)
  components/ui.tsx    # shared pills, badges, and section labels
  views/               # one file per view
    Briefs.tsx  ReviewQueue.tsx  Commitments.tsx  Ideas.tsx  Slack.tsx
    Schedule.tsx  Team.tsx  Agents.tsx  Toolkit.tsx
public/
  fonts/               # Geist + Geist Mono woff2
  favicon.svg
```

To change content, edit `src/data.ts`. To adjust colors, edit `src/theme.ts`.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds with Vite and
publishes `dist/` to GitHub Pages. You can also deploy manually:

```bash
gh workflow run deploy.yml
```
