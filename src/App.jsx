import { useEffect } from 'react'
import { BrowserRouter, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Hackathons from './pages/Hackathons.jsx'
import Skills from './pages/Skills.jsx'
import Contact from './pages/Contact.jsx'
import BuildLog from './pages/BuildLog.jsx'

function ScrollTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function Nav() {
  return (
    <div className="nav">
      <div className="container nav-inner">
        <div className="brand">
          <motion.span initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="badge">F‑135</motion.span>
          <div>
            <div className="brand-title">Daniel Williams Onikola</div>
            <div className="brand-sub">Product Manager — Lagos</div>
          </div>
        </div>
        <div className="menu">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/hackathons">Hackathons</NavLink>
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/build-log">Build Log</NavLink>
          <NavLink to="/contact" className="button primary">Contact</NavLink>
        </div>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        Fueled by curiosity. Guided by data. Landing soon somewhere ambitious.
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
      <ScrollTop />
      <div className="app">
        <Nav />
        <main className="main">
          {/* Route transitions */}
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
        <Route path="/skills" element={<Page><Skills /></Page>} />
        <Route path="/build-log" element={<Page><BuildLog /></Page>} />
        <Route path="/contact" element={<Page><Contact /></Page>} />
      </Routes>
    </AnimatePresence>
  )
}
