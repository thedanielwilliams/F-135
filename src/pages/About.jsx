import { motion } from 'framer-motion'

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 }
}

export default function About() {
  const resumeHref = '/Daniel_Williams_Resume.pdf' // optional, update when available
  const contactHref = '/contact'
  const mailto = 'mailto:onikoladanielwilliams@gmail.com'
  return (
    <section className="section">
      <div className="container">
        {/* 1) Landing Section */}
        <motion.div {...fadeUp}>
          <h2>About Me</h2>
          <div className="about-landing">
            <div className="about-landing-text">
      
              <p>
                Here is how I think about it, product management isn’t about features or checklists, it’s about alignment. I help teams stay focused on the problem, design the right process, and deliver results that matter. Over the years, I’ve learned that precision and empathy can coexist, that speed without clarity is noise, and clarity without speed is inertia.
              </p>
              <div className="cta-row">
                
              </div>
            </div>
            <div className="about-landing-media">
              <div className="media-16x9">
                <img src="/IMG_9210.jpg" alt="Portrait" loading="lazy" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2) How I Think */}
        <motion.div {...fadeUp} style={{ marginTop: 28 }}>
          <h3 className="section-title">How I Think</h3>
          <p className="muted">I believe good products are built on systems, not guesswork. My process starts from first principles — understanding the root cause of a problem before designing a solution. I map relationships, feedback loops, and trade-offs to make sure what we build isn’t just functional, but sustainable.</p>
          <ul className="bullets" style={{ marginTop: 8 }}>
            <li>Map before building.</li>
            <li>Test assumptions early.</li>
            <li>Design for feedback.</li>
          </ul>
        </motion.div>

        {/* 3) How I Communicate */}
        <motion.div {...fadeUp} style={{ marginTop: 28 }}>
          <h3 className="section-title">How I Communicate</h3>
          <p className="muted">I keep communication clear, structured, and transparent. Every project I run is powered by open loops — quick feedback, documented context, and shared visibility.</p>
          <div className="icons-grid">
            <div className="icon-card"><span>🧩</span> Figma — shared design sessions</div>
            <div className="icon-card"><span>🗂</span> Notion — docs and roadmaps</div>
            <div className="icon-card"><span>💬</span> Slack/Discord — async check‑ins</div>
            <div className="icon-card"><span>🎥</span> Meet/Jitsi — live syncs</div>
            <div className="icon-card"><span>🛠</span> Trello/Asana — sprint tracking</div>
          </div>
          <div className="muted" style={{ marginTop: 8 }}>Average sprint velocity: 2–3 weeks</div>
        </motion.div>

        {/* 4) How I Work */}
        <motion.div {...fadeUp} style={{ marginTop: 32 }}>
          <h3 className="section-title">How I Work</h3>
          <p className="muted">From discovery to delivery, I optimize for clarity, speed, and measurable outcomes.</p>
          <div className="two-col" style={{ marginTop: 12 }}>
            <div>
              <h4 className="section-title">Operating Principles</h4>
              <ul className="bullets">
                <li>Start with the problem; write the one‑sentence brief.</li>
                <li>Define metrics and success criteria up front.</li>
                <li>Ship in small increments; test with real users.</li>
                <li>Keep docs light: PRD + decision log.</li>
                <li>Bias to action; course‑correct with data.</li>
              </ul>
            </div>
            <div>
              <h4 className="section-title">Process</h4>
              <ul className="bullets">
                <li>Discovery → interviews, data review, constraints.</li>
                <li>Define → PRD, scope, milestones.</li>
                <li>Design → flows, edge cases, handoffs.</li>
                <li>Deliver → sprints, QA, release plan.</li>
                <li>Measure → dashboards, learnings, next bets.</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 5) Open to Opportunities */}
        <motion.div {...fadeUp} style={{ marginTop: 32 }}>
          <h3 className="section-title">Open to New Opportunities</h3>
          <p className="muted">I'm currently open to new roles and collaborations. If my approach resonates with your team, I'd love to connect.</p>
          <div className="cta-row">
            <a className="button primary" href={mailto}>Send me a mail</a>
            
          </div>
        </motion.div>
      </div>

      {/* Local styles scoped to About */}
      <style>{`
        .about-landing { display: grid; gap: 24px; align-items: start; }
        @media (min-width: 768px) { .about-landing { grid-template-columns: 1.1fr 0.9fr; } }
        .about-landing-text .tagline { font-size: clamp(18px, 2.5vw, 22px); font-weight: 600; margin-bottom: 12px; }
        .cta-row { margin-top: 12px; }

        .two-col { display: grid; gap: 16px; }
        @media (min-width: 768px) { .two-col { grid-template-columns: 1fr 1fr; } }
        .bullets { line-height: 1.9; }

        .diagram { display: grid; gap: 10px; }
        .diagram-row { display: flex; flex-wrap: wrap; gap: 8px; }

        /* Media helper: allows setting the target size/ratio of the image */
        .media-16x9 { position: relative; width: 100%; aspect-ratio: var(--about-img-ratio, 16 / 9); overflow: hidden; border-radius: 10px; border: 1px solid rgba(255,255,255,0.12); background: rgba(255,255,255,0.03); }
        .media-16x9 img { width: 100%; height: 100%; object-fit: cover; object-position: center 20%; display: block; }
        @media (min-width: 768px) {
          .about-landing-media .media-16x9 { --about-img-ratio: 3 / 4; max-height: 460px; }
        }

        .icons-grid { display: grid; gap: 10px; grid-template-columns: repeat(2, minmax(0,1fr)); }
        @media (min-width: 768px) { .icons-grid { grid-template-columns: repeat(3, minmax(0,1fr)); } }
        .icon-card { display: flex; align-items: center; gap: 10px; padding: 10px 12px; border: 1px solid rgba(255,255,255,0.12); background: rgba(255,255,255,0.04); border-radius: 10px; }

        .article-cards { display: grid; gap: 12px; }
        @media (min-width: 640px) { .article-cards { grid-template-columns: repeat(3, minmax(0,1fr)); } }

        .section-title { font-size: clamp(18px, 2.2vw, 22px); font-weight: 600; padding-top: 8px; }
      `}</style>
    </section>
  )
}