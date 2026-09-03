import { C, mono, withAlpha } from '../theme'
import { SCHEDULE_DATES, TODAYS_FOCUS, SCHEDULE, UNSCHEDULED, type Block } from '../data'
import { SectionLabel } from '../components/ui'

const KIND_COLOR: Record<Block['kind'], string> = {
  Light: C.blue,
  Meeting: C.purple,
  'Deep focus': C.red,
  'Medium focus': C.amber,
  Lunch: C.green,
  'Wind-down': C.gray,
}

export default function Schedule() {
  return (
    <div className="flex h-full">
      {/* dates sidebar */}
      <div className="w-48 flex-shrink-0 border-r flex flex-col overflow-hidden" style={{ borderColor: C.line, width: 200 }}>
        <div className="px-3 py-3 border-b" style={{ borderColor: C.line }}>
          <SectionLabel>Schedule</SectionLabel>
        </div>
        <div className="flex-1 overflow-y-auto">
          {SCHEDULE_DATES.map((d, i) => (
            <button
              key={d}
              className="w-full text-left px-3 py-2.5 text-xs cursor-pointer block"
              style={{ background: i === 0 ? C.panel : 'transparent', color: i === 0 ? C.text : '#666', border: 'none', fontFamily: mono }}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      {/* timeline */}
      <div className="flex-1 overflow-y-auto px-8 py-6">
        <div style={{ maxWidth: 640 }}>
          <div className="uppercase mb-3" style={{ color: C.faint, fontFamily: mono, fontSize: '0.68rem', letterSpacing: '0.1em' }}>
            Today's focus
          </div>
          <p className="italic text-sm mb-2" style={{ color: C.dim }}>
            {TODAYS_FOCUS}
          </p>

          <div className="h-px my-6" style={{ background: C.line }} />

          <div className="space-y-1">
            {SCHEDULE.map((b) => {
              const c = KIND_COLOR[b.kind]
              return (
                <div key={b.time} className="flex gap-4 py-2 pl-3" style={{ borderLeft: `2px solid ${withAlpha(c, 0.6)}` }}>
                  <div className="flex-shrink-0 pt-0.5" style={{ width: 100, color: C.faint2, fontFamily: mono, fontSize: '0.72rem' }}>
                    {b.time}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm" style={{ color: C.text }}>{b.title}</span>
                      <span className="rounded px-1.5 py-0.5" style={{ background: withAlpha(c, 0.12), color: c, fontFamily: mono, fontSize: '0.6rem' }}>
                        {b.kind}
                      </span>
                    </div>
                    {b.detail && (
                      <div className="text-sm mt-0.5" style={{ color: C.faint }}>
                        {b.detail}
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          <button className="mt-3 text-xs rounded px-3 py-2 cursor-pointer" style={{ background: 'transparent', color: C.faint, border: `1px dashed ${C.line3}` }}>
            + add block
          </button>

          <div className="uppercase mt-8 mb-3" style={{ color: C.faint, fontFamily: mono, fontSize: '0.68rem', letterSpacing: '0.1em' }}>
            Unscheduled
          </div>
          <div className="space-y-1.5">
            {UNSCHEDULED.map((u) => (
              <div key={u} className="text-sm flex items-center gap-2" style={{ color: C.dim }}>
                <span style={{ color: C.faint2 }}>–</span>
                {u}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
