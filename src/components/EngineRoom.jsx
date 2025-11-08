import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function Gauge({ label, value }) {
  const circumference = 2 * Math.PI * 36
  const dash = (value / 100) * circumference
  return (
    <div className="gauge" role="meter" aria-label={`${label} level`} aria-valuenow={value} aria-valuemin={0} aria-valuemax={100}>
      <svg width="96" height="96" viewBox="0 0 96 96" aria-hidden="true">
        <circle cx="48" cy="48" r="36" stroke="rgba(255,255,255,0.12)" strokeWidth="10" fill="none" />
        <motion.circle
          cx="48" cy="48" r="36" stroke="var(--accent)" strokeWidth="10" fill="none"
          strokeDasharray={`${dash} ${circumference}`}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: circumference - dash }}
          transition={{ duration: 1.2 }}
        />
      </svg>
      <div className="gauge-label gauge-label-mobile">{label}</div>
      <div className="gauge-value">{value}%</div>
    </div>
  )
}

const systems = [
  {
    icon: '🧭',
    title: 'Product',
    body: 'I turn ideas into structured execution — defining roadmaps, writing clear PRDs, and driving agile sprints that keep teams moving in sync and focused on measurable outcomes.'
  },
  {
    icon: '🎯',
    title: 'Research & Design',
    body: 'I ground product decisions in user insight — designing flows that are intuitive, validated through testing, and informed by continuous feedback to remove friction and enhance usability.'
  },
  {
    icon: '⚙️',
    title: 'Technology',
    body: 'I collaborate with engineers to build fast, stable systems — crafting technical documentation, mapping dependencies, and leading deployments that ensure reliable launches and scalable performance.'
  },
  {
    icon: '📊',
    title: 'Data',
    body: 'I use data as navigation — tracking performance through SQL and analytics dashboards, identifying trends through cohort analysis, and translating metrics into actionable strategy for growth and iteration.'
  }
]

export default function EngineRoom() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return
    const mq = window.matchMedia('(max-width: 640px)')
    const handler = (e) => setIsMobile(e.matches)
    // Initialize state
    handler(mq)
    // Add listener with browser compatibility
    if (mq.addEventListener) {
      mq.addEventListener('change', handler)
    } else if (mq.addListener) {
      mq.addListener(handler)
    }
    return () => {
      if (mq.removeEventListener) {
        mq.removeEventListener('change', handler)
      } else if (mq.removeListener) {
        mq.removeListener(handler)
      }
    }
  }, [])

  return (
    <section id="engine-room" className="section">
      <div className="container">
        <div className="engine-room">
          {/* Left column: headline + paragraphs */}
          <div>
            <h2>About Me</h2>
            <div className="engine-headline">I build and operate product engines that launch fast, fly smooth, and land results.</div>
            <div className="engine-sub">
              <p>From discovery to delivery, I help teams stay aligned on the problem, narrative, and plan.</p>
              <p>My method blends research, clear documentation, agile execution, and telemetry that powers iteration.</p>
              <p>The goal: repeatable lift — precision and speed in harmony.</p>
            </div>
          </div>

          {/* Right column: dials */}
          <div className="gauge-grid">
            <Gauge label="Design" value={77} />
            <Gauge label="Documentation" value={88} />
            <Gauge label="Technology" value={95} />
          </div>
        </div>

        {/* Below: systems grid with icons, accordion on mobile */}
        <div className="systems-grid">
          {systems.map((sys) => (
            <details key={sys.title} className="system-card" open={!isMobile}>
              <summary className="system-summary" aria-label={`Toggle ${sys.title}`}>
                <span className="system-icon" aria-hidden>{sys.icon}</span>
                <span className="system-title">{sys.title}</span>
              </summary>
              <div className="system-text">
                <p>{sys.body}</p>
              </div>
            </details>
          ))}
        </div>

        {/* Removed CTA button */}
      </div>
    </section>
  )
}