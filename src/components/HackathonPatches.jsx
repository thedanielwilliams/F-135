import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const patches = [
  {
    title: 'BloodChain — The Podium Hackathon',
    award: 'Winner — ₦500,000 in hackathon funding',
    desc: 'Led a 15-person cross-functional team to develop an AI-powered blood donation and logistics MVP, securing ₦500,000 in hackathon funding.'
  },
  {
    title: 'XBAGS — GNEC Hackathon',
    award: 'Second Runner-up — GNEC Hackathon',
    desc: 'Led a three-person product team, defined product direction, and prepared the pitch for an upcycled plastic eco-fashion MVP, finishing second runner-up at the GNEC Hackathon.'
  },
  {
    title: 'Harmony DAO — Team BuChain',
    award: 'Top 5',
    desc: 'Blockchain-based identity system; owned roadmap, feature scope, and co-led Figma prototyping with scalable pitch.'
  },
  {
    title: 'HRecords — EVMxIdeathon',
    award: 'Social Good — Runner-up — $1,000',
    desc: 'Blockchain-backed patient records and inventory for African hospitals; research-led prototype; Social Good runner-up ($1,000).'
  },
]

export default function HackathonPatches() {
  const [open, setOpen] = useState(null)
  const toggle = (i) => setOpen(open === i ? null : i)
  return (
    <section id="hackathons" className="section">
      <div className="container">
        <h2>Some ideas don't come with much time.</h2>
        <p className="muted" style={{ marginTop: 4, marginBottom: 16, maxWidth: 680 }}>
          Hackathons have given me opportunities to work with new teams, test ideas quickly, and make decisions under tight deadlines.
        </p>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
          {patches.map((p, i) => (
            <div key={p.title} className={`patch-card ${open === i ? 'is-open' : ''}`} onClick={() => toggle(i)}>
              <div className="patch-head">
                <div className="patch-title">{p.title}</div>
                <div className="patch-award">{p.award}</div>
              </div>
              <div className="patch-details">
                <div className="patch-desc">{p.desc}</div>
                <NavLink to="/hackathons" className="button" onClick={(e) => e.stopPropagation()}>Read More →</NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
