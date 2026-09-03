import { useState } from 'react'
import { C, mono, withAlpha } from '../theme'
import { OUTBOX, type OutboxItem } from '../data'

const STATUS: Record<OutboxItem['status'], { color: string; icon: string }> = {
  'ready for review': { color: C.amber, icon: '●' },
  working: { color: C.purple, icon: '◆' },
  sent: { color: C.blue, icon: '↗' },
}

function Dots({ filled }: { filled: number }) {
  return (
    <span className="inline-flex items-center gap-1">
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          style={{ width: 6, height: 6, borderRadius: 99, background: i < filled ? C.purple : C.faint2, display: 'inline-block' }}
        />
      ))}
    </span>
  )
}

export default function Agents() {
  const [filter, setFilter] = useState('all')
  const filters = ['all', 'working', 'ready', 'approved', 'sent']
  const items = OUTBOX.filter((o) => {
    if (filter === 'all') return true
    if (filter === 'ready') return o.status === 'ready for review'
    return o.status === filter
  })

  return (
    <div className="h-full overflow-y-auto">
      {/* toolbar */}
      <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: C.line }}>
        <div className="flex items-center gap-3 text-sm">
          <button className="cursor-pointer" style={{ background: 'none', border: 'none', color: C.dim, fontSize: '0.8rem' }}>
            Select all
          </button>
          <span style={{ color: C.faint2 }}>|</span>
          <span style={{ color: C.purple, fontFamily: mono, fontSize: '0.78rem' }}>◆1</span>
          <span style={{ color: C.amber, fontFamily: mono, fontSize: '0.78rem' }}>●1</span>
          <span style={{ color: C.blue, fontFamily: mono, fontSize: '0.78rem' }}>↗1</span>
        </div>
        <div className="flex items-center gap-3 text-sm">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="rounded px-2 py-0.5 cursor-pointer"
              style={{ background: f === filter ? C.line2 : 'transparent', color: f === filter ? C.text2 : C.faint, border: 'none', fontFamily: mono, fontSize: '0.78rem' }}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="px-6 py-5 space-y-4">
        {items.map((o) => {
          const st = STATUS[o.status]
          return (
            <div key={o.title} className="rounded-lg p-4 flex gap-3" style={{ background: C.panel, border: `1px solid ${C.line}` }}>
              <div className="flex-shrink-0 pt-0.5">
                <div style={{ width: 16, height: 16, borderRadius: 4, border: `1px solid ${C.faint2}` }} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span style={{ color: st.color, fontFamily: mono, fontSize: '0.72rem' }}>
                    {st.icon} {o.status}
                  </span>
                  {o.channel && (
                    <span className="rounded px-1.5 py-0.5" style={{ background: withAlpha(o.channel === 'Slack' ? C.green : C.blue, 0.12), color: o.channel === 'Slack' ? C.green : C.blue, fontFamily: mono, fontSize: '0.62rem' }}>
                      {o.channel}
                    </span>
                  )}
                  {o.target && (
                    <span style={{ color: C.faint, fontFamily: mono, fontSize: '0.72rem' }}>→ {o.target}</span>
                  )}
                  {o.workstream && (
                    <span className="rounded px-1.5 py-0.5" style={{ background: withAlpha(C.pink, 0.09), color: '#ff9ec8', fontFamily: mono, fontSize: '0.62rem' }}>
                      {o.workstream}
                    </span>
                  )}
                </div>
                <div className="text-sm mb-1.5" style={{ color: C.text }}>
                  {o.title}
                </div>
                {o.ref && (
                  <div style={{ color: C.faint2, fontFamily: mono, fontSize: '0.7rem' }}>↳ {o.ref}</div>
                )}
                <div className="flex items-center gap-2 mt-1">
                  <Dots filled={o.dots} />
                  <span style={{ color: C.faint2, fontFamily: mono, fontSize: '0.7rem' }}>{o.timestamp}</span>
                  {o.status !== 'working' && (
                    <span style={{ color: C.faint, fontFamily: mono, fontSize: '0.7rem' }}>▸ preview</span>
                  )}
                </div>
                <div className="italic text-sm mt-1.5" style={{ color: C.faint }}>
                  {o.note}
                </div>
              </div>
              {o.status === 'ready for review' && (
                <button className="flex-shrink-0 h-fit text-sm rounded px-3 py-1.5 cursor-pointer" style={{ background: C.green, color: C.bg, border: 'none', fontWeight: 500 }}>
                  Approve
                </button>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
