import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink, Maximize2, X } from 'lucide-react'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

const certifications = [
    {
        title: 'UiPath Certified Advanced RPA Developer v1.0 (UiARD)',
        image: '/certs/uipath.jpg',
    },
    {
        title: 'Systems Plus College Foundation: Best Thesis',
        image: '/certs/thesis.jpg',
    },
    {
        title: 'SWEEPx: Game Development Using Unity3D',
        image: '/certs/psite-unity.jpg',
    },
    {
        title: 'Udemy: Complete guide to building an app with .Net Core and React',
        image: '/certs/udemy-netcore.jpg',
    },
    {
        title: 'Udemy: Angular and Laravel A Practical Guide with Docker',
        image: '/certs/udemy-angular.jpg',
    },
]

const Certifications = () => {
    const [active, setActive] = useState(null)

    const close = useCallback(() => setActive(null), [])

    useEffect(() => {
        if (!active) return

        const onKeyDown = event => {
            if (event.key === 'Escape') close()
        }

        document.addEventListener('keydown', onKeyDown)
        document.body.style.overflow = 'hidden'

        return () => {
            document.removeEventListener('keydown', onKeyDown)
            document.body.style.overflow = ''
        }
    }, [active, close])

    return (
        <section id='certifications' className='relative scroll-mt-24 py-24 md:py-32'>
            <div className='container'>
                <SectionHeading
                    eyebrow='Credentials'
                    title='My'
                    highlight='Certifications'
                    description='A few of my professional certifications'
                />

                <div className='mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                    {certifications.map((cert, index) => (
                        <Reveal key={cert.image} delay={Math.min(index, 3) * 0.08}>
                            <button
                                type='button'
                                onClick={() => setActive(cert)}
                                className='surface surface-hover group flex h-full w-full cursor-pointer flex-col overflow-hidden text-left'
                            >
                                <div className='relative aspect-4/3 overflow-hidden bg-foreground/5'>
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        loading='lazy'
                                        className='size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105'
                                    />
                                    <div className='absolute inset-0 grid place-items-center bg-background/70 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100'>
                                        <span className='flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-lg'>
                                            <Maximize2 className='size-4' />
                                            View
                                        </span>
                                    </div>
                                </div>

                                <h3 className='grow p-5 font-display text-base leading-snug font-semibold text-pretty transition-colors duration-300 group-hover:text-primary'>
                                    {cert.title}
                                </h3>
                            </button>
                        </Reveal>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {active && (
                    <motion.div
                        role='dialog'
                        aria-modal='true'
                        aria-label={active.title}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={close}
                        className='fixed inset-0 z-100 flex items-center justify-center bg-background/90 p-4 backdrop-blur-md sm:p-8'
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 16 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 16 }}
                            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                            onClick={event => event.stopPropagation()}
                            className='surface flex max-h-full w-full max-w-3xl flex-col overflow-hidden'
                        >
                            <div className='flex items-start gap-4 border-b border-border p-4'>
                                <h3 className='grow text-left font-display text-base font-semibold text-pretty'>
                                    {active.title}
                                </h3>
                                <a
                                    href={active.image}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    aria-label='Open image in a new tab'
                                    className='grid size-9 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary'
                                >
                                    <ExternalLink className='size-4' />
                                </a>
                                <button
                                    type='button'
                                    onClick={close}
                                    aria-label='Close'
                                    className='grid size-9 shrink-0 cursor-pointer place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary'
                                >
                                    <X className='size-4' />
                                </button>
                            </div>

                            <div className='overflow-auto p-4'>
                                <img
                                    src={active.image}
                                    alt={active.title}
                                    className='mx-auto w-full rounded-xl object-contain'
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}

export default Certifications
