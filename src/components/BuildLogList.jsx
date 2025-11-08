const entries = [
  { title: 'What emerging PMs can learn from hackathons', note: '“Shipping beats theory.”', href: 'https://medium.com/@onikoladanielwilliams/what-emerging-product-managers-can-learn-from-hackathons-b21114f4af01' },
  { title: 'How I write PRDs that move teams', note: '“Frictionless handoffs.”' },
  { title: 'The bug funnel we used at 64SQRS', note: '“Precision over panic.”' },
]

export default function BuildLogList() {
  return (
    <section id="build-log" className="section">
      <div className="container">
        <h2>Articles</h2>
        <div className="build-list">
          {entries.map((e) => (
            <div key={e.title} className="build-list-item">
              {e.href ? (
                <a href={e.href} target="_blank" rel="noopener noreferrer" className="list-title">{e.title}</a>
              ) : (
                <div className="list-title">{e.title}</div>
              )}
              <div className="list-note">{e.note}</div>
            </div>
          ))}
        </div>
       
      </div>
    </section>
  )
}