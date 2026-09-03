import { useState } from 'react'
import { C, mono } from './theme'
import { SECTIONS, TABS, TODAY_LABEL } from './data'
import Briefs from './views/Briefs'
import ReviewQueue from './views/ReviewQueue'
import Commitments from './views/Commitments'
import Ideas from './views/Ideas'
import Slack from './views/Slack'
import Schedule from './views/Schedule'
import Team from './views/Team'
import Agents from './views/Agents'
import Toolkit from './views/Toolkit'

type Section = (typeof SECTIONS)[number]
type Tab = (typeof TABS)[number]

export default function App() {
  const [section, setSection] = useState<Section>('Work Assistant')
  const [tab, setTab] = useState<Tab>('Briefs')

  return (
    <div className="flex flex-col h-screen overflow-hidden" style={{ background: C.bg }}>
      <div
        className="flex flex-col w-full mx-auto overflow-hidden"
        style={{ maxWidth: 1400, height: '100vh', borderLeft: `1px solid ${C.line}`, borderRight: `1px solid ${C.line}` }}
      >
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-3 border-b" style={{ borderColor: C.line2 }}>
          <div className="flex items-center">
            {SECTIONS.map((s) => {
              const active = s === section
              return (
                <button
                  key={s}
                  onClick={() => setSection(s)}
                  className="cursor-pointer"
                  style={{
                    background: 'none',
                    border: 'none',
                    borderBottom: `2px solid ${active ? C.pink : 'transparent'}`,
                    outline: 'none',
                    padding: '4px 0',
                    marginRight: 20,
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    fontFamily: mono,
                    color: active ? C.pink : C.faint2,
                    transition: 'color 0.15s, border-color 0.15s',
                  }}
                >
                  {s}
                </button>
              )
            })}
          </div>

          {section === 'Work Assistant' && (
            <nav className="flex gap-1">
              {TABS.map((t) => {
                const active = t === tab
                return (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className="px-3 py-1.5 rounded text-sm transition-all cursor-pointer"
                    style={{
                      background: active ? C.line2 : 'transparent',
                      color: active ? C.text : C.faint,
                      border: 'none',
                      outline: 'none',
                    }}
                  >
                    {t}
                  </button>
                )
              })}
            </nav>
          )}

          <div className="flex items-center gap-3">
            <span
              className="text-xs px-2 py-0.5 rounded"
              style={{ background: 'rgba(255,128,194,0.15)', color: C.pink, fontFamily: mono, fontSize: '0.65rem', letterSpacing: '0.08em' }}
            >
              DEMO
            </span>
            <div className="text-xs" style={{ color: C.dim2, fontFamily: mono }}>
              {TODAY_LABEL}
            </div>
          </div>
        </header>

        {/* Main */}
        <main className="flex-1 overflow-hidden">
          {section === 'Agents' ? (
            <Agents />
          ) : section === 'Toolkit' ? (
            <Toolkit />
          ) : tab === 'Briefs' ? (
            <Briefs />
          ) : tab === 'Review Queue' ? (
            <ReviewQueue />
          ) : tab === 'Commitments' ? (
            <Commitments />
          ) : tab === 'Ideas' ? (
            <Ideas />
          ) : tab === 'Slack' ? (
            <Slack />
          ) : tab === 'Schedule' ? (
            <Schedule />
          ) : (
            <Team />
          )}
        </main>
      </div>
    </div>
  )
}
