import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react'

const roles = [
    'Full-Stack Developer',
    'Web & Mobile Engineer',
    'RPA Developer',
    'Problem Solver',
]

const stats = [
    { value: '8+', label: 'Years experience' },
    { value: '6', label: 'Companies' },
    { value: '20+', label: 'Technologies' },
    { value: '4', label: 'Featured projects' },
]

const socials = [
    {
        icon: Github,
        href: 'https://github.com/matthewmics',
        label: 'GitHub',
    },
    {
        icon: Linkedin,
        href: 'https://www.linkedin.com/in/matthew-miclat-a50835167',
        label: 'LinkedIn',
    },
    { icon: Mail, href: 'mailto:matthewmics77@gmail.com', label: 'Email' },
]

const HeroSection = () => {
    const reduceMotion = useReducedMotion()
    const [roleIndex, setRoleIndex] = useState(0)

    useEffect(() => {
        if (reduceMotion) return
        const interval = setInterval(() => {
            setRoleIndex(prev => (prev + 1) % roles.length)
        }, 2600)
        return () => clearInterval(interval)
    }, [reduceMotion])

    const fadeUp = {
        hidden: { opacity: 0, y: 24 },
        show: i => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
        }),
    }

    return (
        <section
            id='hero'
            className='relative flex min-h-svh items-center overflow-hidden pt-28 pb-20 md:pt-32'
        >
            <div className='container'>
                <div className='grid items-center gap-12 lg:grid-cols-12 lg:gap-8'>
                    {/* ---- Copy ---- */}
                    <div className='flex flex-col items-center text-center lg:col-span-7 lg:items-start lg:text-left'>
                        <motion.span
                            custom={0}
                            variants={fadeUp}
                            initial='hidden'
                            animate='show'
                            className='eyebrow'
                        >
                            <span className='relative flex size-2'>
                                <span className='absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75' />
                                <span className='relative inline-flex size-2 rounded-full bg-emerald-500' />
                            </span>
                            Available for opportunities
                        </motion.span>

                        <motion.h1
                            custom={1}
                            variants={fadeUp}
                            initial='hidden'
                            animate='show'
                            className='mt-6 text-4xl leading-[1.05] font-bold text-balance sm:text-6xl lg:text-7xl'
                        >
                            <span className='block'>Hi, I&rsquo;m Matthew</span>
                            <span className='text-gradient block'>Miclat</span>
                        </motion.h1>

                        {/* Rotating role */}
                        <motion.div
                            custom={2}
                            variants={fadeUp}
                            initial='hidden'
                            animate='show'
                            className='mt-5 flex h-8 items-center gap-2 font-mono text-base text-muted-foreground sm:text-lg'
                        >
                            <span className='text-primary'>&gt;</span>
                            <span className='relative inline-block'>
                                <AnimatePresence mode='wait'>
                                    <motion.span
                                        key={roleIndex}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.28 }}
                                        className='inline-block whitespace-nowrap'
                                    >
                                        {roles[roleIndex]}
                                    </motion.span>
                                </AnimatePresence>
                            </span>
                            <span className='animate-caret inline-block h-5 w-[2px] bg-primary' />
                        </motion.div>

                        <motion.p
                            custom={3}
                            variants={fadeUp}
                            initial='hidden'
                            animate='show'
                            className='mt-6 max-w-2xl text-base text-pretty text-muted-foreground sm:text-lg'
                        >
                            👋 Hi, I&rsquo;m a software developer with about 8 years of experience
                            creating apps for the web, mobile, and desktop. I love building things
                            that people actually use, whether it&rsquo;s a simple tool that makes
                            someone&rsquo;s day easier or a full product that helps a business grow.
                        </motion.p>

                        <motion.div
                            custom={4}
                            variants={fadeUp}
                            initial='hidden'
                            animate='show'
                            className='mt-9 flex flex-col gap-3 sm:flex-row'
                        >
                            <a href='#projects' className='cosmic-button group'>
                                View My Work
                                <ArrowRight className='size-4 transition-transform duration-300 group-hover:translate-x-1' />
                            </a>
                            <a
                                href='/myresume.pdf'
                                download='Matthew-Miclat-CV.pdf'
                                className='ghost-button group'
                            >
                                <Download className='size-4 transition-transform duration-300 group-hover:translate-y-0.5' />
                                Download CV
                            </a>
                        </motion.div>

                        <motion.div
                            custom={5}
                            variants={fadeUp}
                            initial='hidden'
                            animate='show'
                            className='mt-8 flex items-center gap-3'
                        >
                            {socials.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target={href.startsWith('http') ? '_blank' : undefined}
                                    rel='noreferrer'
                                    aria-label={label}
                                    className='grid size-10 place-items-center rounded-full border border-border bg-card/50 text-muted-foreground backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:text-primary'
                                >
                                    <Icon className='size-[18px]' />
                                </a>
                            ))}
                        </motion.div>
                    </div>

                    {/* ---- Code card ---- */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.94, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className='lg:col-span-5'
                    >
                        <div className='relative mx-auto max-w-md lg:max-w-none'>
                            {/* Glow behind the card */}
                            <div className='absolute -inset-4 rounded-[2rem] bg-linear-to-tr from-primary/25 via-transparent to-accent/25 blur-2xl' />

                            <div className='surface relative overflow-hidden rounded-2xl'>
                                {/* Window chrome */}
                                <div className='flex items-center gap-2 border-b border-border bg-background/40 px-4 py-3'>
                                    <span className='size-3 rounded-full bg-red-400/80' />
                                    <span className='size-3 rounded-full bg-amber-400/80' />
                                    <span className='size-3 rounded-full bg-emerald-400/80' />
                                    <span className='ml-2 font-mono text-xs text-muted-foreground'>
                                        matthew.ts
                                    </span>
                                </div>

                                <pre className='overflow-x-auto p-5 text-left font-mono text-[13px] leading-relaxed'>
                                    <code>
                                        <span className='text-muted-foreground'>const</span>{' '}
                                        <span className='text-accent'>matthew</span>
                                        <span className='text-muted-foreground'>
                                            {' '}
                                            = {'{'}
                                        </span>
                                        {'\n'}
                                        {'  '}
                                        <span className='text-primary'>role</span>
                                        <span className='text-muted-foreground'>: </span>
                                        <span className='text-emerald-500 dark:text-emerald-400'>
                                            &apos;Senior Software Engineer&apos;
                                        </span>
                                        <span className='text-muted-foreground'>,</span>
                                        {'\n'}
                                        {'  '}
                                        <span className='text-primary'>based</span>
                                        <span className='text-muted-foreground'>: </span>
                                        <span className='text-emerald-500 dark:text-emerald-400'>
                                            &apos;Pampanga, Philippines&apos;
                                        </span>
                                        <span className='text-muted-foreground'>,</span>
                                        {'\n'}
                                        {'  '}
                                        <span className='text-primary'>stack</span>
                                        <span className='text-muted-foreground'>: [</span>
                                        <span className='text-emerald-500 dark:text-emerald-400'>
                                            &apos;React&apos;
                                        </span>
                                        <span className='text-muted-foreground'>, </span>
                                        <span className='text-emerald-500 dark:text-emerald-400'>
                                            &apos;Angular&apos;
                                        </span>
                                        <span className='text-muted-foreground'>,</span>
                                        {'\n'}
                                        {'           '}
                                        <span className='text-emerald-500 dark:text-emerald-400'>
                                            &apos;NestJS&apos;
                                        </span>
                                        <span className='text-muted-foreground'>, </span>
                                        <span className='text-emerald-500 dark:text-emerald-400'>
                                            &apos;.NET&apos;
                                        </span>
                                        <span className='text-muted-foreground'>, </span>
                                        <span className='text-emerald-500 dark:text-emerald-400'>
                                            &apos;Laravel&apos;
                                        </span>
                                        <span className='text-muted-foreground'>, </span>
                                        <span className='text-emerald-500 dark:text-emerald-400'>
                                            &apos;Docker&apos;
                                        </span>
                                        <span className='text-muted-foreground'>],</span>
                                        {'\n'}
                                        {'  '}
                                        <span className='text-primary'>focus</span>
                                        <span className='text-muted-foreground'>: [</span>
                                        <span className='text-emerald-500 dark:text-emerald-400'>
                                            &apos;web&apos;
                                        </span>
                                        <span className='text-muted-foreground'>, </span>
                                        <span className='text-emerald-500 dark:text-emerald-400'>
                                            &apos;mobile&apos;
                                        </span>
                                        <span className='text-muted-foreground'>, </span>
                                        <span className='text-emerald-500 dark:text-emerald-400'>
                                            &apos;RPA&apos;
                                        </span>
                                        <span className='text-muted-foreground'>, </span>
                                        <span className='text-emerald-500 dark:text-emerald-400'>
                                            &apos;DevOps&apos;
                                        </span>
                                        <span className='text-muted-foreground'>],</span>
                                        {'\n'}
                                        {'  '}
                                        <span className='text-primary'>openToWork</span>
                                        <span className='text-muted-foreground'>: </span>
                                        <span className='text-amber-500 dark:text-amber-400'>
                                            true
                                        </span>
                                        <span className='text-muted-foreground'>,</span>
                                        {'\n'}
                                        <span className='text-muted-foreground'>{'}'}</span>
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* ---- Stats strip ---- */}
                <motion.dl
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className='mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border/60 sm:grid-cols-4'
                >
                    {stats.map(stat => (
                        <div
                            key={stat.label}
                            className='flex flex-col items-center gap-1 bg-card/60 px-4 py-6 backdrop-blur-sm transition-colors duration-300 hover:bg-primary/5'
                        >
                            <dt className='sr-only'>{stat.label}</dt>
                            <dd className='font-display text-3xl font-bold text-gradient'>
                                {stat.value}
                            </dd>
                            <span className='text-xs tracking-wide text-muted-foreground'>
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </motion.dl>
            </div>

            {/* Scroll cue */}
            <a
                href='#about'
                aria-label='Scroll to about section'
                className='absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-muted-foreground transition-colors hover:text-primary lg:flex'
            >
                <span className='font-mono text-[10px] tracking-[0.2em] uppercase'>Scroll</span>
                <ArrowDown className='size-4 animate-bounce' />
            </a>
        </section>
    )
}

export default HeroSection
