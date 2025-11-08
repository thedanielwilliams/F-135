const entries = [
  { title: 'What emerging PMs learn from hackathons', note: '“Shipping beats theory.”' },
  { title: 'How I write PRDs that move teams', note: '“Frictionless handoffs.”' },
  { title: 'The bug funnel we used at 64SQRS', note: '“Precision over panic.”' },
]

export default function BuildLogList() {
  return (
    <section id="build-log" className="section">
      <div className="container">
        <h2>Build Log</h2>
        <div className="build-list">
          {entries.map((e) => (
            <div key={e.title} className="build-list-item">
              <div className="list-title">{e.title}</div>
              <div className="list-note">{e.note}</div>
            </div>
          ))}
        </div>
       
      </div>
    </section>
  )
}