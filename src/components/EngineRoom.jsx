const processSteps = [
  {
    number: '01',
    title: '01. Find the real problem',
    paragraphs: [
      'I start with the people using the product.',
      'What are they trying to do? Where are they getting stuck? What does their feedback tell us?',
      'These questions help turn assumptions into clearer product requirements.'
    ]
  },
  {
    number: '02',
    title: '02. Make the trade-offs',
    paragraphs: [
      'Not everything belongs in the next release.',
      'I work through priorities, user value, and technical constraints, translating ideas into roadmaps and requirements that teams can act on.'
    ]
  },
  {
    number: '03',
    title: '03. Ship, learn, improve',
    paragraphs: [
      'The plan matters. What reaches the user matters more.',
      'I work closely with design and engineering through delivery, then use feedback and product performance to understand what needs improving.'
    ]
  }
]

export default function EngineRoom() {
  return (
    <section id="how-i-work" className="section">
      <div className="container">
        <div className="section-header-block">
          <h2>The hard part isn't having ideas. It's deciding what happens next.</h2>
          <p className="section-subtext" style={{ maxWidth: 680 }}>
            A product can have a hundred good feature ideas. The job is to understand which ones solve a real problem, which ones can wait, and what the team can realistically deliver.
          </p>
        </div>

        <div className="process-grid">
          {processSteps.map((step) => (
            <div key={step.number} className="card process-card">
              <h3 className="process-card-title">{step.title}</h3>
              <div className="process-card-body">
                {step.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
