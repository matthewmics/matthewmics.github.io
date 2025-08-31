import React, { useEffect } from 'react'
import { cn } from '../lib/utils'
import { Menu, X } from 'lucide-react'

const navItems = [
    {
        name: 'Home',
        href: '#home',
    },
    {
        name: 'About',
        href: '#about',
    },
    {
        name: 'Skills',
        href: '#skills',
    },
    {
        name: 'Projects',
        href: '#projects',
    },
    {
        name: 'Contact',
        href: '#contact',
    },
]

const Navbar = () => {
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [isOpen, setIsOpen] = React.useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            setIsScrolled(scrollTop > 10)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [isOpen])

    return (
        <nav
            className={cn(
                'fixed w-full z-40 transition-300',
                isScrolled && !isOpen ? 'py-3 bg-background/80 backdrop-blur-sm shadow-xs' : 'py-5',
            )}
        >
            <div className='container flex items-center justify-between'>
                <a className='text-xl font-bold text-primary flex items-center' href='#hero'>
                    <span className='relative z-10'>
                        <span className='text-glow text-foreground'>Matthew</span> Portfolio
                    </span>
                </a>

                {/* desktop version */}
                <div className='hidden md:flex space-x-8'>
                    {navItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            className='text-foreground/80 hover:text-primary transition-colors duration-300'
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* mobile version */}

                <button
                    onClick={() => {
                        setIsOpen(prev => !prev)
                    }}
                    className='md:hidden p-2 text-foreground'
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <div
                    className={cn(
                        'fixed top-0 left-0 right-0 bottom-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center',
                        'transition-all duration-300 md:hidden',
                        isOpen
                            ? 'opacity-100 pointer-events-auto'
                            : 'opacity-0 pointer-events-none',
                    )}
                >
                    <div className='flex flex-col space-y-8 text-xl'>
                        {navItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className='text-foreground/80 hover:text-primary transition-colors duration-300'
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
