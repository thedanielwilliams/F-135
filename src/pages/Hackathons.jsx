export default function Hackathons() {
  const items = [
    { name: 'BloodChain', award: '₦5M Prize', year: 2025, desc: 'AI-powered blood logistics', role: 'Product Lead' },
    { name: 'XBag', award: 'Top 3, GNEC', year: 2023, desc: 'Eco-fashion from upcycled plastic', role: 'Product / Ops' },
    { name: 'Harmony DAO', award: 'Top 5', year: 2021, desc: 'Blockchain identity system', role: 'Product' },
  ]
  return (
    <section className="section">
      <div className="container">
        <h2>Test Flights</h2>
        <div className="grid cols-3" style={{ marginTop: 18 }}>
          {items.map((it) => (
            <div key={it.name} className="card" style={{ position: 'relative', overflow: 'hidden' }}>
              <div className="badge">Mission Patch</div>
              <div style={{ fontWeight: 700, marginTop: 6 }}>{it.name} <span style={{ color: 'var(--muted)', fontWeight: 400 }}>({it.year})</span></div>
              <div style={{ color: 'var(--muted)', marginTop: 4 }}>{it.award}</div>
              <div style={{ marginTop: 8 }}>{it.desc}</div>
              <div className="hover-reveal" style={{ position: 'absolute', inset: 10, borderRadius: 12, border: '1px dashed rgba(255,255,255,0.14)', display: 'grid', placeItems: 'center', background: 'rgba(0,0,0,0.24)', color: '#9fdfff', opacity: 0, transition: 'opacity 200ms' }}>
                Role: {it.role}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .card:hover .hover-reveal { opacity: 1; }
      `}</style>
    </section>
  )
}