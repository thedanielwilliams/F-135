import { useState } from 'react'

const patches = [
  { title: 'BloodChain (₦5M)', award: 'AI blood logistics Winner', desc: 'Optimized blood delivery using AI routing and cold-chain checks.' },
  { title: 'XBag (GNEC)', award: 'Eco-fashion Top 3', desc: 'Upcycled bag system with circular supply insights.' },
  { title: 'Harmony DAO', award: 'Blockchain identity Top 5', desc: 'Decentralized identity primitives for community governance.' },
]

export default function HackathonPatches() {
  const [open, setOpen] = useState(null)
  const toggle = (i) => setOpen(open === i ? null : i)
  return (
    <section id="hackathons" className="section">
      <div className="container">
        <h2>Test Flights</h2>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
          {patches.map((p, i) => (
            <div key={p.title} className={`patch-card ${open === i ? 'is-open' : ''}`} onClick={() => toggle(i)}>
              <div className="patch-head">
                <div className="patch-title">{p.title}</div>
                <div className="patch-award">{p.award}</div>
              </div>
              <div className="patch-details">
                <div className="patch-desc">{p.desc}</div>
                <a href="/hackathons" className="button">See All Flights →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}