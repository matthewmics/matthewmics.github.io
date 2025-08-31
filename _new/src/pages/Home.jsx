import StarBackground from '../components/StarBackground'
import ThemeToggle from '../components/ThemeToggle'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutMe from '../components/AboutMe'
import SkillsSection from '../components/SkillsSection'
import Projects from '../components/Projects'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
            {/* Theme toggle */}
            <ThemeToggle />
            {/* Background Effects */}
            <StarBackground />
            {/* Navbar  */}
            <Navbar />

            {/* Main Content */}
            <main>
                <HeroSection />
                <AboutMe />
                <SkillsSection />
                <Projects />
                <ContactSection />
            </main>

            {/* Footer  */}
            <Footer />
        </div>
    )
}

export default Home
