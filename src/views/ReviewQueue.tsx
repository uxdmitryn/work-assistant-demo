import { useState } from 'react'
import { C, mono, withAlpha } from '../theme'
import { REVIEW_QUEUE, type QueueItem } from '../data'
import { WorkstreamTag, SourceBadge, PriorityDot } from '../components/ui'

const TYPE_COLOR: Record<QueueItem['type'], string> = {
  commitment: C.pink,
  decision: C.purple,
  idea: C.amber,
  learning: C.blue,
}

function groupBy(items: QueueItem[], key: 'workstream' | 'subtype') {
  const map = new Map<string, QueueItem[]>()
  for (const it of items) {
    const k = (key === 'workstream' ? it.workstream : it.type) || 'other'
    if (!map.has(k)) map.set(k, [])
    map.get(k)!.push(it)
  }
  return [...map.entries()]
}

export default function ReviewQueue() {
  const [group, setGroup] = useState<'workstream' | 'subtype'>('workstream')
  const groups = groupBy(REVIEW_QUEUE, group)

  return (
    <div className="h-full overflow-y-auto">
      {/* toolbar */}
      <div className="flex items-center justify-between px-6 py-3 border-b" style={{ borderColor: C.line }}>
        <div className="flex items-center gap-3 text-sm">
          <button className="cursor-pointer" style={{ background: 'none', border: 'none', color: C.dim, fontSize: '0.8rem' }}>
            Select all
          </button>
          <span style={{ color: C.faint2 }}>|</span>
          <span style={{ color: C.dim2, fontFamily: mono, fontSize: '0.8rem' }}>{REVIEW_QUEUE.length} items</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span style={{ color: C.faint }}>Group by</span>
          {(['workstream', 'subtype'] as const).map((g) => (
            <button
              key={g}
              onClick={() => setGroup(g)}
              className="rounded px-2 py-0.5 cursor-pointer"
              style={{ background: group === g ? C.line2 : 'transparent', color: group === g ? C.text2 : C.faint, border: 'none', fontFamily: mono, fontSize: '0.78rem' }}
            >
              {g}
            </button>
          ))}
          <button className="rounded px-2.5 py-1 cursor-pointer ml-2" style={{ background: C.line2, color: C.text2, border: 'none', fontSize: '0.8rem' }}>
            + Add item
          </button>
        </div>
      </div>

      <div className="px-6 py-4">
        {groups.map(([name, items]) => (
          <div key={name} className="mb-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="uppercase" style={{ color: C.dim2, fontFamily: mono, fontSize: '0.68rem', letterSpacing: '0.08em' }}>
                {name}
              </span>
              <span style={{ color: C.faint2, fontFamily: mono, fontSize: '0.68rem' }}>{items.length}</span>
              <div className="flex-1 h-px" style={{ background: C.line }} />
              <span style={{ color: C.faint2, fontFamily: mono, fontSize: '0.68rem' }}>select group</span>
            </div>

            <div className="space-y-3">
              {items.map((it) => (
                <div key={it.title} className="rounded-lg p-4 flex gap-3" style={{ background: C.panel, border: `1px solid ${C.line}` }}>
                  <div className="flex-shrink-0 pt-0.5">
                    <div style={{ width: 16, height: 16, borderRadius: 4, border: `1px solid ${C.faint2}` }} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className="rounded px-1.5 py-0.5" style={{ background: withAlpha(TYPE_COLOR[it.type], 0.09), color: TYPE_COLOR[it.type], fontFamily: mono, fontSize: '0.62rem' }}>
                        {it.type}
                      </span>
                      {it.subtype && (
                        <span className="rounded px-1.5 py-0.5" style={{ background: C.line2, color: C.dim2, fontFamily: mono, fontSize: '0.62rem' }}>
                          {it.subtype}
                        </span>
                      )}
                      <WorkstreamTag ws={it.workstream} />
                      <PriorityDot level={it.priority} />
                    </div>
                    <div className="text-sm mb-2" style={{ color: C.text }}>
                      {it.title}
                    </div>
                    <div className="flex items-center gap-2">
                      {it.source && <SourceBadge source={it.source} channel={it.channel} />}
                      {it.due && (
                        <span style={{ color: C.faint2, fontFamily: mono, fontSize: '0.68rem' }}>due {it.due}</span>
                      )}
                    </div>
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
