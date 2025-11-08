import { useState } from 'react'

const patches = [
  { title: 'BloodChain — The Podium Hackathon', award: 'Winner — ₦500,000 prize', desc: 'Defined product vision for Nigeria’s first AI blood donation + logistics platform; led 5-person team and directed pitch strategy.' },
  { title: 'XBag — GNEC Hackathon', award: 'Top 3 (out of 5000)', desc: 'Conceptualised and shipped eco‑fashion MVP from upcycled plastic; personas, feature planning, and final pitch.' },
  { title: 'Harmony DAO — Team BuChain', award: 'Top 5', desc: 'Blockchain‑based identity system; owned roadmap, feature scope, and co‑led Figma prototyping with scalable pitch.' },
]

export default function HackathonPatches() {
  const [open, setOpen] = useState(null)
  const toggle = (i) => setOpen(open === i ? null : i)
  return (
    <section id="hackathons" className="section">
      <div className="container">
        <h2>Hackathons</h2>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
          {patches.map((p, i) => (
            <div key={p.title} className={`patch-card ${open === i ? 'is-open' : ''}`} onClick={() => toggle(i)}>
              <div className="patch-head">
                <div className="patch-title">{p.title}</div>
                <div className="patch-award">{p.award}</div>
              </div>
              <div className="patch-details">
                <div className="patch-desc">{p.desc}</div>
                <a href="/hackathons" className="button">View Details →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}