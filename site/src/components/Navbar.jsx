import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '../lib/utils'
import ThemeToggle from './ThemeToggle'

const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Work Experience', href: '#work-experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
]

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [activeId, setActiveId] = useState('hero')

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10)
        handleScroll()
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Scroll spy: highlight whichever section currently owns the viewport.
    useEffect(() => {
        const sections = navItems
            .map(item => document.querySelector(item.href))
            .filter(Boolean)

        const observer = new IntersectionObserver(
            entries => {
                const visible = entries
                    .filter(entry => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

                if (visible) setActiveId(visible.target.id)
            },
            { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] },
        )

        sections.forEach(section => observer.observe(section))
        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : ''
        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen])

    return (
        <header
            className={cn(
                'fixed inset-x-0 top-0 z-50 transition-all duration-300',
                isScrolled && !isOpen
                    ? 'border-b border-border bg-background/70 py-3 backdrop-blur-xl'
                    : 'border-b border-transparent py-5',
            )}
        >
            <nav className='container flex items-center justify-between gap-4'>
                <a
                    href='#hero'
                    className='group flex shrink-0 items-center gap-2.5'
                    aria-label='Back to top'
                >
                    <span className='grid size-9 place-items-center rounded-xl bg-linear-to-br from-primary to-accent font-display text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-transform duration-300 group-hover:scale-110'>
                        MM
                    </span>
                    <span className='font-display text-base font-semibold tracking-tight'>
                        Matthew<span className='text-muted-foreground'>.dev</span>
                    </span>
                </a>

                {/* Desktop nav */}
                <div className='hidden items-center gap-1 rounded-full border border-border bg-card/50 p-1 backdrop-blur-md min-[1024px]:flex'>
                    {navItems.map(item => {
                        const isActive = activeId === item.href.slice(1)
                        return (
                            <a
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    'relative rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors duration-200',
                                    isActive
                                        ? 'text-primary-foreground'
                                        : 'text-muted-foreground hover:text-foreground',
                                )}
                            >
                                {isActive && (
                                    <motion.span
                                        layoutId='nav-pill'
                                        className='absolute inset-0 -z-10 rounded-full bg-primary'
                                        transition={{
                                            type: 'spring',
                                            stiffness: 380,
                                            damping: 32,
                                        }}
                                    />
                                )}
                                {item.name}
                            </a>
                        )
                    })}
                </div>

                <div className='flex shrink-0 items-center gap-2'>
                    <ThemeToggle />

                    <button
                        type='button'
                        onClick={() => setIsOpen(prev => !prev)}
                        aria-label={isOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isOpen}
                        className='grid size-10 cursor-pointer place-items-center rounded-full border border-border bg-card/60 text-foreground backdrop-blur-sm transition-colors hover:border-primary/50 hover:bg-primary/10 min-[1024px]:hidden'
                    >
                        {isOpen ? <X size={18} /> : <Menu size={18} />}
                    </button>
                </div>
            </nav>

            {/* Mobile drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className='fixed inset-0 top-0 -z-10 flex flex-col items-center justify-center bg-background/95 backdrop-blur-xl min-[1024px]:hidden'
                    >
                        <ul className='flex flex-col items-center gap-2'>
                            {navItems.map((item, index) => (
                                <motion.li
                                    key={item.href}
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.05 + index * 0.05, duration: 0.3 }}
                                >
                                    <a
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className={cn(
                                            'block rounded-full px-6 py-2 font-display text-2xl font-semibold transition-colors',
                                            activeId === item.href.slice(1)
                                                ? 'text-primary'
                                                : 'text-foreground/80 hover:text-primary',
                                        )}
                                    >
                                        {item.name}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}

export default Navbar
