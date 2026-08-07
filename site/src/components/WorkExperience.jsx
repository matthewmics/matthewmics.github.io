import { Building2, MapPin } from 'lucide-react'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

const experiences = [
    {
        company: 'Pixelhouse',
        role: 'Senior Software Engineer',
        duration: '2025 May - Present',
        location: 'Australia (Remote)',
        descriptions: [
            'Helped maintain and enhance a startup project by supporting both the frontend in Angular and the backend in Laravel. Contributed to fixing bugs, optimizing performance, and adding improvements to ensure the application remained stable and user-friendly.',
        ],
    },
    {
        company: 'Connext Global Solutions',
        role: 'Senior Developer',
        duration: '2023 Aug - 2025 May',
        location: 'Angeles, Philippines',
        descriptions: [
            'Led a startup project and developed a full-stack web application to manage job applications and the hiring process, building the frontend with React and the backend with NestJS. Deployed and maintained the system on AWS using EC2, S3, and Nginx to ensure scalability, reliability, and performance.',
            'Maintained and supported an RPA application built with UiPath.',
        ],
    },
    {
        company: 'Cloudstaff',
        role: 'Senior Software Engineer',
        duration: '2022 June - 2023 Aug',
        location: 'Angeles, Philippines',
        descriptions: [
            'Developed and maintained web applications using Angular, SLIM PHP, Laravel, and React.',
            'Deployed and troubleshot applications across staging and production environments.',
            'Added new features and enhancements to an existing mobile application using React Native.',
        ],
    },
    {
        company: 'Connext Global Solutions',
        role: 'Applications Developer',
        duration: '2021 June - 2022 June',
        location: 'Angeles, Philippines',
        descriptions: [
            'Developed and maintained a web application using Angular and SLIM PHP.',
            'Deployed WordPress applications and static websites to shared hosting environments via cPanel.',
            'Created UiPath automations to streamline healthcare insurance eligibility checks.',
        ],
    },
    {
        company: 'Titus Global Tech',
        role: 'Java Programmer',
        duration: '2021 Feb - 2021 June',
        location: 'Clark, Philippines',
        descriptions: [
            'Developed and maintained a web application using Angular, Groovy, Java, and an in-house framework.',
            'Maintained databases and authored PostgreSQL stored procedures.',
            'Assisted in troubleshooting and debugging existing applications.',
        ],
    },
    {
        company: 'Tigernet Hosting and IT Services',
        role: 'Mobile Developer',
        duration: '2018 May - 2021 Feb',
        location: 'Guagua, Philippines',
        descriptions: [
            'Built a cross-platform mobile application for the company’s Learning Management System using Xamarin.Forms and C#',
            'Integrated third-party services, including PayPal for payments and BigBlueButton for virtual classrooms',
            'Developed and maintained a web application using Laravel and Vue.js',
            'Improved reliability and performance of a web application by integrating Selenium for automated regression testing and JMeter for load testing',
        ],
    },
    // {
    //     company: 'Z Getcare Systems, Inc.',
    //     role: 'Jr. Java Programmer',
    //     duration: '2018 May - 2019 May',
    //     location: 'Clark, Philippines',
    //     descriptions: [
    //         'Worked on developing and maintaining healthcare software solutions using Java and related technologies.',
    //         'Developed and maintained an existing web application using PHP, Java, and the SEAM Framework.',
    //         'Improved reliability and performance of a Java web application by integrating Selenium for automated regression testing and JMeter for load testing',
    //     ],
    // },
]

const WorkExperience = () => {
    return (
        <section id='work-experience' className='relative scroll-mt-24 py-24 md:py-32'>
            <div className='container'>
                <SectionHeading
                    eyebrow='Career'
                    title='Work'
                    highlight='Experience'
                    description='A summary of my professional work experience'
                />

                <div className='relative mx-auto mt-16 max-w-4xl'>
                    {/* Timeline rail */}
                    <span
                        aria-hidden='true'
                        className='absolute top-2 bottom-2 left-[15px] w-px bg-linear-to-b from-primary/60 via-border to-transparent sm:left-[19px]'
                    />

                    <ol className='flex flex-col gap-6'>
                        {experiences.map((experience, index) => {
                            const isCurrent = experience.duration.includes('Present')

                            return (
                                <Reveal
                                    as='li'
                                    key={`${experience.company}-${experience.duration}`}
                                    delay={Math.min(index, 3) * 0.06}
                                    className='relative pl-12 sm:pl-16'
                                >
                                    {/* Node */}
                                    <span className='absolute top-6 left-0 grid size-8 place-items-center rounded-full border border-border bg-card sm:size-10'>
                                        {isCurrent ? (
                                            <span className='relative flex size-2.5'>
                                                <span className='absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75' />
                                                <span className='relative inline-flex size-2.5 rounded-full bg-primary' />
                                            </span>
                                        ) : (
                                            <Building2 className='size-3.5 text-muted-foreground sm:size-4' />
                                        )}
                                    </span>

                                    <article className='surface surface-hover p-6 text-left sm:p-7'>
                                        <div className='flex flex-wrap items-center gap-3'>
                                            <span className='chip font-mono'>
                                                {experience.duration}
                                            </span>
                                            {isCurrent && (
                                                <span className='inline-flex items-center rounded-full bg-emerald-500/10 px-2.5 py-1 font-mono text-[11px] font-medium text-emerald-600 dark:text-emerald-400'>
                                                    Current
                                                </span>
                                            )}
                                        </div>

                                        <h3 className='mt-4 text-xl font-semibold sm:text-2xl'>
                                            {experience.role}
                                        </h3>

                                        <p className='mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground'>
                                            <span className='font-medium text-foreground/90'>
                                                {experience.company}
                                            </span>
                                            <span
                                                aria-hidden='true'
                                                className='hidden opacity-40 sm:inline'
                                            >
                                                •
                                            </span>
                                            <span className='inline-flex items-center gap-1'>
                                                <MapPin className='size-3.5' />
                                                {experience.location}
                                            </span>
                                        </p>

                                        <ul className='mt-5 flex flex-col gap-3 border-t border-border pt-5'>
                                            {experience.descriptions.map((desc, i) => (
                                                <li key={i} className='flex gap-3 text-sm'>
                                                    <span
                                                        aria-hidden='true'
                                                        className='mt-[7px] size-1.5 shrink-0 rounded-full bg-primary/70'
                                                    />
                                                    <span className='text-pretty text-muted-foreground'>
                                                        {desc}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </article>
                                </Reveal>
                            )
                        })}
                    </ol>
                </div>
            </div>
        </section>
    )
}

export default WorkExperience
