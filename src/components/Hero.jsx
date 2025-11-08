import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 0.6], [0, -60])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.95])
  const [trailActive, setTrailActive] = useState(false)

  useEffect(() => {
    let timeout
    const onScroll = () => {
      setTrailActive(true)
      clearTimeout(timeout)
      timeout = setTimeout(() => setTrailActive(false), 3000)
    }
    window.addEventListener('scroll', onScroll)
    return () => { window.removeEventListener('scroll', onScroll); clearTimeout(timeout) }
  }, [])

  return (
    <section id="hero" className="section">
      <motion.div className="container hero" style={{ y, opacity }}>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="hero-title">Precision. Speed. Lift.</h1>
          <p className="hero-sub">I’m Daniel — a Product Manager who helps teams turn ideas into products that grow.</p>
          <div className="cta-row" style={{ justifyContent: 'center' }}>
            <a className="button accent" href="/#projects">View Flight Logs</a>
            <a className="button" href="/#engine-room">Enter Engine Room</a>
          </div>
          <div style={{ marginTop: 12 }} className="badge">I’m an F‑135 Product Engine — built for precision, speed, and lift.</div>
          <div className="mission-chips">
            <a href="/projects" className="chip">64SQRS</a>
            <a href="/projects" className="chip">Archived</a>
            <a href="/projects" className="chip">Kukeat</a>
          </div>
        </motion.div>

        {/* Animated runway line */}
        <div className="runway">
          <div className="runway-line" />
        </div>

        {/* Engine trail overlay */}
        {trailActive && (
          <motion.div className="engine-trail" initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} />
        )}
      </motion.div>
    </section>
  )
}