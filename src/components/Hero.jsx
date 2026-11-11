import { useNavigate, useLocation } from 'react-router-dom'

// Set to '/Daniel_Williams_Resume.pdf' once the CV PDF is added to public/
export const CV_URL = ''

export default function Hero() {
  const navigate = useNavigate()
  const location = useLocation()

  const handleExploreWork = (e) => {
    e.preventDefault()
    const el = document.getElementById('projects')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    } else if (location.pathname !== '/') {
      navigate('/#projects')
    }
  }

  return (
    <section id="hero" className="section hero-section">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <h1 className="hero-title">
              I help teams decide <span className="hero-accent">what to build</span>, what to cut, and <span className="hero-accent">what to ship</span>.
            </h1>
            <p className="hero-sub">
              I'm Daniel Williams, a Product Manager who leads teams from discovery to release—turning user problems into clear priorities and working software.
            </p>
            <div className="cta-row hero-cta">
              <a href="#projects" onClick={handleExploreWork} className="button accent">
                Explore my work
              </a>
              {CV_URL ? (
                <a href={CV_URL} download className="button">
                  Download my CV
                </a>
              ) : (
                <button
                  type="button"
                  className="button"
                  aria-disabled="true"
                  title="CV file (/Daniel_Williams_Resume.pdf) to be added"
                  style={{ opacity: 0.65, cursor: 'default' }}
                >
                  Download my CV
                </button>
              )}
            </div>
          </div>

          <div className="hero-media">
            <img
              src="/IMG_9210.jpg"
              alt="Daniel Williams, Product Manager"
              className="hero-photo"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
