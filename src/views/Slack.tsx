import { useState } from 'react'
import { C, mono, withAlpha } from '../theme'
import { SLACK_DATES, SLACK_GROUPS, SLACK_MENTIONS } from '../data'
import { SectionLabel } from '../components/ui'

export default function Slack() {
  const [group, setGroup] = useState('@Mentions')

  return (
    <div className="flex h-full">
      {/* sidebar */}
      <div className="w-48 flex-shrink-0 border-r flex flex-col overflow-hidden" style={{ borderColor: C.line, width: 200 }}>
        <div className="px-3 py-3 border-b" style={{ borderColor: C.line }}>
          <SectionLabel>Slack</SectionLabel>
        </div>
        <div className="flex-1 overflow-y-auto">
          {SLACK_DATES.map((d, i) => (
            <button
              key={d}
              className="w-full text-left px-3 py-2.5 text-xs cursor-pointer block"
              style={{ background: i === 0 ? C.panel : 'transparent', color: i === 0 ? C.text : '#666', border: 'none', fontFamily: mono }}
            >
              {d}
            </button>
          ))}
          <div className="h-px my-2" style={{ background: C.line }} />
          {SLACK_GROUPS.map((g) => {
            const on = g.key === group
            return (
              <button
                key={g.key}
                onClick={() => setGroup(g.key)}
                className="w-full flex items-center justify-between px-3 py-2.5 text-xs cursor-pointer"
                style={{ background: on ? C.panel : 'transparent', color: on ? C.text : '#888', border: 'none', fontFamily: mono }}
              >
                <span>{g.key}</span>
                <span style={{ color: on ? C.pink : C.faint2 }}>{g.count}</span>
              </button>
            )
          })}
        </div>
        <div className="px-3 py-3 border-t" style={{ borderColor: C.line }}>
          <div style={{ color: C.pink, fontFamily: mono, fontSize: '0.68rem' }}>2 need reply</div>
          <div style={{ color: C.faint, fontFamily: mono, fontSize: '0.68rem' }}>7 actions across channels</div>
        </div>
      </div>

      {/* messages */}
      <div className="flex-1 overflow-y-auto px-8 py-6">
        <div className="uppercase mb-4" style={{ color: C.faint, fontFamily: mono, fontSize: '0.68rem', letterSpacing: '0.08em' }}>
          @Mentions — 2 need a reply
        </div>
        <div className="space-y-4" style={{ maxWidth: 720 }}>
          {SLACK_MENTIONS.map((m) => (
            <div key={m.author + m.time} className="rounded-lg p-4" style={{ background: C.panel, border: `1px solid ${C.line}` }}>
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm">
                  <span style={{ color: C.text, fontWeight: 600 }}>{m.author}</span>
                  <span style={{ color: C.faint }}> in </span>
                  <span style={{ color: C.dim2, fontFamily: mono, fontSize: '0.8rem' }}>{m.channel}</span>
                </div>
                <div className="flex items-center gap-2">
                  {m.needsReply && (
                    <span className="rounded px-1.5 py-0.5" style={{ background: withAlpha(C.pink, 0.12), color: C.pink, fontFamily: mono, fontSize: '0.62rem' }}>
                      needs reply
                    </span>
                  )}
                  <span style={{ color: C.faint2, fontFamily: mono, fontSize: '0.72rem' }}>{m.time}</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: C.dim }}>
                {m.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
