// All demo content, reverse-engineered from the original work-assistant-demo.
// This is placeholder/fictional data for a "Design Engineer" persona.

export const SECTIONS = ['Work Assistant', 'Agents', 'Toolkit'] as const
export const TABS = ['Briefs', 'Review Queue', 'Commitments', 'Ideas', 'Slack', 'Schedule', 'Team'] as const

export const TODAY_LABEL = 'Thu, Sep 3'

export const HISTORY = [
  'Thu, Sep 3, 2026',
  'Wed, Sep 2, 2026',
  'Tue, Sep 1, 2026',
  'Thu, Aug 27, 2026',
]

// ---------------------------------------------------------------------------
// BRIEFS
// ---------------------------------------------------------------------------
export const BRIEFINGS: Record<string, string> = {
  'Thu, Sep 3, 2026': `# Daily Briefing — Thursday, September 3, 2026

## Today's meetings
09:00 – 09:30  Design Sync  (Alex Chen, Priya Sharma, +2)
10:00 – 10:30  Sprint Planning  (Jordan Lee, Sam Rivera, +4)
13:00 – 13:45  1:1 with Engineering Lead  (Taylor Kim)
15:00 – 15:30  Cross-team Alignment  (Morgan Patel, Casey Brooks, +3)

## Overdue
- Finalize Q3 roadmap priorities (due 2026-09-01)

## Due today
- Review component library audit findings
- Send async update to leadership channel

## Due this week
- Draft proposal for new onboarding flow (due 2026-09-06)
- Complete design review for dashboard redesign (due 2026-09-08)

## New from meeting notes
**Product Strategy Sync** — 2 items extracted: decision on feature flag rollout timeline, commitment to share competitive analysis by Friday

## New from email
- Re: Q3 Planning — resource allocation proposal from VP Engineering
- Design system migration timeline — update from platform team

## My PRs
grafana/grafana#98234 — Add filter persistence to explore view — Approved — CI passing
grafana/grafana#97891 — Update panel header component API — Review needed — CI passing
grafana/design-system#412 — Token migration: spacing scale v2 — Changes requested — CI passing

## New from Slack
**Tier 1 highlights:**
- #design-team: New accessibility audit results shared — 3 P1 issues flagged
- #product-eng: Feature flag for dashboard v2 enabled in staging
- #frontend-platform: Breaking change in component library v4.2 — migration guide posted
- #ai-team: LLM cost dashboard prototype ready for review
- #design-system: Color token naming convention proposal — feedback requested by Thursday

**Tier 2 signals:**
- #proj-onboarding: Timeline shifted — launch pushed to mid-July
- #incident-review: Post-mortem from Tuesday's outage published
- #hiring-design: Senior designer candidate moving to final round

## Review queue
7 item(s) waiting — run \`/review\` to go through them

## Open decisions
- Which charting library for the new analytics view? (open 8 days)
- Design system: adopt Radix or keep custom primitives? (open 12 days — needs attention)

## Workstreams going quiet
- hiring — last updated 16 days ago`,

  'Wed, Sep 2, 2026': `# Daily Briefing — Wednesday, September 2, 2026

## Today's meetings
10:00 – 10:30  Sprint Planning  (Jordan Lee, Sam Rivera, +4)
14:00 – 14:30  Design System Review  (Priya Sharma, +3)

## Due today
- Review and approve token migration PR before Thursday

## My PRs
grafana/grafana#97891 — Update panel header component API — Review needed — CI passing
grafana/design-system#412 — Token migration: spacing scale v2 — Changes requested — CI passing

## New from Slack
**Tier 1 highlights:**
- #design-system: Color token naming convention proposal — feedback requested
- #ai-team: LLM cost dashboard prototype ready for review

## Review queue
5 item(s) waiting — run \`/review\` to go through them`,

  'Tue, Sep 1, 2026': `# Daily Briefing — Tuesday, September 1, 2026

## Overdue
- Finalize Q3 roadmap priorities (due 2026-09-01)

## Due this week
- Draft proposal for new onboarding flow (due 2026-09-06)

## New from meeting notes
**Q3 Planning** — resource allocation proposal from VP Engineering; GA target moved up to end of Q3

## Open decisions
- Which charting library for the new analytics view? (open 6 days)`,

  'Thu, Aug 27, 2026': `# Daily Briefing — Thursday, August 27, 2026

## Today's meetings
09:00 – 09:30  Design Sync  (Alex Chen, +2)

## New from Slack
**Tier 1 highlights:**
- #incident-review: Post-mortem published for Tuesday outage — config drift identified as root cause
- #frontend-platform: Breaking change in component library v4.2 — migration guide posted

## Workstreams going quiet
- hiring — last updated 9 days ago`,
}

// ---------------------------------------------------------------------------
// COMMITMENTS
// ---------------------------------------------------------------------------
export interface Commitment {
  title: string
  workstream: string
  date: string
  source: 'slack' | 'email' | 'manual' | 'agent'
  channel?: string
  overdue?: boolean
  agent?: boolean
}

export const MY_PRS = [
  { repo: 'grafana#98234', title: 'Add filter persistence to explore view', status: 'Approved', statusKind: 'ok', ci: 'CI passing', age: '1h ago' },
  { repo: 'grafana#97891', title: 'Update panel header component API', status: 'Review needed', statusKind: 'warn', ci: 'CI passing', age: '1d ago' },
  { repo: 'design-system#412', title: 'Token migration: spacing scale v2', status: 'Changes requested', statusKind: 'bad', ci: 'CI passing', age: '12h ago' },
] as const

export const COMMITMENT_COLUMNS: { key: string; items: Commitment[] }[] = [
  {
    key: 'Confirmed',
    items: [
      { title: 'Review component library audit findings', workstream: 'cross-functional-alignment', date: '2026-09-03', source: 'slack', channel: '#design-system', overdue: true },
      { title: 'Send async update to leadership channel', workstream: 'leadership-follow-up', date: '2026-09-03', source: 'manual', overdue: true },
      { title: 'Draft proposal for new onboarding flow', workstream: 'strategy', date: '2026-09-06', source: 'slack', channel: '#proj-onboarding' },
      { title: 'Share competitive analysis with product', workstream: 'strategy', date: '2026-09-08', source: 'email', agent: true },
    ],
  },
  {
    key: 'In Progress',
    items: [
      { title: 'Finalize Q3 roadmap priorities', workstream: 'strategy', date: '2026-09-01', source: 'email', overdue: true },
      { title: 'Complete design review for dashboard redesign', workstream: 'cross-functional-alignment', date: '2026-09-08', source: 'email' },
    ],
  },
  {
    key: 'Waiting',
    items: [
      { title: 'Publish updated design principles doc', workstream: 'team-operations', date: '2026-09-10', source: 'manual' },
      { title: 'Review hiring pipeline with recruiter', workstream: 'hiring', date: '2026-09-06', source: 'email' },
    ],
  },
  {
    key: 'Done',
    items: [
      { title: 'Schedule team retro for sprint 14', workstream: 'team-operations', date: '2026-09-02', source: 'slack', channel: '#design-team' },
      { title: 'Prepare 1:1 talking points for directs', workstream: 'people-management', date: '2026-09-02', source: 'manual' },
    ],
  },
]

// ---------------------------------------------------------------------------
// REVIEW QUEUE
// ---------------------------------------------------------------------------
export interface QueueItem {
  type: 'commitment' | 'decision' | 'idea' | 'learning'
  subtype?: string
  workstream: string
  priority: 'high' | 'medium' | 'low'
  title: string
  source?: 'slack' | 'email' | 'manual'
  channel?: string
  due?: string
}

export const REVIEW_QUEUE: QueueItem[] = [
  { type: 'commitment', subtype: 'Follow-up', workstream: 'cross-functional-alignment', priority: 'high', title: 'Follow up on accessibility audit P1 items with platform team', source: 'slack', channel: '#design-team' },
  { type: 'commitment', subtype: 'Review', workstream: 'cross-functional-alignment', priority: 'high', title: 'Review and approve token migration PR before Thursday', source: 'slack', channel: '#design-system', due: '2026-09-06' },
  { type: 'commitment', subtype: 'Prepare', workstream: 'cross-functional-alignment', priority: 'medium', title: 'Prepare design system migration guide for downstream teams', source: 'slack', channel: '#frontend-platform' },
  { type: 'decision', workstream: 'strategy', priority: 'medium', title: 'Decide on charting library for analytics view', source: 'email' },
  { type: 'commitment', subtype: 'Share', workstream: 'strategy', priority: 'high', title: 'Share LLM cost dashboard feedback with AI team by EOW', source: 'slack', channel: '#ai-team', due: '2026-09-08' },
  { type: 'idea', workstream: 'team-operations', priority: 'low', title: 'Automated design QA checks in CI pipeline', source: 'slack', channel: '#design-team' },
  { type: 'learning', workstream: 'cross-functional-alignment', priority: 'low', title: 'Post-mortem pattern: cascading failures from config drift', source: 'slack', channel: '#incident-review' },
]

// ---------------------------------------------------------------------------
// IDEAS
// ---------------------------------------------------------------------------
export interface Idea {
  title: string
  workstream: string
  status: 'active' | 'parked'
  detail?: string
}
export const IDEAS: Idea[] = [
  { title: 'Design system health dashboard — track adoption metrics across teams', workstream: 'team-operations', status: 'active', detail: 'Surface component usage, override frequency, and token adoption rates. Could pull from bundler stats and lint reports.' },
  { title: 'AI-assisted design review — automated consistency checks before PR', workstream: 'strategy', status: 'active', detail: 'Run visual regression + token compliance checks on every frontend PR. Flag inconsistencies before human review.' },
  { title: 'Async standup format — replace daily sync with threaded updates', workstream: 'team-operations', status: 'parked', detail: 'Team expressed interest but timing not right during Q3 push.' },
  { title: 'Cross-product pattern library — shared interaction patterns across products', workstream: 'cross-functional-alignment', status: 'active', detail: 'Shared interaction patterns across products to reduce duplicated design work.' },
]

// ---------------------------------------------------------------------------
// SLACK
// ---------------------------------------------------------------------------
export interface SlackMsg {
  author: string
  channel: string
  time: string
  text: string
  needsReply?: boolean
}
export const SLACK_DATES = ['Thu, Sep 3', 'Wed, Sep 2', 'Tue, Sep 1']
export const SLACK_GROUPS = [
  { key: '@Mentions', count: 3 },
  { key: 'Front Burner', count: 5 },
  { key: 'Signal feed', count: 4 },
]
export const SLACK_MENTIONS: SlackMsg[] = [
  { author: 'Alex Chen', channel: '#design-team', time: 'Today 9:14 AM', needsReply: true, text: 'Hey, can you review the accessibility audit findings? We need your sign-off before we prioritize the P1s for next sprint.' },
  { author: 'Priya Sharma', channel: '#ai-team', time: 'Today 10:42 AM', needsReply: true, text: 'The LLM cost dashboard prototype is up in staging — would love your design feedback when you have a few minutes.' },
  { author: 'Jordan Lee', channel: '#product-eng', time: 'Today 8:30 AM', text: 'Thanks for the component API feedback — we incorporated your suggestions into the latest iteration.' },
]

// ---------------------------------------------------------------------------
// SCHEDULE
// ---------------------------------------------------------------------------
export interface Block {
  time: string
  title: string
  kind: 'Light' | 'Meeting' | 'Deep focus' | 'Lunch' | 'Medium focus' | 'Wind-down'
  detail?: string
}
export const SCHEDULE_DATES = ['Thu, Sep 3', 'Wed, Sep 2']
export const TODAYS_FOCUS = 'Ship the accessibility fixes and finalize the Q3 roadmap proposal.'
export const SCHEDULE: Block[] = [
  { time: '08:30 – 09:00', title: 'Morning review — briefing + Slack catch-up', kind: 'Light', detail: 'Check overnight messages and review queue' },
  { time: '09:00 – 09:30', title: 'Design Sync', kind: 'Meeting', detail: 'Accessibility audit follow-up' },
  { time: '09:30 – 10:00', title: 'Deep work — Q3 roadmap draft', kind: 'Deep focus', detail: 'Focus on priority ranking and resource mapping' },
  { time: '10:00 – 10:30', title: 'Sprint Planning', kind: 'Meeting' },
  { time: '10:30 – 12:00', title: 'Deep work — onboarding flow proposal', kind: 'Deep focus', detail: 'Draft the interaction model and key screens' },
  { time: '12:00 – 13:00', title: 'Lunch', kind: 'Lunch' },
  { time: '13:00 – 13:45', title: '1:1 with Engineering Lead', kind: 'Meeting', detail: 'Dashboard v2 rollout plan + component API feedback' },
  { time: '14:00 – 15:00', title: 'PR reviews + async replies', kind: 'Medium focus', detail: 'Token migration PR, design system RFC comment' },
  { time: '15:00 – 15:30', title: 'Cross-team Alignment', kind: 'Meeting' },
  { time: '15:30 – 16:30', title: 'Wind-down — admin + prep for tomorrow', kind: 'Wind-down' },
]
export const UNSCHEDULED = [
  'Review LLM cost dashboard in staging',
  'Respond to hiring pipeline email',
  'Publish updated design principles doc',
]

// ---------------------------------------------------------------------------
// TEAM
// ---------------------------------------------------------------------------
export interface Segment { label: string; pct: number; color: string }
export interface GithubPR { state: 'OPEN' | 'MERGED'; repo: string; num: string; title: string }
export interface Member {
  name: string
  role: 'PD' | 'PDE' | 'DE'
  segments: Segment[]
  focus: string[]
  github: GithubPR[]
}
export const TEAM_WEEKS = ['2026-08-27', '2026-08-20']
export const TEAM_TABS = ['Snapshots', 'People', 'Catchups']
export const TEAM: Member[] = [
  {
    name: 'Alex Chen', role: 'PD',
    segments: [
      { label: 'Dashboard redesign', pct: 60, color: '#6366f1' },
      { label: 'Design system', pct: 25, color: '#c2611c' },
      { label: 'Accessibility', pct: 15, color: '#22a05a' },
    ],
    focus: ['Panel layout v2', 'A11y P1 fixes'],
    github: [
      { state: 'OPEN', repo: 'grafana', num: '#98234', title: 'Add filter persistence to explore view' },
      { state: 'OPEN', repo: 'grafana', num: '#98301', title: 'Dark mode contrast fixes' },
    ],
  },
  {
    name: 'Priya Sharma', role: 'PD',
    segments: [
      { label: 'AI cost management', pct: 75, color: '#3b6fd4' },
      { label: 'User research', pct: 25, color: '#c0454f' },
    ],
    focus: ['Cost dashboard prototype', 'User interviews'],
    github: [{ state: 'OPEN', repo: 'grafana', num: '#98150', title: 'Cost dashboard panel' }],
  },
  {
    name: 'Jordan Lee', role: 'PDE',
    segments: [
      { label: 'Component library', pct: 55, color: '#a04dc2' },
      { label: 'Panel header', pct: 30, color: '#22a08a' },
      { label: 'Migration support', pct: 15, color: '#c2a41c' },
    ],
    focus: ['Spacing token migration', 'v4.2 migration guide'],
    github: [
      { state: 'OPEN', repo: 'design-system', num: '#412', title: 'Token migration: spacing scale v2' },
      { state: 'MERGED', repo: 'grafana', num: '#97891', title: 'Update panel header component API' },
    ],
  },
  {
    name: 'Sam Rivera', role: 'PDE',
    segments: [
      { label: 'Design QA tooling', pct: 65, color: '#d44f8f' },
      { label: 'Visual regression', pct: 35, color: '#7aa03a' },
    ],
    focus: ['Visual regression CI', 'Automated design QA checks in CI pipeline'],
    github: [{ state: 'MERGED', repo: 'grafana', num: '#98088', title: 'Visual regression setup' }],
  },
]
export const TEAM_NOTES: Record<string, string> = {
  'Alex Chen': 'Dashboard redesign on track. Token migration PR needs one more review pass. Sam shipping strong on QA tooling.',
  'Jordan Lee': 'Heavy sprint — panel header refactor took priority. Priya ramping on user research for cost management.',
}

// ---------------------------------------------------------------------------
// AGENTS (outbox)
// ---------------------------------------------------------------------------
export interface OutboxItem {
  status: 'ready for review' | 'working' | 'sent'
  channel?: 'Slack' | 'Doc'
  target?: string
  workstream?: string
  title: string
  ref?: string
  dots: number // filled progress dots out of 4
  timestamp: string
  note: string
}
export const OUTBOX_COUNTS = { working: 1, ready: 1, sent: 1 }
export const OUTBOX: OutboxItem[] = [
  { status: 'ready for review', channel: 'Slack', target: '#design-team', workstream: 'team-operations', title: 'Weekly design team update — sprint 13 recap + sprint 14 priorities', dots: 2, timestamp: 'Sep 3, 9:51 PM', note: 'Expand to review, then approve' },
  { status: 'working', channel: 'Doc', workstream: 'strategy', title: 'Competitive analysis summary for product leadership', ref: 'com-demo-008', dots: 1, timestamp: 'Sep 3, 8:51 PM', note: 'Claude is drafting this' },
  { status: 'sent', channel: 'Slack', target: 'Taylor Kim', workstream: 'cross-functional-alignment', title: 'Design review feedback for dashboard redesign', dots: 4, timestamp: 'Sep 1, 10:51 PM', note: 'Delivered' },
]

// ---------------------------------------------------------------------------
// TOOLKIT
// ---------------------------------------------------------------------------
export const TOOLKIT_TABS = ['Capabilities', 'Research', 'Workflows']
export const TOOLKIT_CATEGORIES = [
  { key: 'Skills', count: 7 },
  { key: 'Integrations', count: 5 },
  { key: 'Views', count: 8 },
]
export interface Skill { cmd: string; desc: string; planned?: boolean }
export const SKILLS: Skill[] = [
  { cmd: '/daily-briefing', desc: 'Pull calendar, email, Slack, and GitHub data into a morning briefing with extracted commitments and decisions.' },
  { cmd: '/daily-schedule', desc: 'Generate a time-blocked schedule based on calendar, energy patterns, and open commitments.' },
  { cmd: '/review', desc: 'Work through the review queue — confirm, edit, dismiss, or snooze proposed commitments, decisions, ideas, and learnings.' },
  { cmd: '/capture', desc: 'Quickly log a commitment, decision, note, or follow-up from the CLI. Writes directly to entities without going through review.' },
  { cmd: '/weekly-review', desc: 'End-of-week summary — commitments made vs. completed, open decisions, drifting workstreams, and Slack activity trends.' },
  { cmd: '/session-end', desc: 'Reflect on the current session — save memories, summarize work done, suggest follow-ups for next time.' },
  { cmd: '/research', desc: 'Run product research across Slack channels. Produces max 3 high-leverage findings with business impact framing.', planned: true },
]
export interface Integration { name: string; desc: string }
export const INTEGRATIONS: Integration[] = [
  { name: 'Google Calendar', desc: "Read-only access via gws CLI. Pulls today's events, filters by RSVP status, extracts attendee lists." },
  { name: 'Gmail', desc: 'Pulls threaded email, extracts commitments and decisions, drafts replies for review.' },
  { name: 'Slack', desc: 'Search recent messages in AI team channels, surface @mentions, tier signals by channel importance.' },
  { name: 'GitHub', desc: 'Query GitHub for open + recently closed PRs, review status, and CI state.' },
  { name: 'Google Docs', desc: 'Create Google Docs for briefings, summaries, and competitive analyses; open in a new tab.' },
]
export interface ResearchItem { title: string; note: string }
export const RESEARCH: ResearchItem[] = [
  { title: 'AI Copilot Competitive Landscape', note: 'Distill research findings into channel-targeted Slack drafts' },
  { title: 'LLM Pricing Models Comparison', note: 'Competitive analysis summary for product leadership' },
  { title: 'Design Token Adoption Metrics', note: 'Surface component usage, override frequency, and token adoption rates' },
  { title: 'OSS Onboarding Funnel Analysis', note: 'Where drop-off happens in the OSS onboarding flow' },
  { title: 'Slack Sentiment Analysis — Assistant Adoption', note: 'Team sentiment on assistant adoption across channels' },
]
export interface Workflow { name: string; desc: string }
export const WORKFLOWS: Workflow[] = [
  { name: 'Morning review — briefing + Slack catch-up', desc: 'Run /catchup.' },
  { name: 'Designer Activity Check', desc: 'Pull GitHub PRs + Slack activity for Emily Yang and Husain Zaidi' },
  { name: 'Competitive analysis summary', desc: 'Distill research findings into channel-targeted Slack drafts' },
  { name: 'Slack Digest', desc: 'Search Slack for recent messages in AI team channels' },
  { name: 'Weekly design team update', desc: 'Run /weekly-snapshot.' },
]
