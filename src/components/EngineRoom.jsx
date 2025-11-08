import { useState } from 'react'
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
      <div className="gauge-label">{label}</div>
      <div className="gauge-value">{value}%</div>
    </div>
  )
}

const panels = [
  { group: 'Navigation Systems (Product)', skills: ['PRDs', 'Roadmapping', 'Agile', 'Sprint Planning'] },
  { group: 'Sensors (Research & Design)', skills: ['User Interviews', 'Wireframing', 'Figma', 'Testing'] },
  { group: 'Engines (Growth)', skills: ['Go-to-Market', 'Branding', 'SEO'] },
  { group: 'Telemetry (Data)', skills: ['SQL', 'Mixpanel', 'Analytics'] },
  { group: 'Crew (Soft Skills)', skills: ['Leadership', 'Storytelling', 'Teamwork'] },
]

const proofs = {
  PRDs: 'PRDs that drive clarity and unblock engineering.',
  Roadmapping: 'Roadmaps aligned to outcomes and constraints.',
  Agile: 'Agile rituals that keep velocity high.',
  'Sprint Planning': 'Sprint plans balancing scope and learning.',
  'User Interviews': 'Structured interviews with actionable insights.',
  Wireframing: 'Rapid wireframes to validate flow.',
  Figma: 'High-fidelity prototypes for stakeholder buy-in.',
  Testing: 'Usability tests to reduce rework.',
  'Go-to-Market': 'Lean GTM experiments to find traction.',
  Branding: 'Cohesive brand systems and voice.',
  SEO: 'Search-first content for organic lift.',
  SQL: 'Data cuts that answer the real question.',
  Mixpanel: 'Event models for product analytics.',
  Analytics: 'Dashboards that inform decisions.',
  Leadership: 'Team alignment through clear, calm communication.',
  Storytelling: 'Narratives that motivate stakeholders.',
  Teamwork: 'Collaborative execution under time pressure.',
}

export default function EngineRoom() {
  const [openSkill, setOpenSkill] = useState(null)

  return (
    <section id="engine-room" className="section">
      <div className="container">
        <div className="grid" style={{ gridTemplateColumns: '1.4fr 1fr', gap: 24 }}>
          <div>
            <h2>Engine Room</h2>
            <p>
              I design and operate product engines that ship quickly without sacrificing quality. From discovery to delivery, I keep teams aligned on the problem, the narrative, and the plan.
            </p>
            <p>
              My approach blends research, clear PRDs, tight execution rhythms, and telemetry that informs iteration. The goal is repeatable lift — precision and speed together.
            </p>
          </div>
          <div className="gauges">
            <Gauge label="Speed" value={93} />
            <Gauge label="Precision" value={93} />
            <Gauge label="Lift" value={100} />
          </div>
        </div>

        <div className="systems">
          {panels.map((p) => (
            <div key={p.group} className="panel">
              <div className="panel-title">{p.group}</div>
              <div className="panel-skills">
                {p.skills.map((s) => (
                  <button key={s} className="chip" onClick={() => setOpenSkill(s)}>{s}</button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {openSkill && (
        <div className="micro-modal" onClick={() => setOpenSkill(null)}>
          <div className="micro-modal-content" role="dialog" aria-modal="true">
            <div className="micro-modal-title">{openSkill}</div>
            <div className="micro-modal-body">{proofs[openSkill]}</div>
            <button className="button" onClick={() => setOpenSkill(null)}>Close</button>
          </div>
        </div>
      )}
    </section>
  )
}