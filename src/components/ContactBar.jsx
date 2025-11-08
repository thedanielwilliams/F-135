export default function ContactBar() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Clearance</h2>
        <p className="muted">Got a mission that needs lift? Let’s get it off the ground.</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a className="button primary" href="mailto:daniel@example.com">Email</a>
          <a className="button" href="https://www.linkedin.com/in/danielwilliamsonikola" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="button" href="/contact">Open Contact Form →</a>
        </div>
      </div>
    </section>
  )
}