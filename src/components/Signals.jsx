const achievements = [
  {
    value: '6 weeks',
    description: 'Led a five-person product team to deliver the 64SQRS MVP for testing.'
  },
  {
    value: '250+ to 2,000+',
    description: "Grew the Gentlemen's Crib community from over 250 to more than 2,000 members."
  },
  {
    value: '35%',
    description: 'Increase in website traffic at Accrue over three months.'
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
