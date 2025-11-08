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
          <h2 className="hero-title"> Hi, I’m Daniel.👋 A Product Manager who turns ideas into systems that grow. </h2>
          <p className="hero-sub">For over three years, I’ve helped teams turn problems into valuable products. I spot clear PRDs and SRDs, design user journeys and collaborate efficiently with engineers.</p>
          <div className="cta-row" style={{ justifyContent: 'center' }}>
      
          </div>
          {/* Mission chips removed as requested */}
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