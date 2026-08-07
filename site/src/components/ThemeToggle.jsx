import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '../lib/utils'

/**
 * Dark/light switch. The initial class is applied by the inline script in
 * index.html (so there is no flash), this component only mirrors and flips it.
 */
const ThemeToggle = ({ className }) => {
    const [isDark, setIsDark] = useState(true)

    useEffect(() => {
        setIsDark(document.documentElement.classList.contains('dark'))
    }, [])

    const toggleTheme = () => {
        const next = !isDark
        document.documentElement.classList.toggle('dark', next)
        localStorage.setItem('theme', next ? 'dark' : 'light')
        setIsDark(next)
    }

    return (
        <button
            type='button'
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            className={cn(
                'relative grid size-10 cursor-pointer place-items-center overflow-hidden rounded-full',
                'border border-border bg-card/60 backdrop-blur-sm',
                'transition-colors duration-300 hover:border-primary/50 hover:bg-primary/10',
                className,
            )}
        >
            <AnimatePresence initial={false} mode='wait'>
                <motion.span
                    key={isDark ? 'sun' : 'moon'}
                    initial={{ y: -14, opacity: 0, rotate: -60 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: 14, opacity: 0, rotate: 60 }}
                    transition={{ duration: 0.22, ease: 'easeOut' }}
                    className='absolute grid place-items-center'
                >
                    {isDark ? (
                        <Sun className='size-[18px] text-amber-400' />
                    ) : (
                        <Moon className='size-[18px] text-primary' />
                    )}
                </motion.span>
            </AnimatePresence>
        </button>
    )
}

export default ThemeToggle
