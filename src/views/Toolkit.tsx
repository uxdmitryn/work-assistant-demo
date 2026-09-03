import { useState } from 'react'
import { C, mono, withAlpha } from '../theme'
import { TOOLKIT_TABS, TOOLKIT_CATEGORIES, SKILLS, INTEGRATIONS, RESEARCH, WORKFLOWS } from '../data'
import { SectionLabel } from '../components/ui'

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg p-4" style={{ background: C.panel, border: `1px solid ${C.line}` }}>
      {children}
    </div>
  )
}

export default function Toolkit() {
  const [tab, setTab] = useState('Capabilities')
  const [cat, setCat] = useState('Skills')

  return (
    <div className="flex flex-col h-full">
      {/* sub tabs */}
      <div className="flex justify-center gap-1 py-2 border-b" style={{ borderColor: C.line }}>
        {TOOLKIT_TABS.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className="rounded px-3 py-1.5 text-sm cursor-pointer"
            style={{ background: t === tab ? C.line2 : 'transparent', color: t === tab ? C.text : C.faint, border: 'none' }}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="flex flex-1 overflow-hidden">
        {tab === 'Capabilities' && (
          <>
            {/* categories */}
            <div className="w-48 flex-shrink-0 border-r flex flex-col overflow-hidden" style={{ borderColor: C.line, width: 190 }}>
              <div className="px-4 py-3 border-b" style={{ borderColor: C.line }}>
                <span className="uppercase" style={{ color: C.faint, fontFamily: mono, fontSize: '0.62rem', letterSpacing: '0.08em', borderLeft: `2px solid ${C.pink}`, paddingLeft: 6 }}>
                  Categories
                </span>
              </div>
              <div className="flex-1 overflow-y-auto py-2">
                {TOOLKIT_CATEGORIES.map((c) => {
                  const on = c.key === cat
                  return (
                    <button
                      key={c.key}
                      onClick={() => setCat(c.key)}
                      className="w-full flex items-center justify-between px-4 py-2.5 text-sm cursor-pointer"
                      style={{ background: on ? C.panel : 'transparent', color: on ? C.text : '#888', border: 'none', fontFamily: mono, fontSize: '0.85rem' }}
                    >
                      <span>{c.key}</span>
                      <span style={{ color: C.faint2 }}>{c.count}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* content */}
            <div className="flex-1 overflow-y-auto px-8 py-6">
              <div style={{ maxWidth: 720 }}>
                <div className="uppercase mb-4" style={{ color: C.dim2, fontFamily: mono, fontSize: '0.68rem', letterSpacing: '0.08em', borderLeft: `2px solid ${C.pink}`, paddingLeft: 8 }}>
                  {cat}
                </div>

                {cat === 'Skills' && (
                  <div className="space-y-3">
                    {SKILLS.map((s) => (
                      <Card key={s.cmd}>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span style={{ color: C.faint2 }}>▸</span>
                          <span style={{ color: C.text, fontFamily: mono, fontWeight: 600 }}>{s.cmd}</span>
                          {s.planned && (
                            <span className="rounded px-1.5 py-0.5" style={{ background: withAlpha(C.pink, 0.12), color: C.pink, fontFamily: mono, fontSize: '0.58rem' }}>
                              PLANNED
                            </span>
                          )}
                        </div>
                        <p className="text-sm leading-relaxed" style={{ color: C.dim, paddingLeft: 20 }}>
                          {s.desc}
                        </p>
                      </Card>
                    ))}
                  </div>
                )}

                {cat === 'Integrations' && (
                  <div className="space-y-3">
                    {INTEGRATIONS.map((it) => (
                      <Card key={it.name}>
                        <div className="text-sm mb-1.5" style={{ color: C.text, fontWeight: 600 }}>
                          {it.name}
                        </div>
                        <p className="text-sm leading-relaxed" style={{ color: C.dim }}>
                          {it.desc}
                        </p>
                      </Card>
                    ))}
                  </div>
                )}

                {cat === 'Views' && (
                  <div className="space-y-3">
                    {['Briefs', 'Review Queue', 'Commitments', 'Ideas', 'Slack', 'Schedule', 'Team', 'Toolkit'].map((v) => (
                      <Card key={v}>
                        <div className="text-sm" style={{ color: C.text }}>{v}</div>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </>
        )}

        {tab === 'Research' && (
          <div className="flex-1 overflow-y-auto px-8 py-6">
            <div style={{ maxWidth: 720 }}>
              <SectionLabel>Research</SectionLabel>
              <div className="space-y-3 mt-4">
                {RESEARCH.map((r) => (
                  <Card key={r.title}>
                    <div className="text-sm mb-1" style={{ color: C.text, fontWeight: 600 }}>{r.title}</div>
                    <p className="text-sm" style={{ color: C.dim }}>{r.note}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === 'Workflows' && (
          <div className="flex-1 overflow-y-auto px-8 py-6">
            <div style={{ maxWidth: 720 }}>
              <SectionLabel>Workflows</SectionLabel>
              <div className="space-y-3 mt-4">
                {WORKFLOWS.map((w) => (
                  <Card key={w.name}>
                    <div className="text-sm mb-1" style={{ color: C.text, fontWeight: 600 }}>{w.name}</div>
                    <p className="text-sm" style={{ color: C.dim, fontFamily: mono, fontSize: '0.78rem' }}>{w.desc}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
