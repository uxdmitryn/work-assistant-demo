import { useMemo, useState } from 'react'
import { marked } from 'marked'
import { C, mono } from '../theme'
import { HISTORY, BRIEFINGS } from '../data'
import { SectionLabel } from '../components/ui'

marked.setOptions({ breaks: true, gfm: true })

export default function Briefs() {
  const [active, setActive] = useState(HISTORY[0])
  const html = useMemo(() => marked.parse(BRIEFINGS[active] ?? '') as string, [active])

  return (
    <div className="flex h-full">
      {/* History sidebar */}
      <div className="w-48 flex-shrink-0 border-r flex flex-col overflow-hidden" style={{ borderColor: C.line }}>
        <div className="px-3 py-3 border-b" style={{ borderColor: C.line }}>
          <SectionLabel>History</SectionLabel>
        </div>
        <div className="flex-1 overflow-y-auto">
          {HISTORY.map((d) => {
            const on = d === active
            return (
              <button
                key={d}
                onClick={() => setActive(d)}
                className="w-full text-left px-3 py-2.5 text-xs transition-all cursor-pointer block"
                style={{ background: on ? C.panel : 'transparent', color: on ? C.text : '#666', border: 'none', fontFamily: mono }}
              >
                {d}
              </button>
            )
          })}
        </div>
      </div>

      {/* Briefing content */}
      <div className="flex-1 overflow-y-auto px-8 py-6">
        <div className="briefing-content" style={{ maxWidth: 680 }} dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  )
}
