import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

const missions = [
  { title: 'LockedIn', year: 2025, brief: 'Real-time partner focus sessions; gamified accountability.', image: '/LockedIn.jpg', link: '/projects', docLink: 'https://hurricane-woolen-96d.notion.site/LockedIn-App-29422c4ad911808cbb90d19017244575?source=copy_link' },
  { title: '64SQRS', year: 2025, brief: 'MVP in 6 weeks, 93% bug-free launch.', image: '/64sqrs.jpeg', link: '/projects', docLink: 'https://hurricane-woolen-96d.notion.site/Sport64sqs-13c22c4ad911806c9ef6f3efbf492e4c?source=copy_link' },
  { title: 'Archived', year: 2024, brief: 'AI research extension; beta feedback loop.', image: '/Archived.jpeg', link: '/projects', docLink: 'https://hurricane-woolen-96d.notion.site/Archived-23b22c4ad9118011a6befe2257d07838?source=copy_link' },
  { title: 'Kukeat', year: 2023, brief: '₦250k hackathon win, angel interest.', image: '/Kukeat.jpeg', link: '/projects', docLink: 'https://hurricane-woolen-96d.notion.site/Ideation-to-MVP-13c22c4ad91181c68e81f5ed82c3df2f?source=copy_link' },
]

export default function ProjectTeasers() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Project</h2>
        <p className="section-subtext">Here are a few projects I’ve worked on — plus experiments I’ve shipped. I enjoy building with strong teams and learning in public.</p>
        <div className="projects-grid">
          {missions.map((m) => (
            <motion.div key={m.title} className="card" whileHover={{ y: -4 }}>
              <div className="media-16x9">
                <img src={m.image} alt={`${m.title} cover`} loading="lazy" />
              </div>
              <div className="card-title">{m.title} <span className="badge">{m.year}</span></div>
              <p className="muted">{m.brief}</p>
              <div className="card-cta">
                <NavLink to={m.link || '/projects'} className="button">Open Log →</NavLink>
                {m.docLink && (
                  <a href={m.docLink} className="button" target="_blank" rel="noopener noreferrer">Documentation</a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .projects-grid { display: grid; gap: 12px; grid-template-columns: repeat(3, minmax(0,1fr)); }
        @media (max-width: 900px) { .projects-grid { grid-template-columns: repeat(2, minmax(0,1fr)); } }
        @media (max-width: 640px) { .projects-grid { grid-template-columns: 1fr; } }

        .section-subtext { color: var(--muted); margin-top: 4px; margin-bottom: 12px; }
        .media-16x9 { position: relative; width: 100%; aspect-ratio: 16 / 9; overflow: hidden; border-radius: 10px; border: 1px solid rgba(255,255,255,0.12); background: rgba(255,255,255,0.03); }
        .media-16x9 img { width: 100%; height: 100%; object-fit: cover; display: block; }
      `}</style>
    </section>
  )
}