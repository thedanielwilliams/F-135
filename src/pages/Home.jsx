import Hero from '../components/Hero.jsx'
import EngineRoom from '../components/EngineRoom.jsx'
import ProjectTeasers from '../components/ProjectTeasers.jsx'
import HackathonPatches from '../components/HackathonPatches.jsx'
import BuildLogList from '../components/BuildLogList.jsx'
// import Signals from '../components/Signals.jsx'
import ContactBar from '../components/ContactBar.jsx'
import ScrollSpy from '../components/ScrollSpy.jsx'

export default function Home() {
  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'engine-room', label: 'About Me' },
    { id: 'projects', label: 'Project' },
    { id: 'hackathons', label: 'Hackathons' },
    { id: 'build-log', label: 'Build Log' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <div>
      <ScrollSpy sections={sections} />
      <Hero />

      <EngineRoom />
      <ProjectTeasers />
      <HackathonPatches />
      <BuildLogList />
      {/* <Signals /> */}
      <ContactBar />
    </div>
  )
}