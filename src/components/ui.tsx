import type { CSSProperties, ReactNode } from 'react'
import { C, mono, workstreamColor, withAlpha } from '../theme'

/** Small monospace section label, e.g. "MY PRS", "CONFIRMED". */
export function SectionLabel({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  return (
    <span
      className="text-xs font-medium uppercase"
      style={{ color: C.faint, fontFamily: mono, letterSpacing: '0.1em', ...style }}
    >
      {children}
    </span>
  )
}

/** Count chip that trails a section label. */
export function Count({ n }: { n: number }) {
  return (
    <span
      className="ml-1.5"
      style={{ color: C.faint2, fontFamily: mono, fontSize: '0.7rem' }}
    >
      {n}
    </span>
  )
}

/** Filled pill tag (used for tags/badges throughout). */
export function Pill({
  children,
  color,
  bg,
  border,
  monospace = false,
  style,
}: {
  children: ReactNode
  color: string
  bg?: string
  border?: string
  monospace?: boolean
  style?: CSSProperties
}) {
  return (
    <span
      className="inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-xs"
      style={{
        color,
        background: bg ?? withAlpha(color, 0.09),
        border: border ? `1px solid ${border}` : undefined,
        fontFamily: monospace ? mono : undefined,
        fontSize: '0.68rem',
        lineHeight: 1.2,
        ...style,
      }}
    >
      {children}
    </span>
  )
}

/** Workstream tag with its deterministic pink hue. */
export function WorkstreamTag({ ws }: { ws: string }) {
  const c = workstreamColor(ws)
  return <Pill color={c}>{ws}</Pill>
}

/** Source badge: "via slack #channel", "via email", "via manual", "◆ agent". */
export function SourceBadge({ source, channel }: { source: string; channel?: string }) {
  const map: Record<string, string> = {
    slack: C.green,
    email: C.blue,
    manual: C.faint,
    agent: C.purple,
  }
  const c = map[source] ?? C.faint
  return (
    <span
      className="inline-flex items-center gap-1 rounded px-1.5 py-0.5"
      style={{ color: c, background: withAlpha(c, 0.09), fontFamily: mono, fontSize: '0.62rem', letterSpacing: '0.03em' }}
    >
      {source === 'agent' ? '◆ agent' : `via ${source}`}
      {channel ? ` ${channel}` : ''}
    </span>
  )
}

export function PriorityDot({ level }: { level: 'high' | 'medium' | 'low' }) {
  const c = level === 'high' ? C.red : level === 'medium' ? C.amber : C.faint
  return (
    <span className="inline-flex items-center gap-1" style={{ color: c, fontSize: '0.68rem', fontFamily: mono }}>
      <span style={{ width: 6, height: 6, borderRadius: 99, background: c, display: 'inline-block' }} />
      {level}
    </span>
  )
}
