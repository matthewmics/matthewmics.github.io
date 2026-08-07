import StarBackground from '../components/StarBackground'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutMe from '../components/AboutMe'
import SkillsSection from '../components/SkillsSection'
import Projects from '../components/Projects'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import Certifications from '../components/Certifications'
import WorkExperience from '../components/WorkExperience'

const Home = () => {
    return (
        <div className='relative min-h-svh overflow-x-hidden'>
            {/* Background effects (the theme toggle now lives in the navbar) */}
            <StarBackground />

            <Navbar />

            <main>
                <HeroSection />
                <AboutMe />
                <WorkExperience />
                <SkillsSection />
                <Projects />
                <Certifications />
                <ContactSection />
            </main>

            <Footer />
        </div>
    )
}

export default Home
