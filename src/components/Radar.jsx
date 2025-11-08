import { motion } from 'framer-motion'

export default function Radar({ items = [] }) {
  return (
    <div className="card" style={{ position: 'relative', overflow: 'hidden', minHeight: 260, marginTop: 18 }}>
      <div style={{ fontWeight: 700, marginBottom: 8 }}>Interactive Radar</div>
      <div style={{ position: 'relative', height: 200 }}>
        <motion.div
          style={{ position: 'absolute', left: '50%', top: '50%', width: 160, height: 160, marginLeft: -80, marginTop: -80, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.12)' }}
        />
        <motion.div
          style={{ position: 'absolute', left: '50%', top: '50%', width: 220, height: 220, marginLeft: -110, marginTop: -110, borderRadius: '50%', border: '1px dashed rgba(255,255,255,0.1)' }}
        />
        <motion.div
          style={{ position: 'absolute', left: '50%', top: '50%', width: 280, height: 280, marginLeft: -140, marginTop: -140, borderRadius: '50%', border: '1px dashed rgba(255,255,255,0.08)' }}
        />
        <motion.div
          className="sweep"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
          style={{ position: 'absolute', left: '50%', top: '50%', width: 140, height: 2, background: 'linear-gradient(90deg, rgba(0,178,255,0.0), rgba(0,178,255,0.7))', transformOrigin: '0% 50%' }}
        />
        {items.map((it, idx) => (
          <motion.div key={idx} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 + idx * 0.15 }}
            title={it.label}
            style={{ position: 'absolute', left: `calc(50% + ${it.x}px)`, top: `calc(50% + ${it.y}px)`, width: 10, height: 10, borderRadius: 999, background: '#9fdfff', boxShadow: '0 0 18px rgba(0,178,255,0.6)' }}
          />
        ))}
      </div>
      <div style={{ color: 'var(--muted)', fontSize: 12 }}>Project logos orbit around “Daniel”.</div>
    </div>
  )
}