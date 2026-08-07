import { useState } from 'react'
import { Github, Linkedin, Loader2, Mail, MapPin, Phone, Send } from 'lucide-react'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

const contactDetails = [
    {
        icon: Mail,
        label: 'Email',
        value: 'matthewmics77@gmail.com',
        href: 'mailto:matthewmics77@gmail.com',
    },
    {
        icon: Phone,
        label: 'Phone',
        value: '+63 939 791 3333',
        href: 'tel:+639397913333',
    },
    {
        icon: MapPin,
        label: 'Location',
        value: 'Pampanga, Philippines',
        href: 'https://www.google.com/maps/place/Pampanga,+Philippines',
    },
]

const socials = [
    {
        icon: Linkedin,
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/matthew-miclat-a50835167',
    },
    { icon: Github, label: 'GitHub', href: 'https://github.com/matthewmics' },
]

const inputClasses =
    'w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm placeholder:text-muted-foreground/70 ' +
    'transition-colors duration-200 outline-none focus:border-primary focus:bg-background'

const ContactSection = () => {
    const [isSending, setIsSending] = useState(false)
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })

    const handleSubmit = e => {
        e.preventDefault()

        setIsSending(true)

        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    user_name: formData.name,
                    user_email: formData.email,
                    message: formData.message,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            )
            .then(
                () => {
                    toast.success('Message sent successfully!')
                },
                error => {
                    console.error(error)
                    toast.error('Failed to send message')
                },
            )
            .finally(() => {
                setIsSending(false)
                setFormData({ name: '', email: '', message: '' })
            })
    }

    const handleInputChange = e => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    return (
        <section id='contact' className='relative scroll-mt-24 py-24 md:py-32'>
            <div className='container'>
                <SectionHeading
                    eyebrow='Contact'
                    title='Get In'
                    highlight='Touch'
                    description="Feel free to reach out. I'm open to opportunities, collaborations, or just a friendly chat!"
                />

                <div className='mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-5'>
                    {/* Details */}
                    <div className='flex flex-col gap-4 lg:col-span-2'>
                        {contactDetails.map(({ icon: Icon, label, value, href }, index) => (
                            <Reveal key={label} delay={index * 0.08}>
                                <a
                                    href={href}
                                    target={href.startsWith('http') ? '_blank' : undefined}
                                    rel='noreferrer'
                                    className='surface surface-hover group flex items-center gap-4 p-5 text-left'
                                >
                                    <span className='grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground'>
                                        <Icon className='size-5' />
                                    </span>
                                    <span className='min-w-0'>
                                        <span className='block font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase'>
                                            {label}
                                        </span>
                                        <span className='block truncate text-sm font-medium transition-colors duration-300 group-hover:text-primary'>
                                            {value}
                                        </span>
                                    </span>
                                </a>
                            </Reveal>
                        ))}

                        <Reveal delay={0.24}>
                            <div className='surface p-5 text-left'>
                                <h4 className='font-display text-sm font-semibold'>
                                    Connect With Me
                                </h4>
                                <div className='mt-4 flex gap-3'>
                                    {socials.map(({ icon: Icon, label, href }) => (
                                        <a
                                            key={label}
                                            href={href}
                                            target='_blank'
                                            rel='noreferrer'
                                            aria-label={label}
                                            className='grid size-10 place-items-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:text-primary'
                                        >
                                            <Icon className='size-[18px]' />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    {/* Form */}
                    <Reveal delay={0.12} className='lg:col-span-3'>
                        <div className='surface h-full p-6 text-left sm:p-8'>
                            <h3 className='font-display text-xl font-semibold sm:text-2xl'>
                                Send a Message
                            </h3>

                            <form onSubmit={handleSubmit} className='mt-6 flex flex-col gap-5'>
                                <div>
                                    <label
                                        htmlFor='name'
                                        className='mb-2 block text-sm font-medium'
                                    >
                                        Your Name
                                    </label>
                                    <input
                                        type='text'
                                        id='name'
                                        name='name'
                                        placeholder='Your Name'
                                        required
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className={inputClasses}
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor='email'
                                        className='mb-2 block text-sm font-medium'
                                    >
                                        Your Email
                                    </label>
                                    <input
                                        type='email'
                                        id='email'
                                        name='email'
                                        placeholder='Your Email'
                                        required
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={inputClasses}
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor='message'
                                        className='mb-2 block text-sm font-medium'
                                    >
                                        Your Message
                                    </label>
                                    <textarea
                                        id='message'
                                        name='message'
                                        rows='5'
                                        placeholder='Your Message'
                                        required
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className={`${inputClasses} resize-none`}
                                    />
                                </div>

                                <button
                                    type='submit'
                                    disabled={isSending}
                                    className='cosmic-button group w-full'
                                >
                                    {isSending ? (
                                        <>
                                            Sending...
                                            <Loader2 className='size-4 animate-spin' />
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send className='size-4 transition-transform duration-300 group-hover:translate-x-1' />
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}

export default ContactSection
