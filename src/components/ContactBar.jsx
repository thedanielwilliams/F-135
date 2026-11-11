import { CV_URL } from './Hero.jsx'

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
            {CV_URL ? (
              <a className="button" href={CV_URL} target="_blank" rel="noopener noreferrer">
                View my CV
              </a>
            ) : (
              <button
                type="button"
                className="button"
                aria-disabled="true"
                title="CV file (/Daniel_Williams_Resume.pdf) to be added"
                style={{ opacity: 0.65, cursor: 'default' }}
              >
                View my CV
              </button>
            )}
          </div>
          <small className="muted" style={{ display: 'block', marginTop: 14 }}>
            Direct email: <code style={{ userSelect: 'all', color: 'var(--text)' }}>{CONTACT_EMAIL}</code>
          </small>
        </div>
      </div>
    </section>
  )
}
