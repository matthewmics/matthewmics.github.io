import { ArrowLeft } from 'lucide-react'
import StarBackground from '../components/StarBackground'
import ThemeToggle from '../components/ThemeToggle'

const NotFound = () => {
    return (
        <div className='relative grid min-h-svh place-items-center overflow-hidden px-6'>
            <StarBackground />

            <ThemeToggle className='fixed top-5 right-5 z-50' />

            <div className='flex flex-col items-center text-center'>
                <span className='eyebrow'>
                    <span className='size-1.5 rounded-full bg-primary' />
                    Error 404
                </span>

                <h1 className='text-gradient mt-6 font-display text-7xl font-bold sm:text-9xl'>
                    404
                </h1>

                <p className='mt-4 max-w-md text-pretty text-muted-foreground'>
                    This page drifted off into space. Let&rsquo;s get you back to solid ground.
                </p>

                <a href='/' className='cosmic-button group mt-9'>
                    <ArrowLeft className='size-4 transition-transform duration-300 group-hover:-translate-x-1' />
                    Back home
                </a>
            </div>
        </div>
    )
}

export default NotFound
