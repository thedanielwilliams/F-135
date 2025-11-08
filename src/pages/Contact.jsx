export default function Contact() {
  const email = 'daniel@example.com' // Update to your real email
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 720 }}>
        <h2>Contact me</h2>
        <p className="muted">I’m quickest on email. Send me a note and I’ll reply.</p>

        <div className="card" style={{ display: 'grid', gap: 16, alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
            <a className="button primary" href={`mailto:${email}`}>Send me a mail</a>
            
          </div>
          <small className="muted">Tip: if this doesn’t open your mail app, copy this address: onikoladanielwilliams@gmail.com<code style={{ userSelect: 'all' }}>{email}</code></small>
        </div>
      </div>

      <style>{`
        .badge { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.14); color: var(--text); border-radius: 999px; padding: 6px 10px; font-size: 12px; }
        .card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.12); border-radius: 12px; padding: 16px; }
      `}</style>
    </section>
  )
}