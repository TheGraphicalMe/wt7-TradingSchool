import { useScrollReveal } from '../hooks/useReveal'
import Navbar       from '../components/Navbar'
import Hero         from '../components/Hero'
import About        from '../components/About'
import Journey      from '../components/Journey'
import Courses      from '../components/Courses'
import Platforms    from '../components/Platforms'
import TCharts     from '../components/TCharts'
import Reviews      from '../components/Reviews'
import Footer       from '../components/Footer'
import VideoSection from '../components/VideoSection'
import AnimatedBackground from '../components/AnimatedBackground'
import HeroBottom from '../components/HeroBottom'

export default function Home() {
  useScrollReveal({ threshold: 0.1 })

  return (
    <main className="noise">
      {/* Fixed animated background — covers entire viewport behind everything */}
      <AnimatedBackground />

      <Navbar />
      <Hero />
      <HeroBottom />
      <VideoSection />
      <About />
      <Journey />
      <Courses />
      <Platforms />
      <TCharts />
      <Reviews />
      <Footer />
    </main>
  )
}