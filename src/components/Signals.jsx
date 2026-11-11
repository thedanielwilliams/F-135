const achievements = [
  {
    value: 'Web Launch',
    description: "Led Zent's web application from development through production launch."
  },
  {
    value: '6 Weeks',
    description: 'Led a five-person product team to deliver the 64SQRS MVP for testing.'
  },
  {
    value: '8× Growth',
    description: "Helped grow the Gentlemen's Crib community from 250+ to over 2,000 members."
  }
]

export default function Signals() {
  return (
    <section id="proof-of-work" className="proof-section" aria-label="Proof of work">
      <div className="container">
        <div className="proof-grid">
          {achievements.map((item) => (
            <div key={item.value} className="proof-card">
              <div className="proof-value">{item.value}</div>
              <p className="proof-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
