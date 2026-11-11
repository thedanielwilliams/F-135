import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Hackathons from './pages/Hackathons.jsx'
import Contact from './pages/Contact.jsx'
import BuildLog from './pages/BuildLog.jsx'

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const timer = setTimeout(() => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }, 60)
      return () => clearTimeout(timer)
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

const navItems = [
  { label: 'Home', sectionId: 'hero', href: '/#hero' },
  { label: 'Projects', sectionId: 'projects', href: '/#projects' },
  { label: 'About me', sectionId: 'about', href: '/#about' },
  { label: 'Hackathons', sectionId: 'hackathons', href: '/#hackathons' },
  { label: 'Articles', sectionId: 'build-log', href: '/#build-log' },
  { label: 'Contact me', sectionId: 'contact', href: '/#contact', primary: true },
]

function Nav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const close = () => setOpen(false)

  const handleNavClick = (e, item) => {
    e.preventDefault()
    close()
    if (location.pathname === '/') {
      if (item.sectionId === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        window.history.replaceState(null, '', '/')
        return
      }
      const el = document.getElementById(item.sectionId)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        window.history.replaceState(null, '', `/#${item.sectionId}`)
        return
      }
    }
    navigate(item.sectionId === 'hero' ? '/' : item.href)
  }

  return (
    <header className="nav">
      <div className="container nav-inner">
        <div className="brand">
          <a
            href="/"
            onClick={(e) => handleNavClick(e, navItems[0])}
            className="brand-link"
          >
            <div className="brand-title">Daniel Williams</div>
            <div className="brand-sub">Product Manager</div>
          </a>
        </div>
        <nav className="menu" aria-label="Main navigation">
          {/* Menu toggle only on mobile */}
          <button
            className="button menu-toggle mobile-only"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            Menu
          </button>
          {/* Desktop links */}
          <div className="menu-links desktop-only">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className={item.primary ? 'button primary' : ''}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
      {open && (
        <div className="mobile-drawer" role="dialog" aria-modal="true" aria-label="Navigation menu">
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div className="brand-title">Daniel Williams</div>
              <button className="button" onClick={close}>Close</button>
            </div>
            <div className="drawer-links">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={item.primary ? 'button primary' : ''}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div>Daniel Williams — Product Manager</div>
        <small>© {new Date().getFullYear()} Daniel Williams Onikola</small>
      </div>
    </footer>
  )
}

function Page({ children }) {
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }}>
      {children}
    </motion.div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <div className="app">
        <Nav />
        <main className="main">
          <RouteTransition />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

function RouteTransition() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Page><Home /></Page>} />
        <Route path="/about" element={<Page><About /></Page>} />
        <Route path="/projects" element={<Page><Projects /></Page>} />
        <Route path="/hackathons" element={<Page><Hackathons /></Page>} />
        <Route path="/build-log" element={<Page><BuildLog /></Page>} />
        <Route path="/contact" element={<Page><Contact /></Page>} />
      </Routes>
    </AnimatePresence>
  )
}
