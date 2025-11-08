import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = (e) => { e.preventDefault(); console.log('Contact form', form); alert('Thanks for reaching out — I’ll get back to you.'); }
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 760 }}>
        <h2>Landing Gear</h2>
        <p style={{ color: 'var(--muted)' }}>Got a mission that needs lift? Let’s get it off the ground.</p>
        <form onSubmit={submit} className="card" style={{ display: 'grid', gap: 12 }}>
          <input name="name" value={form.name} onChange={update} placeholder="Your name" required className="field" />
          <input type="email" name="email" value={form.email} onChange={update} placeholder="Your email" required className="field" />
          <textarea name="message" value={form.message} onChange={update} rows={6} placeholder="What’s the mission?" className="field" />
          <div style={{ display: 'flex', gap: 12 }}>
            <button type="submit" className="button accent">Deploy message</button>
            <a className="button" href="mailto:daniel@example.com">Email</a>
            <a className="button" href="https://www.linkedin.com/in/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </form>
      </div>
      <style>{`
        .field { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); border-radius: 10px; padding: 12px 14px; color: var(--text); }
        .field::placeholder { color: var(--muted); }
      `}</style>
    </section>
  )
}