import { useState } from 'react'

export default function Hackathons() {
  const items = [
    {
      name: 'BloodChain', award: 'Winner — ₦500,000 prize funding', year: 2025, role: 'Product Lead', codename: 'The Podium Hackathon', date: 'Aug 2025',
      objective: 'Defined the product vision for Nigeria’s first AI-powered blood donation and logistics platform.',
      paragraphs: [
        'Led a 5-person cross-functional team to win ₦500,000 prize funding.',
        'Directed pitch strategy and team alignment, positioning BloodChain as a nationwide health solution with real-world impact.'
      ]
    },
    {
      name: 'XBag', award: 'Top 3 — GNEC', year: 2023, role: 'Product Lead', codename: 'GNEC Hackathon', date: 'Aug 2023',
      objective: 'Conceptualised and shipped an MVP for an eco-fashion product made from upcycled plastic.',
      paragraphs: [
        'Led feature planning, persona creation, and final pitch delivery, securing 3rd place out of 5,000 participants.',
        'Co-developed the strategy deck and UX walk-through, commended by judges for clarity of vision.'
      ]
    },
    {
      name: 'Harmony DAO', award: 'Top 5', year: 2021, role: 'Product Lead', codename: 'Team BuChain', date: 'Dec 2020 – Oct 2021',
      objective: 'Built a blockchain-based identity system.',
      paragraphs: [
        'Owned the product roadmap, defined feature scope, and co-led front-end prototyping in Figma.',
        'Delivered a comprehensive pitch to judges, showcasing product-market fit and scalability; ranked Top 5 out of 60+ teams.'
      ]
    },
    {
      name: 'HRecords', award: 'Social Good — Runner‑up — $1,000', year: 2022, role: 'Product Lead', codename: 'EVMxIdeathon', date: '2016 inspiration → 2022 Ideathon',
      objective: 'Use blockchain to help African hospitals store patient data and track inventory.',
      paragraphs: [
        'Origin story: In April 2016, a patient in Lagos was denied surgery because nurses couldn’t find his file. Events like this shaped our mission.',
        'Proposed a ledger‑backed records system that gives hospitals durable access to patient histories while improving inventory traceability.',
        'What we learned: 8/10 African hospitals record details manually; ~1% of Nigerians can access their medical records; hospitals rarely have the past history of new patients.',
        'Outcome: Submitted to EVMxIdeathon. Won Social Good runner‑up ($1,000).',
        'Next steps: Product development, user interviews, beta testing, and launch.',
        'Built with: React, Node.js, Solidity, IPFS, AOS.'
      ]
    }
  ]

  const [open, setOpen] = useState(null)

  return (
    <section className="section">
      <div className="container">
        <h2>Hackathons</h2>
        <div className="grid cols-3" style={{ marginTop: 18 }}>
          {items.map((it, idx) => (
            <div key={it.name} className={`card mission-card ${open === idx ? 'is-open' : ''}`}>
              <div className="badge">Mission Patch</div>
              <div style={{ fontWeight: 700, marginTop: 6 }}>{it.name} <span style={{ color: 'var(--muted)', fontWeight: 400 }}>({it.year})</span></div>
              <div style={{ color: 'var(--muted)', marginTop: 4 }}>{it.award}</div>
              <div style={{ marginTop: 8 }}>{it.objective}</div>
              <div style={{ display: 'flex', gap: 10, marginTop: 10 }}>
                <button className="button accent" onClick={() => setOpen(open === idx ? null : idx)}>
                  {open === idx ? 'Close Mission Log' : 'Open Mission Log'}
                </button>
                </div>

              {/* Inline mission log expansion */}
              <div className="mission-log" aria-hidden={open === idx ? 'false' : 'true'}>
                <div className="micro-modal-title">🛰 Mission Log: {it.name}</div>
                <div className="micro-modal-body">
                  <div><strong>Operation Codename:</strong> {it.codename}</div>
                  <div><strong>Date:</strong> {it.date}</div>
                  <div><strong>Role:</strong> {it.role}</div>
                </div>
                <div className="micro-modal-body">
                  <div style={{ marginBottom: 8 }}><strong>Mission Objective:</strong> {it.objective}</div>
                  {it.paragraphs.map((p, i) => (
                    <p key={i} style={{ marginTop: 8 }}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}