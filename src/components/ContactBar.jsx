export default function ContactBar() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Send me a Mail</h2>
        <p className="muted">Got an idea/project mission that needs ti be delivered within a tight timeline? Let’s hit the ground running.</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a className="button primary" href="mailto:onikoladanielwilliams@gmail.com">Email</a>
        </div>
      </div>
    </section>
  )
}