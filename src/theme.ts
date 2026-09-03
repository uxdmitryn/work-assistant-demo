// Color tokens reverse-engineered from the original demo.
export const C = {
  bg: '#0a0a0a',
  panel: '#141414', // rgb(20,20,20)
  panel2: '#161616',
  line: '#1a1a1a', // rgb(26,26,26)
  line2: '#1f1f1f', // rgb(31,31,31)
  line3: '#262626', // rgb(38,38,38)
  text: '#e5e5e5',
  text2: '#d4d4d4', // rgb(212,212,212)
  dim: '#999999',
  dim2: '#888888', // rgb(136,136,136)
  faint: '#555555', // rgb(85,85,85)
  faint2: '#444444', // rgb(68,68,68)
  faint3: '#333333', // rgb(51,51,51)

  pink: '#ff80c2', // rgb(255,128,194)
  green: '#4ade80', // rgb(74,222,128)
  green2: '#22c55e', // rgb(34,197,94)
  blue: '#6b9bff', // rgb(107,155,255)
  red: '#ff2d78', // rgb(255,45,120)
  amber: '#f59e0b', // rgb(245,158,11)
  amber2: '#fbbf24',
  purple: '#a78bfa', // rgb(167,139,250)
  gray: '#6b7280', // rgb(107,114,128)
} as const

export const mono = "'Geist Mono', monospace"

// Deterministic pink hue per workstream (mirrors the original's hashed accents).
const WORKSTREAM_COLORS: Record<string, string> = {
  'cross-functional-alignment': '#ff9ec8', // rgb(255,158,200)
  strategy: '#e8419e', // rgb(232,65,158)
  'team-operations': '#ff6eab', // rgb(255,110,171)
  hiring: '#ffb8d9', // rgb(255,184,217)
  'people-management': '#f050a0', // rgb(240,80,160)
  'leadership-follow-up': '#ff80c2',
}
export function workstreamColor(ws: string): string {
  if (WORKSTREAM_COLORS[ws]) return WORKSTREAM_COLORS[ws]
  // hash fallback -> pink family
  let h = 0
  for (let i = 0; i < ws.length; i++) h = (h * 31 + ws.charCodeAt(i)) & 0xffff
  const hues = Object.values(WORKSTREAM_COLORS)
  return hues[h % hues.length]
}

export function withAlpha(hex: string, alpha: number): string {
  const n = hex.replace('#', '')
  const r = parseInt(n.slice(0, 2), 16)
  const g = parseInt(n.slice(2, 4), 16)
  const b = parseInt(n.slice(4, 6), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}
