import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function Gauge({ label, value }) {
  const circumference = 2 * Math.PI * 36
  const dash = (value / 100) * circumference
  return (
    <div className="gauge">
      <svg width="96" height="96" viewBox="0 0 96 96">
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
    title: 'Navigation Systems (Product)',
    items: [
      'PRDs & Roadmapping: Translating ideas into actionable flight paths.',
      'Agile & Sprint Planning: Keeping teams in sync and velocity high.',
      'Feature Prioritisation: Balancing ambition with focus.'
    ]
  },
  {
    icon: '🎯',
    title: 'Sensors (Research & Design)',
    items: [
      'User Interviews & Wireframing: Grounding design in real insights.',
      'Figma & Usability Testing: Creating journeys that move friction-free.',
      'Feedback Loops: Turning observation into iteration.'
    ]
  },
  {
    icon: '⚙️',
    title: 'Engines (Growth)',
    items: [
      'Go-to-Market Strategy: Positioning products for maximum thrust.',
      'Branding & SEO: Designing identity that attracts and retains users.',
      'Launch Metrics: Measuring lift-off and adjusting altitude.'
    ]
  },
  {
    icon: '🧩',
    title: 'Telemetry (Data)',
    items: [
      'SQL & Mixpanel: Tracking what matters.',
      'Analytics: Turning data into decision fuel.',
      'Reporting Systems: Visualising velocity and impact.'
    ]
  },
  {
    icon: '👥',
    title: 'Crew (Soft Skills)',
    items: [
      'Leadership: Aligning teams around a single mission.',
      'Storytelling: Making the “why” clear at every stage.',
      'Teamwork: Building trust that accelerates execution.'
    ]
  }
]

export default function EngineRoom() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)')
    const handler = (e) => setIsMobile(e.matches)
    handler(mq)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return (
    <section id="engine-room" className="section">
      <div className="container">
        <div className="engine-room">
          {/* Left column: headline + paragraphs */}
          <div>
            <h2>✈️ Engine Room</h2>
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
              <summary className="system-summary">
                <span className="system-icon" aria-hidden>{sys.icon}</span>
                <span className="system-title">{sys.title}</span>
              </summary>
              <ul className="system-items">
                {sys.items.map((txt, i) => (
                  <li key={i}>{txt}</li>
                ))}
              </ul>
            </details>
          ))}
        </div>

        <div style={{ marginTop: 16 }}>
          <a href="#projects" className="button">View Flight Logs →</a>
        </div>
      </div>
    </section>
  )
}