import { useEffect, useState } from 'react'

export default function ScrollSpy({ sections = [] }) {
  const [active, setActive] = useState(sections[0]?.id || null)

  useEffect(() => {
    const observers = []
    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(id)
            }
          })
        },
        { rootMargin: '0px 0px -60% 0px', threshold: 0.2 }
      )
      observer.observe(el)
      observers.push(observer)
    })
    return () => { observers.forEach(o => o.disconnect()) }
  }, [sections])

  return (
    <div className="scrollspy">
      {sections.map((s) => (
        <a key={s.id} href={`/#${s.id}`} className={`dot ${active === s.id ? 'active' : ''}`} aria-label={s.label} title={s.label} />
      ))}
    </div>
  )
}