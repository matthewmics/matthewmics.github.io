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
        company: 'Connext Global Soluttions',
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
        <section id='work-experience'>
            <div className='container max-w-5xl py-24 relative z-20'>
                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                    Work <span className='text-primary'>Experience</span>
                </h2>

                <p className='text-center mb-12 max-w-2xl mx-auto'>
                    A summary of my professional work experience
                </p>

                <div className='flex flex-col gap-8'>
                    {experiences.map((experience, index) => (
                        <div key={index} className='bg-card/90 p-6 rounded-lg shadow-xs card-hover'>
                            <p className='text-sm text-muted text-start mb-4'>
                                {experience.duration}
                            </p>
                            <h3 className='text-2xl font-medium text-start'>{experience.role}</h3>
                            <p className='text-sm text-start'>
                                {experience.company} | {experience.location}
                            </p>
                            <hr className='my-4' />
                            <p className='text-sm text-muted-foreground'></p>
                            <ul className='list-disc list-inside mt-2'>
                                {experience.descriptions.map((desc, i) => (
                                    <li key={i} className='text-md text-start'>
                                        {desc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WorkExperience
