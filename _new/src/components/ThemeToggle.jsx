import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { cn } from '../lib/utils'

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark')
            setIsDarkMode(true)
        } else {
            document.documentElement.classList.remove('dark')
            setIsDarkMode(false)
        }
    }, [])

    useEffect(() => {
        const isFirstVisit = localStorage.getItem('isFirstVisit')

        if (!isFirstVisit) {
            localStorage.setItem('isFirstVisit', 'false')
            toggleTheme()
        }
    }, [])

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
            setIsDarkMode(false)
        } else {
            localStorage.setItem('theme', 'dark')
            document.documentElement.classList.add('dark')
            setIsDarkMode(true)
        }
    }

    return (
        <button
            onClick={toggleTheme}
            className={cn(
                'fixed  bottom-5 right-5 z-50 p-2 rounded-full transition-colors duration-300',
                'focus:outline-hidden cursor-pointer',
                'min-[1490px]:top-5 min-[1490px]:bottom-auto',
            )}
        >
            {isDarkMode ? (
                <Sun className='h-6 w-6 text-yellow-300' />
            ) : (
                <Moon className='h-6 w-6 text-blue-900' />
            )}
        </button>
    )
}

export default ThemeToggle
