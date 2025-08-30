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
        githubUrl: ['https://github.com/matthewmics/spcf-inventory-system-api'],
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
        tags: ['Unity', 'C#', 'Multiplayer'],
        githubUrl: 'https://github.com/matthewmics/spikeroll',
    },
]

const Projects = () => {
    return (
        <section id='projects' className='py-24 px-4 relative z-10'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                    Featured <span className='text-primary'>Projects</span>
                </h2>
                <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                    A selection of projects showcasing my skills and experience in web development
                    and software engineering.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {projects.map(project => (
                        <div
                            key={project.id}
                            className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col'
                        >
                            <div className='h-48 overflow-hidden'>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                                />
                            </div>

                            <h3 className='text-xl font-semibold mb-1 mt-6'>{project.title}</h3>
                            <p className='text-sm text-muted-foreground mb-4 grow px-4'>
                                {project.description}
                            </p>

                            <div className='p-2'>
                                <div className='flex flex-wrap gap-2 mb-4'>
                                    {project.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className=' px-2 py-1 text-xs font-medium rounded-full bg-secondary/10 text-secondary'
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className='p-4 pt-0'>
                                <a
                                    href={project.githubUrl}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='hover:underline text-sm font-medium flex items-center gap-2 justify-start'
                                >
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='24'
                                        height='24'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        stroke='currentColor'
                                        stroke-width='2'
                                        stroke-linecap='round'
                                        stroke-linejoin='round'
                                        class='lucide lucide-github-icon lucide-github'
                                    >
                                        <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4' />
                                        <path d='M9 18c-4.51 2-5-2-7-2' />
                                    </svg>
                                    View on GitHub
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
