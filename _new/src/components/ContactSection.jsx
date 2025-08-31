import { Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react'
import { cn } from '../lib/utils'

const ContactSection = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <section id='contact' className='py-24 px-4 relative z-10'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                    Get In<span className='text-primary'> Touch</span>
                </h2>

                <p className='text-center mb-12 max-w-2xl mx-auto'>
                    Feel free to reach out. I'm open to opportunities, collaborations, or just a
                    friendly chat!
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                    <div className='space-y-8'>
                        <h3 className='text-2xl font-semibold mb-6'>Contact Information</h3>

                        <div className='space-y-6 justify-center flex flex-col items-center'>
                            <div className='flex items-center space-x-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Mail className='w-6 h-6 text-primary' />
                                </div>
                                <div>
                                    <a
                                        href='mailto:matthewmics77@gmail.com'
                                        className='hover:text-primary transition-colors'
                                    >
                                        matthewmics77@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className='flex items-center space-x-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Phone className='w-6 h-6 text-primary' />
                                </div>
                                <div>
                                    <a
                                        href='tel:+639397913333'
                                        className='hover:text-primary transition-colors'
                                    >
                                        +63 939 791 3333
                                    </a>
                                </div>
                            </div>
                            <div className='flex items-center space-x-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <MapPin className='w-6 h-6 text-primary' />
                                </div>
                                <div>
                                    <a
                                        href='https://www.google.com/maps/place/Pampanga,+Philippines'
                                        className='hover:text-primary transition-colors'
                                    >
                                        Pampanga, Philippines
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className='pt-8'>
                            <h4 className='font-medium mb-4'>Connect With Me</h4>
                            <div className='flex space-x-4 justify-center'>
                                <a
                                    href='https://www.linkedin.com/in/matthew-miclat-a50835167'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <Linkedin />
                                </a>
                                <a
                                    href='https://github.com/matthewmics'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <Github />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='bg-card p-8 rounded-lg shadow-xs'>
                        <h3 className='text-2xl font-semibold mb-6'>Send a Message</h3>
                        <form className='space-y-6'>
                            <div>
                                <label htmlFor='name' className='block text-sm font-medium mb-2'>
                                    Your Name
                                </label>
                                <input
                                    type='text'
                                    id='name'
                                    name='name'
                                    placeholder='Your Name'
                                    required
                                    className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-0'
                                />
                            </div>

                            <div>
                                <label htmlFor='email' className='block text-sm font-medium mb-2'>
                                    Your Email
                                </label>
                                <input
                                    type='email'
                                    id='email'
                                    name='email'
                                    placeholder='Your Email'
                                    required
                                    className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden  focus:ring-primary focus:ring-0'
                                />
                            </div>

                            <div>
                                <label htmlFor='message' className='block text-sm font-medium mb-2'>
                                    Your Message
                                </label>
                                <textarea
                                    id='message'
                                    name='message'
                                    placeholder='Your Message'
                                    required
                                    className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-0 resize-none'
                                />
                            </div>

                            <button
                                type='submit'
                                className={cn(
                                    'cosmic-button w-full flex items-center justify-center gap-2',
                                )}
                            >
                                Send Message
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection
