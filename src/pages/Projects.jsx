import { useState } from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { ZENT_DOC_LINK } from '../components/ProjectTeasers.jsx'

function MissionCard({ title, year, summary, mission, outcome, link, docLink }) {
  const [tab, setTab] = useState('Briefing')
  const isExternalLink = link && link.startsWith('http')

  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <div>
          <div style={{ fontWeight: 700 }}>{title} <span style={{ color: 'var(--muted)', fontWeight: 400 }}>({year})</span></div>
        </div>
        {isExternalLink ? (
          <a href={link} target="_blank" rel="noreferrer" className="button">Open Log →</a>
        ) : (
          <NavLink to={link || '/projects'} className="button">Open Log →</NavLink>
        )}
      </div>
      {summary && (
        <p className="muted" style={{ marginTop: 8, marginBottom: 0 }}>{summary}</p>
      )}
      <div style={{ display: 'flex', gap: 8, marginTop: 12, flexWrap: 'wrap' }}>
        {['Briefing', 'Results', 'Documentation'].map(k => (
          <button key={k} onClick={() => setTab(k)} className={`button ${tab===k ? 'primary' : ''}`}>{k}</button>
        ))}
      </div>
      {tab === 'Briefing' ? (
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ marginTop: 12 }}>{mission}</motion.p>
      ) : tab === 'Results' ? (
        Array.isArray(outcome) ? (
          <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ marginTop: 12, marginBottom: 0, paddingLeft: 20, lineHeight: 1.7 }}>
            {outcome.map((point, idx) => (
              <li key={idx} style={{ marginTop: idx === 0 ? 0 : 4 }}>{point}</li>
            ))}
          </motion.ul>
        ) : (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ marginTop: 12 }}>{outcome}</motion.p>
        )
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ marginTop: 12 }}>
          {docLink ? (
            <a href={docLink} className="button" target="_blank" rel="noopener noreferrer">Open Documentation →</a>
          ) : (
            <span className="button" aria-disabled="true" style={{ opacity: 0.55, cursor: 'default', pointerEvents: 'none' }}>Documentation coming soon</span>
          )}
        </motion.div>
      )}
    </div>
  )
}

export default function Projects() {
  return (
    <section className="section">
      <div className="container">
        <h2>Selected Projects</h2>
        <p className="muted" style={{ marginTop: 6, maxWidth: 740 }}>
          I've carefully selected a few projects to showcase. I believe these projects will give context as much as they will raise questions. Contact me if you'd like some clarifications. I'm currently open to new opportunities.
        </p>
        <div className="grid cols-2" style={{ marginTop: 18 }}>
          <MissionCard
            title="Zent"
            year="2026"
            summary="Led the development and launch of Zent's web application, expanding its sales management experience to the web and helping merchants organise inventory, manage sales, and accept payments."
            mission="Zent is a sales management platform designed to help merchants organise inventory, sell products, and manage payments. My role involved overseeing the development of its web application, managing the product roadmap, prioritising features, and coordinating designers, developers, and stakeholders."
            outcome={[
              "Led the delivery and launch of Zent's web application.",
              "Coordinated cross-functional product development and delivery.",
              "Supported product testing, iteration, and usability improvements.",
              "Delivered a stable web application with no outstanding production issues at the point of handover."
            ]}
            link="/projects"
            docLink={ZENT_DOC_LINK}
          />
          <MissionCard
            title="LockedIn"
            year="2025"
            mission="Real-time partner focus sessions merging productivity, community, and friendly competition."
            outcome={[
              "Shipped a cross-platform MVP for real-time partner focus sessions and gamified accountability.",
              "Reached 100+ organic downloads on Google Play within days of launch.",
              "Coordinated design and engineering across core focus timer, partner matching, and community features.",
              "Iterated on onboarding and session flows based on early user feedback."
            ]}
            link="https://play.google.com/store/apps/details?id=com.lockedinpartner.lockedin&hl=en"
            docLink="https://hurricane-woolen-96d.notion.site/LockedIn-App-29422c4ad911808cbb90d19017244575?source=copy_link"
          />
          <MissionCard
            title="64SQRS"
            year="2025"
            mission="Simplify tournament setup and payment for 150k+ chess players across Africa."
            outcome={[
              "Delivered the tournament automation and payment MVP from concept to launch in 6 weeks.",
              "Achieved a 93% bug-free first launch through structured QA and pre-release testing.",
              "Streamlined tournament setup, registration, and payment workflows for chess organisers and players across Africa.",
              "Aligned engineering and design sprints around clear PRDs and release milestones."
            ]}
            link="https://64sqrs.live"
            docLink="https://hurricane-woolen-96d.notion.site/Sport64sqs-13c22c4ad911806c9ef6f3efbf492e4c?source=copy_link"
          />
          <MissionCard
            title="Archived"
            year="2024"
            mission="Streamline research with AI and contextual commenting."
            outcome={[
              "Launched a closed beta of the AI research extension with strong early user retention.",
              "Designed and shipped contextual commenting and AI-assisted research workflows.",
              "Established a continuous beta feedback loop to prioritise usability improvements and feature iterations.",
              "Collaborated with engineers to refine extension performance and workflow reliability."
            ]}
            link="https://archived.rs"
            docLink="https://hurricane-woolen-96d.notion.site/Archived-23b22c4ad9118011a6befe2257d07838?source=copy_link"
          />
          <MissionCard
            title="Kukeat"
            year="2023"
            mission="Build the first product from concept to prototype; hackathon winner ₦250k."
            outcome={[
              "Led product definition and execution from initial concept to functional AI food planner prototype.",
              "Won ₦250,000 in hackathon prize funding following product demonstration and pitch.",
              "Attracted early angel investor interest based on product validation and market positioning.",
              "Coordinated user research, scope definition, and prototype delivery under tight timelines."
            ]}
            link="https://kukeat.com"
            docLink="https://hurricane-woolen-96d.notion.site/Ideation-to-MVP-13c22c4ad91181c68e81f5ed82c3df2f?source=copy_link"
          />
        </div>
        {/* MissionTimeline removed per request */}
      </div>
    </section>
  )
}