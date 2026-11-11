import Hero from '../components/Hero.jsx'
import Signals from '../components/Signals.jsx'
import ProjectTeasers from '../components/ProjectTeasers.jsx'
import EngineRoom from '../components/EngineRoom.jsx'
import About from './About.jsx'
import HackathonPatches from '../components/HackathonPatches.jsx'
import BuildLogList from '../components/BuildLogList.jsx'
import ContactBar from '../components/ContactBar.jsx'
import ScrollSpy from '../components/ScrollSpy.jsx'

export default function Home() {
  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'projects', label: 'Featured Work' },
    { id: 'experiments', label: 'Experiments' },
    { id: 'how-i-work', label: 'How I Work' },
    { id: 'about', label: 'About Me' },
    { id: 'hackathons', label: 'Hackathons' },
    { id: 'build-log', label: 'Articles' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <div>
      <ScrollSpy sections={sections} />
      <Hero />
      <Signals />
      <ProjectTeasers />
      <EngineRoom />
      <About />
      <HackathonPatches />
      <BuildLogList />
      <ContactBar />
    </div>
  )
}
