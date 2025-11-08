import { useState } from 'react'
import { motion } from 'framer-motion'

function MissionCard({ title, year, mission, outcome, link, docLink }) {
  const [tab, setTab] = useState('Briefing')
  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <div>
          <div style={{ fontWeight: 700 }}>{title} <span style={{ color: 'var(--muted)', fontWeight: 400 }}>({year})</span></div>
          <div className="badge">Flight Report</div>
        </div>
        <a href={link} target="_blank" rel="noreferrer" className="button">Open Log →</a>
      </div>
      <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
        {['Briefing', 'Results', 'Documentation'].map(k => (
          <button key={k} onClick={() => setTab(k)} className={`button ${tab===k ? 'primary' : ''}`}>{k}</button>
        ))}
      </div>
      {tab === 'Briefing' ? (
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ marginTop: 12 }}>{mission}</motion.p>
      ) : tab === 'Results' ? (
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ marginTop: 12 }}>{outcome}</motion.p>
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ marginTop: 12 }}>
          <a href={docLink} className="button" target="_blank" rel="noopener noreferrer">Open Documentation →</a>
        </motion.div>
      )}
    </div>
  )
}

export default function Projects() {
  return (
    <section className="section">
      <div className="container">
        <h2>Recent Projects</h2>
        <div className="grid cols-2" style={{ marginTop: 18 }}>
          <MissionCard
            title="64SQRS"
            year="2025"
            mission="Simplify tournament setup and payment for 150k+ chess players across Africa."
            outcome="MVP in 6 weeks, 93% bug-free first launch."
            link="https://64sqrs.live"
            docLink="https://hurricane-woolen-96d.notion.site/Sport64sqs-13c22c4ad911806c9ef6f3efbf492e4c?source=copy_link"
          />
          <MissionCard
            title="Archived"
            year="2024"
            mission="Streamline research with AI and contextual commenting."
            outcome="Closed beta with strong retention, shaped by user feedback."
            link="https://archived.rs"
            docLink="https://hurricane-woolen-96d.notion.site/Archived-23b22c4ad9118011a6befe2257d07838?source=copy_link"
          />
          <MissionCard
            title="Kukeat"
            year="2023"
            mission="Build the first product from concept to prototype; hackathon winner ₦250k."
            outcome="Attracted angel investor interest."
            link="https://kukeat.com"
            docLink="https://hurricane-woolen-96d.notion.site/Ideation-to-MVP-13c22c4ad91181c68e81f5ed82c3df2f?source=copy_link"
          />
          <MissionCard
            title="LockedIn"
            year="2025"
            mission="Real-time partner focus sessions merging productivity, community, and friendly competition."
            outcome="Cross-platform MVP launched; 100+ organic downloads within days."
            link="https://play.google.com/store/apps/details?id=com.lockedinpartner.lockedin&hl=en"
            docLink="https://hurricane-woolen-96d.notion.site/LockedIn-App-29422c4ad911808cbb90d19017244575?source=copy_link"
          />
        </div>
        {/* MissionTimeline removed per request */}
      </div>
    </section>
  )
}