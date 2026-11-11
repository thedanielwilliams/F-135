export const CONTACT_EMAIL = 'onikoladanielwilliams@gmail.com'

export default function ContactBar() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact-box">
          <h2>Have a product problem worth solving?</h2>
          <p className="muted contact-copy">
            I'm open to Product Manager opportunities and conversations with teams building useful products.
          </p>
          <p className="muted contact-copy">
            If you're working on something interesting, I'd like to hear what you're building.
          </p>
          <div className="cta-row" style={{ justifyContent: 'flex-start', marginTop: 20 }}>
            <a className="button accent" href={`mailto:${CONTACT_EMAIL}`}>
              Let's talk
            </a>
          </div>
          <small className="muted" style={{ display: 'block', marginTop: 14 }}>
            Direct email: <code style={{ userSelect: 'all', color: 'var(--text)' }}>{CONTACT_EMAIL}</code>
          </small>
        </div>
      </div>
    </section>
  )
}
