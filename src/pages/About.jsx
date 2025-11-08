import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="section">
      <div className="container">
        <motion.h2 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>About Me</motion.h2>
        <div className="grid cols-2" style={{ alignItems: 'start', marginTop: 18 }}>
          <div className="card" style={{ lineHeight: 1.8 }}>
            <p>
              For over three years, I’ve helped teams turn raw ideas into real products that grow.
              I write clear PRDs and SRDs, design user journeys that move smoothly,
              and plan roadmaps that keep the mission on course.
            </p>
            <p>
              I think like an engineer, speak like a storyteller, and operate like a strategist.
              My job is to align teams around the mission, reduce ambiguity, and deliver outcomes.
            </p>
          </div>

          <div className="grid cols-3" style={{ gap: 12 }}>
            <Gauge label="Design" value={77} suffix="%" sub="UX craft & systems" color="var(--afterburn-blue)" />
            <Gauge label="Documentation" value={88} suffix="%" sub="PRDs, specs, clarity" color="var(--accent-orange)" />
            <Gauge label="Technology" value={95} suffix="%" sub="Product engineering" color="#9fdfff" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Gauge({ label, value, suffix, sub, color }) {
  const pct = Math.max(0, Math.min(100, value))
  const stroke = 6
  const size = 120
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const dash = (pct / 100) * circumference
  return (
    <div className="card" style={{ textAlign: 'center' }}>
      <div style={{ fontWeight: 700, marginBottom: 8 }}>{label}</div>
      <svg width={size} height={size} style={{ margin: '0 auto', display: 'block' }}>
        <circle cx={size/2} cy={size/2} r={radius} stroke="rgba(255,255,255,0.12)" strokeWidth={stroke} fill="none" />
        <motion.circle cx={size/2} cy={size/2} r={radius} stroke={color} strokeWidth={stroke} fill="none" strokeDasharray={`${dash} ${circumference}`} strokeLinecap="round" initial={{ strokeDasharray: `0 ${circumference}` }} animate={{ strokeDasharray: `${dash} ${circumference}` }} transition={{ duration: 1.2 }} />
      </svg>
      <div style={{ fontSize: 24, marginTop: 4 }}>
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>{value}{suffix}</motion.span>
      </div>
      <div style={{ color: 'var(--muted)', fontSize: 12 }}>{sub}</div>
    </div>
  )
}