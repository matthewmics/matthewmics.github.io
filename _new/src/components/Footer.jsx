import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react'

const footerLinks = [
    { name: 'About', href: '#about' },
    { name: 'Work Experience', href: '#work-experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
]

const socials = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/matthewmics' },
    {
        icon: Linkedin,
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/matthew-miclat-a50835167',
    },
    { icon: Mail, label: 'Email', href: 'mailto:matthewmics77@gmail.com' },
]

const Footer = () => {
    return (
        <footer className='relative border-t border-border bg-card/40 backdrop-blur-sm'>
            <div className='container py-14'>
                <div className='flex flex-col gap-10 md:flex-row md:items-start md:justify-between'>
                    {/* Identity */}
                    <div className='max-w-sm text-center md:text-left'>
                        <a href='#hero' className='group inline-flex items-center gap-2.5'>
                            <span className='grid size-9 place-items-center rounded-xl bg-linear-to-br from-primary to-accent font-display text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-transform duration-300 group-hover:scale-110'>
                                MM
                            </span>
                            <span className='font-display text-base font-semibold tracking-tight'>
                                Matthew<span className='text-muted-foreground'>.dev</span>
                            </span>
                        </a>
                        <p className='mt-4 text-sm text-pretty text-muted-foreground'>
                            Full-stack developer building web, mobile, and automation software.
                            Always up for an interesting problem.
                        </p>
                    </div>

                    {/* Links */}
                    <nav aria-label='Footer' className='text-center md:text-left'>
                        <h2 className='font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase'>
                            Navigate
                        </h2>
                        <ul className='mt-4 grid grid-cols-2 gap-x-8 gap-y-2 text-sm'>
                            {footerLinks.map(link => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className='text-muted-foreground transition-colors hover:text-primary'
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Socials */}
                    <div className='text-center md:text-left'>
                        <h2 className='font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase'>
                            Elsewhere
                        </h2>
                        <div className='mt-4 flex justify-center gap-3 md:justify-start'>
                            {socials.map(({ icon: Icon, label, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target={href.startsWith('http') ? '_blank' : undefined}
                                    rel='noreferrer'
                                    aria-label={label}
                                    className='grid size-10 place-items-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:text-primary'
                                >
                                    <Icon className='size-[18px]' />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='mt-12 flex flex-col items-center gap-4 border-t border-border pt-6 sm:flex-row sm:justify-between'>
                    <p className='text-sm text-muted-foreground'>
                        &copy; {new Date().getFullYear()} Matthew Miclat. All rights reserved.
                    </p>

                    <a
                        href='#hero'
                        className='inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary'
                    >
                        Back to top
                        <ArrowUp className='size-4' />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
