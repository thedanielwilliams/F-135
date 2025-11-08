export default function MissionTimeline({ entries = [] }) {
  return (
    <div className="card" style={{ marginTop: 18 }}>
      <div style={{ fontWeight: 700, marginBottom: 8 }}>Flight Mission Timeline</div>
      <div style={{ position: 'relative', paddingLeft: 24 }}>
        <div style={{ position: 'absolute', left: 10, top: 0, bottom: 0, width: 2, background: 'rgba(255,255,255,0.12)' }} />
        {entries.map((e, i) => (
          <div key={i} style={{ position: 'relative', margin: '18px 0 18px 0' }}>
            <div style={{ position: 'absolute', left: 2, top: 6, width: 10, height: 10, borderRadius: 999, background: 'var(--afterburn-blue)' }} />
            <div style={{ display: 'flex', gap: 12, alignItems: 'baseline' }}>
              <div className="badge" style={{ minWidth: 64 }}>{e.year}</div>
              <div style={{ fontWeight: 600 }}>{e.title}</div>
              <div style={{ color: 'var(--muted)' }}>Altitude: {e.impact}</div>
            </div>
            <div style={{ marginTop: 6 }}>{e.note}</div>
          </div>
        ))}
      </div>
    </div>
  )
}