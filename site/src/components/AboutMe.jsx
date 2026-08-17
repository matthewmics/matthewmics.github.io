import { ArrowRight, Code, Cog, Container, Download, TabletSmartphone } from 'lucide-react'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

const focusAreas = [
    {
        icon: Code,
        title: 'Web Development',
        description:
            'Building responsive and accessible web applications with modern frameworks.',
    },
    {
        icon: Container,
        title: 'DevOps',
        description:
            'Setting up CI/CD pipelines and configuring Docker on servers, deployed on AWS and DigitalOcean using GitHub Container Registry.',
    },
    {
        icon: TabletSmartphone,
        title: 'Mobile Development',
        description: 'Creating seamless mobile experiences for both iOS and Android platforms.',
    },
    {
        icon: Cog,
        title: 'Robotic Process Automation',
        description: 'Automating repetitive tasks and business processes using modern RPA tools.',
    },
]

const AboutMe = () => {
    return (
        <section id='about' className='relative scroll-mt-24 py-24 md:py-32'>
            <div className='container'>
                <SectionHeading eyebrow='About' title='About' highlight='Me' />

                <div className='mt-16 grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16'>
                    {/* Narrative */}
                    <div className='text-left'>
                        <Reveal>
                            <h3 className='text-2xl font-semibold sm:text-3xl'>
                                Passionate Full-Stack Developer
                            </h3>
                        </Reveal>

                        <Reveal delay={0.08}>
                            <p className='mt-6 text-pretty text-muted-foreground'>
                                With 8 years of experience, I specialize in building web, mobile,
                                and robotic process automation (RPA) applications that are not only
                                functional but also user-friendly and visually appealing. My
                                expertise spans a variety of technologies, including JavaScript,
                                React, Node.js, C#, and more, along with the DevOps side: CI/CD
                                pipelines and Docker deployments on AWS and DigitalOcean. I thrive
                                on turning complex problems into simple, beautiful solutions.
                            </p>
                        </Reveal>

                        <Reveal delay={0.14}>
                            <p className='mt-4 text-pretty text-muted-foreground'>
                                I&rsquo;ve worked with different technologies over the years, but
                                what excites me most is learning, solving problems, and seeing ideas
                                come to life through code. When I&rsquo;m not coding, I&rsquo;m
                                usually exploring new tech or finding better ways to make my work
                                cleaner and more efficient.
                            </p>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
                                <a href='#contact' className='cosmic-button group'>
                                    Get In Touch
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
                            </div>
                        </Reveal>
                    </div>

                    {/* Focus areas */}
                    <div className='flex flex-col gap-4'>
                        {focusAreas.map((area, index) => (
                            <Reveal key={area.title} delay={index * 0.1}>
                                <article className='surface surface-hover group flex gap-4 p-6 text-left'>
                                    <span className='grid size-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground'>
                                        <area.icon className='size-6' />
                                    </span>
                                    <div>
                                        <h4 className='font-display text-lg font-semibold'>
                                            {area.title}
                                        </h4>
                                        <p className='mt-1 text-sm text-pretty text-muted-foreground'>
                                            {area.description}
                                        </p>
                                    </div>
                                </article>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe
