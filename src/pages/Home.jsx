import Hero from '../components/Hero.jsx'
import AltitudeTrack from '../components/AltitudeTrack.jsx'
import EngineRoom from '../components/EngineRoom.jsx'
import ProjectTeasers from '../components/ProjectTeasers.jsx'
import HackathonPatches from '../components/HackathonPatches.jsx'
import BuildLogList from '../components/BuildLogList.jsx'
import Signals from '../components/Signals.jsx'
import ContactBar from '../components/ContactBar.jsx'
import ScrollSpy from '../components/ScrollSpy.jsx'

export default function Home() {
  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'engine-room', label: 'Engine Room' },
    { id: 'projects', label: 'Projects' },
    { id: 'hackathons', label: 'Hackathons' },
    { id: 'build-log', label: 'Build Log' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <div>
      <ScrollSpy sections={sections} />
      <Hero />

      {/* Mission Timeline replacement: horizontal altitude track */}
      <section className="section">
        <div className="container">
          <AltitudeTrack nodes={[
            { year: 2025, title: '64SQRS', metric: '93% bug-free deployment' },
            { year: 2024, title: 'Archived', metric: 'Beta feedback loop' },
            { year: 2023, title: 'Kukeat', metric: '₦250k win' },
          ]} />
        </div>
      </section>

      <EngineRoom />
      <ProjectTeasers />
      <HackathonPatches />
      <BuildLogList />
      <Signals />
      <ContactBar />
    </div>
  )
}