import { useState } from 'react'
import { motion } from 'framer-motion'

// Supply Zent's Notion case study URL here when ready:
export const ZENT_DOC_LINK = ''
// Optional: Supply Zent's live web URL here if you want "View project" to open an external site:
export const ZENT_LIVE_LINK = ''

export const missions = [
  {
    title: 'Zent',
    year: 2026,
    role: 'Product Manager',
    featured: true,
    brief: "Led the development and launch of Zent's web platform, helping merchants manage inventory, sales, and multi-currency payments.",
    mission: "Zent is a sales management platform designed to help merchants organise inventory, sell products, and manage payments. My role involved overseeing the development of its web application, managing the product roadmap, prioritising features, and coordinating designers, developers, and stakeholders.",
    outcome: [
      "Led the delivery and launch of Zent's web application.",
      "Coordinated cross-functional product development and delivery.",
      "Supported product testing, iteration, and usability improvements.",
      "Delivered a stable web application with no outstanding production issues at the point of handover."
    ],
    image: '/Zent.jpg',
    link: ZENT_LIVE_LINK,
    docLink: ZENT_DOC_LINK,
  },
  {
    title: '64SQRS',
    year: 2025,
    role: 'Product Manager',
    featured: true,
    brief: 'Led a five-person team to deliver a chess tournament MVP in six weeks, simplifying tournament creation and payment workflows.',
    mission: 'Organising chess tournaments across Africa often meant manual registration, fragmented spreadsheets, and slow payment tracking. I led a five-person product team to scope, design, and ship an MVP that simplifies tournament setup and entry payments.',
    outcome: [
      'Led a five-person product team to deliver the 64SQRS MVP for testing in six weeks.',
      'Simplified tournament creation, player registration, and payment workflows.',
      'Translated organiser and player pain points into clear requirements and sprint priorities.',
      'Coordinated design and engineering from wireframes through release.'
    ],
    image: '/64sqrs.jpeg',
    link: 'https://64sqrs.live',
    docLink: 'https://hurricane-woolen-96d.notion.site/Sport64sqs-13c22c4ad911806c9ef6f3efbf492e4c?source=copy_link'
  },
  {
    title: 'LockedIn',
    year: 2025,
    featured: false,
    brief: 'Real-time partner focus sessions that combine accountability, community, and friendly competition.',
    mission: 'Real-time partner focus sessions merging productivity, community, and friendly competition so people can stay accountable and finish meaningful work together.',
    outcome: [
      'Shipped a cross-platform mobile MVP for real-time partner focus sessions.',
      'Reached 100+ organic downloads on Google Play within days of launch.',
      'Coordinated design and engineering across focus timers, partner matching, and community features.',
      'Iterated on onboarding and session flows based on early user feedback.'
    ],
    image: '/LockedIn.jpg',
    link: 'https://play.google.com/store/apps/details?id=com.lockedinpartner.lockedin&hl=en',
    docLink: 'https://hurricane-woolen-96d.notion.site/LockedIn-App-29422c4ad911808cbb90d19017244575?source=copy_link'
  },
  {
    title: 'Archived',
    year: 2024,
    featured: false,
    brief: 'An AI-powered research extension for saving web content, adding contextual comments, and organising research.',
    mission: 'Streamline online research by letting users save web content, attach contextual comments directly on pages, and organise findings with AI assistance.',
    outcome: [
      'Launched a closed beta of the research extension with strong early user retention.',
      'Designed workflows for saving web content, contextual commenting, and AI research organisation.',
      'Established a continuous beta feedback loop to prioritise usability improvements.',
      'Collaborated with engineers to refine extension reliability and day-to-day workflow.'
    ],
    image: '/Archived.jpeg',
    link: 'https://archived.rs',
    docLink: 'https://hurricane-woolen-96d.notion.site/Archived-23b22c4ad9118011a6befe2257d07838?source=copy_link'
  },
  {
    title: 'Kukeat',
    year: 2023,
    featured: false,
    brief: 'A food-ordering experience built around finding everyday food items and arranging convenient delivery.',
    mission: 'Built from concept to working prototype to help users find everyday food items and arrange convenient local delivery.',
    outcome: [
      'Led product discovery, scoping, and prototype delivery from initial concept.',
      'Won ₦250,000 in hackathon funding following product demonstration and pitch.',
      'Attracted early angel investor interest based on problem validation and prototype execution.',
      'Coordinated user research, feature definition, and prototype delivery under tight timelines.'
    ],
    image: '/Kukeat.jpeg',
    link: 'https://kukeat.com',
    docLink: 'https://hurricane-woolen-96d.notion.site/Ideation-to-MVP-13c22c4ad91181c68e81f5ed82c3df2f?source=copy_link'
  },
]

function ProjectCard({ project }) {
  const [tab, setTab] = useState('Briefing')
  const isExternalLink = Boolean(project.link && project.link.startsWith('http'))

  return (
    <motion.article
      className={`card project-card ${project.featured ? 'project-card-featured' : ''}`}
      whileHover={{ y: -4 }}
    >
      <div className="media-16x9">
        <img src={project.image} alt={`${project.title} project preview`} loading="lazy" />
      </div>

      <div className="project-card-header">
        <h3 className="card-title">{project.title}</h3>
        <span className="badge">{project.year}</span>
      </div>

      <p className="muted project-brief">{project.brief}</p>

      <div className="project-tabs" role="tablist" aria-label={`${project.title} details`}>
        {['Briefing', 'Results', 'Documentation'].map((k) => (
          <button
            key={k}
            type="button"
            role="tab"
            aria-selected={tab === k}
            onClick={() => setTab(k)}
            className={`button tab-button ${tab === k ? 'primary' : ''}`}
          >
            {k}
          </button>
        ))}
      </div>

      <div className="project-tab-panel" role="tabpanel">
        {tab === 'Briefing' ? (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="tab-text">
            {project.mission}
          </motion.p>
        ) : tab === 'Results' ? (
          <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="results-list">
            {project.outcome.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </motion.ul>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="doc-panel">
            {project.docLink ? (
              <a href={project.docLink} className="button" target="_blank" rel="noopener noreferrer">
                Read case study →
              </a>
            ) : (
              <span className="muted">Case study coming soon</span>
            )}
          </motion.div>
        )}
      </div>

      <div className="card-cta project-cta">
        {isExternalLink ? (
          <a href={project.link} className="button" target="_blank" rel="noopener noreferrer">
            View project
          </a>
        ) : (
          <button
            type="button"
            className="button"
            onClick={() => setTab(tab === 'Results' ? 'Briefing' : 'Results')}
          >
            View project
          </button>
        )}
        {project.docLink ? (
          <a href={project.docLink} className="button" target="_blank" rel="noopener noreferrer">
            Read case study
          </a>
        ) : (
          <span
            className="button button-disabled"
            aria-disabled="true"
          >
            Case study coming soon
          </span>
        )}
      </div>
    </motion.article>
  )
}

export default function ProjectTeasers() {
  const featuredProjects = missions.filter((m) => m.featured)
  const otherProjects = missions.filter((m) => !m.featured)

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Selected Work</h2>
        <p className="section-subtext">
          A collection of products I've helped shape, build and launch. Different problems, different teams, and different decisions along the way.
        </p>

        {/* Featured row: Zent (2026) and 64SQRS (2025) */}
        <div className="projects-featured-grid">
          {featuredProjects.map((m) => (
            <ProjectCard key={m.title} project={m} />
          ))}
        </div>

        {/* Remaining projects: LockedIn (2025), Archived (2024), Kukeat (2023) */}
        <div className="projects-grid" style={{ marginTop: 16 }}>
          {otherProjects.map((m) => (
            <ProjectCard key={m.title} project={m} />
          ))}
        </div>
      </div>
    </section>
  )
}
