import { useState } from 'react'
import { C, mono } from '../theme'
import { IDEAS } from '../data'
import { SectionLabel, Count, WorkstreamTag } from '../components/ui'

export default function Ideas() {
  const [selected, setSelected] = useState<number | null>(null)
  const idea = selected != null ? IDEAS[selected] : null

  return (
    <div className="flex h-full">
      {/* list */}
      <div className="w-80 flex-shrink-0 border-r flex flex-col overflow-hidden" style={{ borderColor: C.line, width: 300 }}>
        <div className="flex items-center justify-between px-4 py-3 border-b" style={{ borderColor: C.line }}>
          <div className="flex items-center">
            <SectionLabel>Ideas</SectionLabel>
            <Count n={IDEAS.length} />
          </div>
          <button className="text-xs rounded px-2 py-1 cursor-pointer" style={{ background: C.pink, color: C.bg, border: 'none', fontWeight: 500 }}>
            + New
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">
          {IDEAS.map((idea, i) => {
            const on = i === selected
            return (
              <button
                key={idea.title}
                onClick={() => setSelected(i)}
                className="w-full text-left px-4 py-4 border-b cursor-pointer block"
                style={{ background: on ? C.panel : 'transparent', borderColor: C.line, border: 'none', borderBottom: `1px solid ${C.line}` }}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-sm leading-snug" style={{ color: C.text }}>
                    {idea.title}
                  </span>
                  <span className="flex-shrink-0" style={{ color: idea.status === 'active' ? C.pink : C.faint, fontFamily: mono, fontSize: '0.62rem' }}>
                    {idea.status}
                  </span>
                </div>
                <WorkstreamTag ws={idea.workstream} />
              </button>
            )
          })}
        </div>
      </div>

      {/* detail */}
      <div className="flex-1 overflow-y-auto flex items-center justify-center px-8 py-6">
        {idea ? (
          <div className="w-full" style={{ maxWidth: 640 }}>
            <h1 className="mb-3" style={{ color: C.text, fontSize: '1.1rem', fontWeight: 600 }}>
              {idea.title}
            </h1>
            <div className="flex items-center gap-2 mb-5">
              <WorkstreamTag ws={idea.workstream} />
              <span style={{ color: idea.status === 'active' ? C.pink : C.faint, fontFamily: mono, fontSize: '0.62rem' }}>{idea.status}</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: C.dim }}>
              {idea.detail}
            </p>
          </div>
        ) : (
          <div style={{ color: C.faint, fontFamily: mono }}>select an idea or create one</div>
        )}
      </div>
    </div>
  )
}
