import { useEffect, useState } from 'react'

/**
 * Fixed, purely decorative backdrop that sits behind all content:
 *   1. aurora blobs   — soft colour wash, visible in both themes
 *   2. grid lines     — faint technical grid, masked out towards the bottom
 *   3. stars/meteors  — dark-theme only starfield
 */
const StarBackground = () => {
    const [stars, setStars] = useState([])
    const [meteors, setMeteors] = useState([])

    useEffect(() => {
        const generate = () => {
            const count = Math.min(
                140,
                Math.floor((window.innerWidth * window.innerHeight) / 12000),
            )

            setStars(
                Array.from({ length: count }, (_, id) => ({
                    id,
                    size: Math.random() * 2 + 1,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    opacity: Math.random() * 0.5 + 0.3,
                    duration: Math.random() * 4 + 2,
                    delay: Math.random() * 4,
                })),
            )

            setMeteors(
                Array.from({ length: 4 }, (_, id) => ({
                    id,
                    size: Math.random() * 2 + 1,
                    x: Math.random() * 100,
                    y: Math.random() * 30,
                    delay: Math.random() * 12,
                    duration: Math.random() * 3 + 3,
                })),
            )
        }

        generate()

        let timeout
        const handleResize = () => {
            clearTimeout(timeout)
            timeout = setTimeout(generate, 250)
        }

        window.addEventListener('resize', handleResize)
        return () => {
            clearTimeout(timeout)
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div aria-hidden='true' className='pointer-events-none fixed inset-0 -z-10 overflow-hidden'>
            {/* Aurora wash */}
            <div
                className='aurora-blob animate-aurora -top-40 -left-32 size-[38rem] bg-primary/25 dark:bg-primary/20'
                style={{ animationDelay: '0s' }}
            />
            <div
                className='aurora-blob animate-aurora top-1/3 -right-40 size-[34rem] bg-accent/20 dark:bg-accent/15'
                style={{ animationDelay: '-6s' }}
            />
            <div
                className='aurora-blob animate-aurora bottom-0 left-1/4 size-[30rem] bg-primary/15 dark:bg-primary/12'
                style={{ animationDelay: '-12s' }}
            />

            {/* Technical grid */}
            <div className='grid-lines absolute inset-0' />

            {/* Starfield — dark theme only */}
            <div className='absolute inset-0 opacity-0 transition-opacity duration-700 dark:opacity-100'>
                {stars.map(star => (
                    <div
                        key={star.id}
                        className='star animate-pulse-subtle'
                        style={{
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            left: `${star.x}%`,
                            top: `${star.y}%`,
                            opacity: star.opacity,
                            animationDuration: `${star.duration}s`,
                            animationDelay: `${star.delay}s`,
                        }}
                    />
                ))}

                {meteors.map(meteor => (
                    <div
                        key={meteor.id}
                        className='meteor animate-meteor'
                        style={{
                            width: `${meteor.size}px`,
                            height: `${meteor.size * 22}px`,
                            left: `${meteor.x}%`,
                            top: `${meteor.y}%`,
                            animationDuration: `${meteor.duration}s`,
                            animationDelay: `${meteor.delay}s`,
                        }}
                    />
                ))}
            </div>

            {/* Bottom fade so sections settle onto a clean surface */}
            <div className='absolute inset-x-0 bottom-0 h-64 bg-linear-to-t from-background to-transparent' />
        </div>
    )
}

export default StarBackground
