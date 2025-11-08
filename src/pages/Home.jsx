import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import Radar from '../components/Radar.jsx'

export default function Home() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 0.6], [0, -60])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.95])

  return (
    <section className="section">
      <motion.div className="container hero" style={{ y, opacity }}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Precision. Speed. Lift.</h1>
          <p>
            I’m Daniel — a Product Manager who helps teams turn ideas into products that grow.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
            <Link className="button accent" to="/projects">View Flight Logs</Link>
            <Link className="button" to="/about">Enter Engine Room</Link>
          </div>
          <div style={{ marginTop: 12 }} className="badge">I’m an F‑135 Product Engine — built for precision, speed, and lift.</div>
        </motion.div>

        <div className="turbine">
          <motion.div className="ring" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 28, ease: 'linear' }} />
          <motion.div className="core" animate={{ scale: [1, 1.12, 1] }} transition={{ repeat: Infinity, duration: 3 }} />
        </div>
      </motion.div>

      <div className="container">
        <Radar items={[
          { label: '64SQRS', x: 80, y: -30 },
          { label: 'Archived', x: -60, y: 50 },
          { label: 'Kukeat', x: -20, y: -60 },
        ]} />
      </div>
    </section>
  )
}