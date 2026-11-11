import { useState } from 'react'
import { motion } from 'framer-motion'

// Configurable Notion documentation URLs for each project.
// Leave empty ('') to show "Case study coming soon" or "Story coming soon".
export const NOTION_LINKS = {
  zent: '',
  sixtyFourSqrs: 'https://hurricane-woolen-96d.notion.site/Sport64sqs-13c22c4ad911806c9ef6f3efbf492e4c?source=copy_link',
  lockedIn: 'https://hurricane-woolen-96d.notion.site/LockedIn-App-29422c4ad911808cbb90d19017244575?source=copy_link',
  archived: 'https://hurricane-woolen-96d.notion.site/Archived-23b22c4ad9118011a6befe2257d07838?source=copy_link',
  kukeat: 'https://hurricane-woolen-96d.notion.site/Ideation-to-MVP-13c22c4ad91181c68e81f5ed82c3df2f?source=copy_link',
}

export const ZENT_DOC_LINK = NOTION_LINKS.zent
export const ZENT_LIVE_LINK = ''

export const featuredProjects = [
  {
    title: 'Zent',
    year: 2026,
    role: 'Product Manager',
    status: 'Launched',
    featured: true,
    discontinued: false,
    docType: 'case-study',
    brief: "Led the development and launch of Zent's web application, bringing inventory, sales, and multi-currency payment workflows to the browser.",
    mission: "Zent is a sales management platform designed to help merchants organise inventory, sell products, and manage payments. My role involved overseeing the development of its web application, managing the product roadmap, prioritising features, and coordinating designers, developers, and stakeholders.",
    outcome: [
      "Led the delivery and launch of Zent's web application.",
      "Coordinated cross-functional product development and delivery.",
      "Supported product testing, iteration, and usability improvements.",
      "Delivered a stable web application with no outstanding production issues at the point of handover."
    ],
    image: '/Zent.jpg',
    link: ZENT_LIVE_LINK,
    docLink: NOTION_LINKS.zent,
  },
  {
    title: '64SQRS',
    year: 2025,
    role: 'Product Manager',
    status: 'MVP Delivered',
    featured: true,
    discontinued: false,
    docType: 'case-study',
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
    docLink: NOTION_LINKS.sixtyFourSqrs,
  },
]

export const independentProjects = [
  {
    title: 'LockedIn',
    year: 2025,
    featured: false,
    discontinued: false,
    docType: 'case-study',
    brief: 'An experiment in real-time partner focus sessions, combining accountability, community, and friendly competition.',
    mission: 'Real-time partner focus sessions merging productivity, community, and friendly competition so people can stay accountable and finish meaningful work together.',
    outcome: [
      'Shipped a cross-platform mobile MVP for real-time partner focus sessions.',
      'Reached 100+ organic downloads on Google Play within days of launch.',
      'Coordinated design and engineering across focus timers, partner matching, and community features.',
      'Iterated on onboarding and session flows based on early user feedback.'
    ],
    image: '/LockedIn.jpg',
    link: 'https://play.google.com/store/apps/details?id=com.lockedinpartner.lockedin&hl=en',
    docLink: NOTION_LINKS.lockedIn,
  },
  {
    title: 'Archived',
    year: 2024,
    status: 'Discontinued — Funding Constraints',
    featured: false,
    discontinued: true,
    docType: 'story',
    brief: 'An AI-powered research extension designed to simplify how people save, organise, and interact with online information.',
    additionalContext: 'Development ended due to insufficient funding.',
    mission: 'We created Archived to solve a common problem for students and researchers: losing context across dozens of saved links and tabs. We built a browser extension that let users save web snippets, attach contextual comments directly on pages, and organise research with AI.',
    outcome: [
      'Built and launched a closed beta of the browser extension with active user feedback.',
      'Validated core workflows for contextual commenting and AI-assisted research organisation.',
      'Development ended due to insufficient funding to sustain ongoing infrastructure and engineering.',
      'Key lesson: pair early beta validation with a clearer path to sustainable runway before expanding scope.'
    ],
    image: '/Archived.jpeg',
    link: '',
    docLink: NOTION_LINKS.archived,
  },
  {
    title: 'Kukeat',
    year: 2023,
    status: 'Discontinued — Funding Constraints',
    featured: false,
    discontinued: true,
    docType: 'story',
    brief: 'Built a food-ordering product from concept to prototype and won ₦250,000 in hackathon prize funding. Despite the win, the funding was insufficient to sustain development.',
    mission: 'Kukeat was created to make finding everyday meals and arranging local delivery simpler. I led the team from initial concept and user research to a functional prototype that won ₦250,000 in hackathon prize funding, though the prize alone was insufficient to fund full-scale operations and continued engineering.',
    outcome: [
      'Led product discovery, scoping, and prototype delivery from initial concept.',
      'Won ₦250,000 in hackathon prize funding following live product demonstration and pitch.',
      'Attracted early angel investor interest based on problem validation and prototype execution.',
      'Development paused due to funding constraints; learned how to scope early-stage prototypes around realistic capital requirements.'
    ],
    image: '/Kukeat.jpeg',
    link: '',
    docLink: NOTION_LINKS.kukeat,
  },
]

export const missions = [...featuredProjects, ...independentProjects]

function ProjectCard({ project }) {
  const [tab, setTab] = useState('Briefing')
  const isExternalLink = Boolean(project.link && project.link.startsWith('http'))
  const isStory = project.docType === 'story' || project.discontinued
  const docButtonLabel = isStory ? 'Read story' : 'Read case study'
  const docPlaceholderLabel = isStory ? 'Story coming soon' : 'Case study coming soon'

  return (
    <motion.article
      className={`card project-card ${project.featured ? 'project-card-featured' : 'project-card-experiment'}`}
      whileHover={{ y: -4 }}
    >
      <div className="media-16x9">
        <img src={project.image} alt={`${project.title} project preview`} loading="lazy" />
      </div>

      <div className="project-card-header">
        <div className="project-title-group">
          <h3 className="card-title">{project.title}</h3>
          <span className="badge">{project.year}</span>
        </div>
        {project.status && (
          <span className={`badge ${project.discontinued ? 'badge-neutral' : 'badge-status'}`}>
            {project.status}
          </span>
        )}
      </div>

      {project.role && (
        <div className="project-role">Role: {project.role}</div>
      )}

      <p className="muted project-brief">{project.brief}</p>

      {project.additionalContext && (
        <p className="project-context-note">{project.additionalContext}</p>
      )}

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
                {docButtonLabel} →
              </a>
            ) : (
              <span className="muted">{docPlaceholderLabel}</span>
            )}
          </motion.div>
        )}
      </div>

      <div className="card-cta project-cta">
        {!project.discontinued && isExternalLink && (
          <a href={project.link} className="button" target="_blank" rel="noopener noreferrer">
            View project
          </a>
        )}
        {!project.discontinued && !isExternalLink && (
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
            {docButtonLabel}
          </a>
        ) : (
          <span
            className="button button-disabled"
            aria-disabled="true"
          >
            {docPlaceholderLabel}
          </span>
        )}
      </div>
    </motion.article>
  )
}

export default function ProjectTeasers() {
  return (
    <>
      <section id="projects" className="section">
        <div className="container">
          <h2>Featured Work</h2>
          <p className="section-subtext">
            Products I've helped take from planning to release. The decisions, trade-offs, and teamwork behind what shipped.
          </p>

          <div className="projects-featured-grid">
            {featuredProjects.map((m) => (
              <ProjectCard key={m.title} project={m} />
            ))}
          </div>
        </div>
      </section>

      <section id="experiments" className="section experiments-section">
        <div className="container">
          <h2>Independent Builds &amp; Experiments</h2>
          <p className="section-subtext">
            Some products make it to launch. Others run out of runway. Every project has a story worth telling.
          </p>

          <div className="projects-grid">
            {independentProjects.map((m) => (
              <ProjectCard key={m.title} project={m} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
