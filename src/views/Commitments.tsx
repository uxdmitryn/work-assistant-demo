import { C, mono, withAlpha } from '../theme'
import { MY_PRS, COMMITMENT_COLUMNS } from '../data'
import { SectionLabel, Count, WorkstreamTag, SourceBadge } from '../components/ui'

function prStatusColor(kind: string) {
  return kind === 'ok' ? C.green : kind === 'warn' ? C.amber : C.red
}

export default function Commitments() {
  return (
    <div className="h-full overflow-y-auto">
      {/* top action bar */}
      <div className="flex justify-end px-6 py-3 border-b" style={{ borderColor: C.line }}>
        <button
          className="text-sm rounded px-3 py-1.5 cursor-pointer"
          style={{ background: C.pink, color: C.bg, border: 'none', fontWeight: 500 }}
        >
          + New commitment
        </button>
      </div>

      {/* My PRs strip */}
      <div className="px-6 pt-4 pb-2">
        <div className="flex items-center gap-1.5 mb-3">
          <SectionLabel>My PRs</SectionLabel>
          <Count n={MY_PRS.length} />
          <span
            className="ml-2 text-xs rounded px-1.5 py-0.5"
            style={{ background: withAlpha(C.red, 0.12), color: C.red, fontFamily: mono, fontSize: '0.62rem' }}
          >
            1 need attention ▾
          </span>
        </div>
        <div className="flex gap-3 flex-wrap">
          {MY_PRS.map((pr) => (
            <div key={pr.repo} className="rounded-lg p-3" style={{ background: C.panel, border: `1px solid ${C.line}`, minWidth: 260, flex: 1 }}>
              <div className="text-xs mb-1.5" style={{ color: C.faint, fontFamily: mono }}>
                {pr.repo}
              </div>
              <div className="text-sm mb-2" style={{ color: C.text }}>
                {pr.title}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs rounded px-1.5 py-0.5" style={{ background: withAlpha(prStatusColor(pr.statusKind), 0.1), color: prStatusColor(pr.statusKind), fontFamily: mono, fontSize: '0.62rem' }}>
                  {pr.status}
                </span>
                <span className="text-xs" style={{ color: C.green, fontFamily: mono, fontSize: '0.62rem' }}>
                  {pr.ci}
                </span>
                <span className="text-xs ml-auto" style={{ color: C.faint2, fontFamily: mono, fontSize: '0.62rem' }}>
                  {pr.age}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Kanban columns */}
      <div className="grid px-6 pt-4 pb-8 gap-4" style={{ gridTemplateColumns: 'repeat(4, minmax(0, 1fr))' }}>
        {COMMITMENT_COLUMNS.map((col) => (
          <div key={col.key} className="min-w-0">
            <div className="flex items-center gap-1.5 mb-3 pb-2 border-b" style={{ borderColor: C.line }}>
              <SectionLabel>{col.key}</SectionLabel>
              <Count n={col.items.length} />
            </div>
            <div className="space-y-3">
              {col.items.map((c) => (
                <div key={c.title} className="rounded-lg p-3" style={{ background: C.panel, border: `1px solid ${C.line}` }}>
                  <div className="text-sm mb-2 leading-snug" style={{ color: C.text }}>
                    {c.title}
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    {c.agent && (
                      <span className="text-xs rounded px-1.5 py-0.5" style={{ background: withAlpha(C.purple, 0.1), color: C.purple, fontFamily: mono, fontSize: '0.62rem' }}>
                        ◆ agent
                      </span>
                    )}
                    <WorkstreamTag ws={c.workstream} />
                    <span className="inline-flex items-center gap-1 text-xs" style={{ color: c.overdue ? C.red : C.faint2, fontFamily: mono, fontSize: '0.68rem' }}>
                      {c.overdue && '⚠ '}
                      {c.date}
                    </span>
                    <SourceBadge source={c.source} channel={c.channel} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
