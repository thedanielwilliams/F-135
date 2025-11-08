import { useState } from 'react'
import { motion } from 'framer-motion'
import MissionTimeline from '../components/MissionTimeline.jsx'

function MissionCard({ title, year, mission, outcome, link }) {
  const [tab, setTab] = useState('Briefing')
  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <div>
          <div style={{ fontWeight: 700 }}>{title} <span style={{ color: 'var(--muted)', fontWeight: 400 }}>({year})</span></div>
          <div className="badge">Flight Report</div>
        </div>
        <a href={link} target="_blank" rel="noreferrer" className="button">Open</a>
      </div>
      <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
        {['Briefing', 'Results'].map(k => (
          <button key={k} onClick={() => setTab(k)} className={`button ${tab===k ? 'primary' : ''}`}>{k}</button>
        ))}
      </div>
      {tab === 'Briefing' ? (
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ marginTop: 12 }}>{mission}</motion.p>
      ) : (
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ marginTop: 12 }}>{outcome}</motion.p>
      )}
    </div>
  )
}

export default function Projects() {
  return (
    <section className="section">
      <div className="container">
        <h2>Flight Logs</h2>
        <div className="grid cols-2" style={{ marginTop: 18 }}>
          <MissionCard
            title="64SQRS"
            year="2025"
            mission="Simplify tournament setup and payment for 150k+ chess players across Africa."
            outcome="MVP in 6 weeks, 93% bug-free first launch."
            link="https://64sqrs.live"
          />
          <MissionCard
            title="Archived"
            year="2024"
            mission="Streamline research with AI and contextual commenting."
            outcome="Closed beta with strong retention, shaped by user feedback."
            link="https://archived.rs"
          />
          <MissionCard
            title="Kukeat"
            year="2023"
            mission="Build the first product from concept to prototype; hackathon winner ₦250k."
            outcome="Attracted angel investor interest."
            link="https://kukeat.com"
          />
        </div>
        <MissionTimeline entries={[
          { year: 2025, title: '64SQRS', impact: 'High', note: 'Tournament automation MVP in 6 weeks.' },
          { year: 2024, title: 'Archived', impact: 'Medium', note: 'Closed beta with strong retention.' },
          { year: 2023, title: 'Kukeat', impact: 'Medium', note: 'AI food planner; hackathon winner ₦250k.' },
        ]} />
      </div>
    </section>
  )
}