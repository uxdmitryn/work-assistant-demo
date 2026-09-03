import { useState } from 'react'
import { C, mono, withAlpha } from '../theme'
import { TEAM_WEEKS, TEAM_TABS, TEAM, TEAM_NOTES, type Member } from '../data'
import { SectionLabel } from '../components/ui'

function MemberCard({ m }: { m: Member }) {
  return (
    <div className="rounded-lg p-5 mb-5" style={{ background: C.panel, border: `1px solid ${C.line}` }}>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-lg" style={{ color: C.text, fontWeight: 600 }}>
          {m.name}
        </span>
        <span className="rounded px-1.5 py-0.5" style={{ background: withAlpha(C.purple, 0.12), color: C.purple, fontFamily: mono, fontSize: '0.6rem' }}>
          {m.role}
        </span>
      </div>

      {/* stacked bar */}
      <div className="flex h-4 rounded overflow-hidden mb-2" style={{ background: C.line }}>
        {m.segments.map((s) => (
          <div key={s.label} style={{ width: `${s.pct}%`, background: s.color }} />
        ))}
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4">
        {m.segments.map((s) => (
          <span key={s.label} className="inline-flex items-center gap-1.5 text-xs" style={{ color: C.dim2, fontFamily: mono, fontSize: '0.72rem' }}>
            <span style={{ width: 7, height: 7, borderRadius: 99, background: s.color, display: 'inline-block' }} />
            {s.label} {s.pct}%
          </span>
        ))}
      </div>

      <div className="mb-4">
        <div className="uppercase mb-1.5" style={{ color: C.faint, fontFamily: mono, fontSize: '0.6rem', letterSpacing: '0.08em' }}>
          Focus
        </div>
        <div className="flex flex-wrap gap-2">
          {m.focus.map((f) => (
            <span key={f} className="rounded px-2 py-0.5 text-xs" style={{ background: C.line2, color: C.text2, fontFamily: mono, fontSize: '0.72rem' }}>
              {f}
            </span>
          ))}
        </div>
      </div>

      <div>
        <div className="uppercase mb-1.5" style={{ color: C.faint, fontFamily: mono, fontSize: '0.6rem', letterSpacing: '0.08em' }}>
          Github
        </div>
        <div className="space-y-1">
          {m.github.map((g) => (
            <div key={g.num} className="flex items-center gap-2 text-sm">
              <span className="rounded px-1.5 py-0.5" style={{ background: g.state === 'OPEN' ? withAlpha(C.blue, 0.12) : withAlpha(C.green, 0.12), color: g.state === 'OPEN' ? C.blue : C.green, fontFamily: mono, fontSize: '0.58rem' }}>
                {g.state}
              </span>
              <span style={{ color: C.faint, fontFamily: mono, fontSize: '0.8rem' }}>{g.repo}</span>
              <span style={{ color: C.pink, fontFamily: mono, fontSize: '0.8rem' }}>{g.num}</span>
              <span style={{ color: C.dim }}>{g.title}</span>
            </div>
          ))}
        </div>
      </div>

      {TEAM_NOTES[m.name] && (
        <p className="text-sm mt-4 pt-3 border-t leading-relaxed" style={{ color: C.faint, borderColor: C.line }}>
          {TEAM_NOTES[m.name]}
        </p>
      )}
    </div>
  )
}

export default function Team() {
  const [tab, setTab] = useState('Snapshots')

  return (
    <div className="flex h-full">
      {/* sidebar */}
      <div className="w-48 flex-shrink-0 border-r flex flex-col overflow-hidden" style={{ borderColor: C.line, width: 200 }}>
        <div className="px-3 py-3 border-b" style={{ borderColor: C.line }}>
          <SectionLabel>Team</SectionLabel>
        </div>
        <div className="flex gap-3 px-3 py-2 border-b" style={{ borderColor: C.line }}>
          {TEAM_TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className="cursor-pointer text-xs"
              style={{ background: 'none', border: 'none', borderBottom: `2px solid ${t === tab ? C.pink : 'transparent'}`, color: t === tab ? C.text : C.faint, padding: '2px 0' }}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="flex-1 overflow-y-auto">
          {TEAM_WEEKS.map((w, i) => (
            <button
              key={w}
              className="w-full text-left px-3 py-2.5 text-xs cursor-pointer block"
              style={{ background: i === 0 ? C.panel : 'transparent', color: i === 0 ? C.text : '#666', border: 'none', fontFamily: mono }}
            >
              {w}
            </button>
          ))}
        </div>
        <div className="px-3 py-3 border-t" style={{ borderColor: C.line }}>
          <div style={{ color: C.faint, fontFamily: mono, fontSize: '0.68rem' }}>2 directs · 2 PDE</div>
        </div>
      </div>

      {/* snapshots */}
      <div className="flex-1 overflow-y-auto px-8 py-6">
        <div style={{ maxWidth: 760 }}>
          <div className="flex items-center gap-2 mb-5">
            <h1 className="text-lg" style={{ color: C.text, fontWeight: 600 }}>
              Week of {TEAM_WEEKS[0]}
            </h1>
            <span className="rounded px-1.5 py-0.5" style={{ background: withAlpha(C.green, 0.12), color: C.green, fontFamily: mono, fontSize: '0.62rem' }}>
              finalized
            </span>
          </div>
          {TEAM.map((m) => (
            <MemberCard key={m.name} m={m} />
          ))}
        </div>
      </div>
    </div>
  )
}
