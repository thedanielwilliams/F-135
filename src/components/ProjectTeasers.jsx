import { motion } from 'framer-motion'

const missions = [
  { title: '64SQRS', year: 2025, brief: 'MVP in 6 weeks, 93% bug-free launch.' },
  { title: 'Archived', year: 2024, brief: 'AI research extension; beta feedback loop.' },
  { title: 'Kukeat', year: 2023, brief: '₦250k hackathon win, angel interest.' },
]

export default function ProjectTeasers() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Flight Logs</h2>
        <div className="projects-grid">
          {missions.map((m) => (
            <motion.div key={m.title} className="card" whileHover={{ y: -4 }}>
              <div className="media-16x9"></div>
              <div className="card-title">{m.title} <span className="badge">{m.year}</span></div>
              <p className="muted">{m.brief}</p>
              <div className="card-cta">
                <a href="/projects" className="button">Open Log →</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}