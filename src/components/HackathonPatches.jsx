import { useState } from 'react'

const patches = [
  { title: 'BloodChain (₦5M)', award: 'AI blood logistics Winner', desc: 'Optimized blood delivery using AI routing and cold-chain checks.' },
  { title: 'XBag (GNEC)', award: 'Eco-fashion Top 3', desc: 'Upcycled bag system with circular supply insights.' },
  { title: 'Harmony DAO', award: 'Blockchain identity Top 5', desc: 'Decentralized identity primitives for community governance.' },
]

export default function HackathonPatches() {
  const [expanded, setExpanded] = useState(null)
  return (
    <section id="hackathons" className="section">
      <div className="container">
        <h2>Test Flights</h2>
        <div className="patches-grid">
          {patches.map((p, idx) => (
            <div key={p.title} className={`patch ${expanded === idx ? 'expand' : ''}`} onClick={() => setExpanded(expanded === idx ? null : idx)}>
              <div className="patch-face patch-front">
                <div className="patch-title">{p.title}</div>
                <div className="patch-award">{p.award}</div>
              </div>
              <div className="patch-face patch-back">
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