import { useState } from 'react'

export default function Hackathons() {
  const items = [
    {
      name: 'BloodChain', award: '₦5M Prize', year: 2025, role: 'Product Lead', codename: 'The Podium Hackathon', date: 'August 2025',
      objective: 'Design and deploy Nigeria’s first AI-powered blood donation and logistics platform — a system capable of connecting donors, hospitals, and emergencies in real time.',
      paragraphs: [
        'The mission began with turbulence, we had limited time, high stakes, and a five-person crew from different disciplines. As Product Lead, I set the course: a vision that tied technology to empathy. Within forty-eight hours, we defined user journeys, built prototypes, and aligned every sprint around one goal — save time, save lives.',
        'I directed the pitch strategy like a final descent, tight, timed, and deliberate. The result: a clean landing and a ₦500,000 prize fund. But more than that, BloodChain left the runway as a nationwide health solution with genuine potential for real-world impact.'
      ]
    },
    {
      name: 'XBag', award: 'Top 3, GNEC', year: 2023, role: 'Product Lead', codename: 'GNEC Hackathon', date: 'August 2023',
      objective: 'Turn waste into wearable innovation — an eco‑fashion MVP crafted from upcycled plastic.',
      paragraphs: [
        'I assembled a small but driven team and led the first sprint on user research and feature planning. We created personas that felt like real customers, not slides.',
        'I wrote the mission specs, the deck, the UX walkthrough, and the roadmap.',
        'When we submitted, XBag cut through a crowd of over 5,000 participants and landed 3rd place. The judges called our vision “sharp, scalable, and human.” I called it a reminder that sustainability can move fast — if the product flies straight.'
      ]
    },
    {
      name: 'Harmony DAO', award: 'Top 5', year: 2021, role: 'Product Lead', codename: 'Team BuChain', date: 'Dec 2020 – Oct 2021',
      objective: 'Build a blockchain‑based identity system capable of giving users a single, verifiable digital self.',
      paragraphs: [
        'Harmony DAO was a long‑range operation, ten months of experimentation and re‑alignment. I owned the roadmap from take‑off to landing, refining features and leading Figma prototypes that mapped the chain between trust and accessibility.',
        'Our team ranked Top 5 out of 60+ entries, but the win was in the proof of scalability we delivered. The pitch showed not just how the system worked, but how it could hold identity at the speed of trust.'
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