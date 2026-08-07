import { ArrowUpRight, Github } from 'lucide-react'
import { cn } from '../lib/utils'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

const projects = [
    {
        id: 1,
        title: 'Attendance Face Recognition System',
        description: 'A face recognition system for tracking attendance.',
        image: '/projects/facerecog.png',
        tags: ['React', 'Python', 'Laravel', 'PostgreSQL'],
        githubUrl: 'https://github.com/matthewmics/attendance-management-face-recognition',
    },
    {
        id: 2,
        title: 'School Inventory System',
        description: 'A web application to manage school inventory.',
        image: '/projects/inventory-main.png',
        tags: ['React', 'Laravel', 'PostgreSQL', 'Semantic UI'],
        githubUrl: 'https://github.com/matthewmics/spcf-inventory-system-api',
    },
    {
        id: 3,
        title: 'WagerzLounge',
        description: 'A sports betting web application.',
        image: '/projects/betting.png',
        tags: ['React', '.Net Core', 'Semantic UI', 'SignalR'],
        githubUrl: 'https://github.com/matthewmics/sports-esports-betting-system',
    },
    {
        id: 4,
        title: 'Spike Roll',
        description: 'A multiplayer mobile game built with Unity.',
        image: '/projects/spikeroll.png',
        // Near-square source; centring keeps the gameplay in frame.
        imagePosition: 'object-center',
        tags: ['Unity', 'C#', 'Multiplayer'],
        githubUrl: 'https://github.com/matthewmics/spikeroll',
    },
]

const Projects = () => {
    return (
        <section id='projects' className='relative scroll-mt-24 py-24 md:py-32'>
            <div className='container'>
                <SectionHeading
                    eyebrow='Portfolio'
                    title='Featured'
                    highlight='Projects'
                    description='A selection of projects showcasing my skills and experience in web development and software engineering.'
                />

                <div className='mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                    {projects.map((project, index) => (
                        <Reveal key={project.id} delay={Math.min(index, 3) * 0.08}>
                            <article className='surface surface-hover group flex h-full flex-col overflow-hidden text-left'>
                                {/* Preview */}
                                <div className='relative aspect-16/10 overflow-hidden bg-foreground/5'>
                                    <img
                                        src={project.image}
                                        alt={`${project.title} screenshot`}
                                        loading='lazy'
                                        className={cn(
                                            'size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105',
                                            project.imagePosition ?? 'object-top',
                                        )}
                                    />

                                    {/* Hover overlay */}
                                    <div className='absolute inset-0 flex items-end justify-end bg-linear-to-t from-background/90 via-background/20 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                        <a
                                            href={project.githubUrl}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            aria-label={`View ${project.title} on GitHub`}
                                            className='grid size-10 translate-y-2 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform duration-300 group-hover:translate-y-0 hover:scale-110'
                                        >
                                            <ArrowUpRight className='size-5' />
                                        </a>
                                    </div>
                                </div>

                                {/* Body */}
                                <div className='flex grow flex-col p-5'>
                                    <h3 className='font-display text-lg font-semibold transition-colors duration-300 group-hover:text-primary'>
                                        {project.title}
                                    </h3>
                                    <p className='mt-1.5 grow text-sm text-pretty text-muted-foreground'>
                                        {project.description}
                                    </p>

                                    <div className='mt-4 flex flex-wrap gap-1.5'>
                                        {project.tags.map(tag => (
                                            <span key={tag} className='chip'>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <a
                                        href={project.githubUrl}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='mt-5 inline-flex items-center gap-2 border-t border-border pt-4 text-sm font-medium text-muted-foreground transition-colors hover:text-primary'
                                    >
                                        <Github className='size-4' />
                                        View on GitHub
                                    </a>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={0.1} className='mt-12 flex justify-center'>
                    <a
                        href='https://github.com/matthewmics'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='ghost-button group'
                    >
                        <Github className='size-4' />
                        See more on GitHub
                        <ArrowUpRight className='size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5' />
                    </a>
                </Reveal>
            </div>
        </section>
    )
}

export default Projects
