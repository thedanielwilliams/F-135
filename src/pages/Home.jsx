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
          <h2>Recent Deployments</h2>
          <AltitudeTrack nodes={[
            { year: 2025, title: '64SQRS', metric: '93% bug-free deployment', link: 'https://hurricane-woolen-96d.notion.site/Sport64sqs-13c22c4ad911806c9ef6f3efbf492e4c?source=copy_link' },
            { year: 2024, title: 'Archived', metric: 'Beta feedback loop', link: 'https://hurricane-woolen-96d.notion.site/Archived-23b22c4ad9118011a6befe2257d07838?source=copy_link' },
            { year: 2023, title: 'Kukeat', metric: '₦250k win', link: 'https://hurricane-woolen-96d.notion.site/Ideation-to-MVP-13c22c4ad91181c68e81f5ed82c3df2f?source=copy_link' },
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