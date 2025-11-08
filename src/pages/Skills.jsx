export default function Skills() {
  const groups = [
    { name: 'Navigation Systems (Product)', items: ['PRDs', 'Roadmapping', 'Agile', 'Sprint Planning'] },
    { name: 'Sensors (Research & Design)', items: ['User Interviews', 'Wireframing', 'Figma', 'Testing'] },
    { name: 'Engines (Growth)', items: ['Go-to-Market', 'Branding', 'SEO'] },
    { name: 'Telemetry (Data)', items: ['SQL', 'Mixpanel', 'Analytics'] },
    { name: 'Crew (Soft Skills)', items: ['Leadership', 'Storytelling', 'Teamwork'] },
  ]
  return (
    <section className="section">
      <div className="container">
        <h2>Control Panel</h2>
        <div className="grid cols-2" style={{ marginTop: 18 }}>
          {groups.map(group => (
            <div key={group.name} className="card">
              <div style={{ fontWeight: 700 }}>{group.name}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 12 }}>
                {group.items.map(it => (
                  <label key={it} className="badge" style={{ cursor: 'pointer' }}>
                    <input type="checkbox" defaultChecked style={{ accentColor: 'var(--afterburn-blue)', marginRight: 8 }} /> {it}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}