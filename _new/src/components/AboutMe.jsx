import { Briefcase, Code, Cog, TabletSmartphone, User } from 'lucide-react'

const AboutMe = () => {
    return (
        <section id='about' className='py-24 px-4 relative'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                    About <span className='text-primary'>Me</span>
                </h2>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                    <div className='space-y-6'>
                        <h3 className='text-2xl font-semibold'>Passionate Full-Stack Developer</h3>
                        <p className='text-muted-foreground'>
                            With 7 years of experience, I specialize in building web, mobile, and
                            desktop applications that are not only functional but also user-friendly
                            and visually appealing. My expertise spans a variety of technologies,
                            including JavaScript, React, Node.js, Python, and more. I thrive on
                            turning complex problems into simple, beautiful solutions.
                        </p>

                        <p className='text-muted-foreground'>
                            I’ve worked with different technologies over the years, but what excites
                            me most is learning, solving problems, and seeing ideas come to life
                            through code. When I’m not coding, I’m usually exploring new tech or
                            finding better ways to make my work cleaner and more efficient.
                        </p>

                        <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
                            <a href='#contact' className='cosmic-button'>
                                Get In Touch
                            </a>{' '}
                            <a
                                href='#contact'
                                className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300'
                            >
                                Download CV
                            </a>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 gap-6'>
                        <div className='gradient-border p-6 card-hover'>
                            <div className='flex items-start gap-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Code className='h-6 w-6 text-primary' />
                                </div>
                                <div className='text-left'>
                                    <h4 className='font-semibold'>Web Development</h4>
                                    <p className='text-muted-foreground'>
                                        Building responsive and accessible web applications with
                                        modern frameworks.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='gradient-border p-6 card-hover'>
                            <div className='flex items-start gap-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <TabletSmartphone className='h-6 w-6 text-primary' />
                                </div>
                                <div className='text-left'>
                                    <h4 className='font-semibold'>Mobile Development</h4>
                                    <p className='text-muted-foreground'>
                                        Creating seamless mobile experiences for both iOS and
                                        Android platforms.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='gradient-border p-6 card-hover'>
                            <div className='flex items-start gap-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Cog className='h-6 w-6 text-primary' />
                                </div>
                                <div className='text-left'>
                                    <h4 className='font-semibold'>Robotic Process Automation</h4>
                                    <p className='text-muted-foreground'>
                                        Automating repetitive tasks and business processes using
                                        modern RPA tools.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe
