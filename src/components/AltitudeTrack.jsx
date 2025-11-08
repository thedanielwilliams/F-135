import { motion } from 'framer-motion'

export default function AltitudeTrack({ nodes = [] }) {
  return (
    <div className="altitude-track">
      <div className="track-line" />
      <div className="nodes">
        {nodes.map((n, idx) => (
          <motion.div key={idx} className="node" whileHover={{ scale: 1.08 }}>
            <div className="glow" />
            <div className="dot" />
            <div className="bubble">
              <div className="bubble-title">{n.title}</div>
              <div className="bubble-meta">{n.year} • {n.metric}</div>
              <a href="/projects" className="bubble-cta">Open Flight Log →</a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}