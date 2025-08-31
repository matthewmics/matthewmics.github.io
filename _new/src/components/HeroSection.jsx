import { ArrowDown } from 'lucide-react'
import React from 'react'

const HeroSection = () => {
    return (
        <section
            id='hero'
            className='relative min-h-screen flex flex-col items-center justify-center px-4 z-10'
        >
            <div className='container max-w-4xl text-center z-10'>
                <div className='space-y-6'>
                    <h1 className='text-4xl md:text-6xl font-bold tracking-tight select-none'>
                        <span className='opacity-0 animate-fade-in'> Hi, I'm</span>
                        <span className='text-primary opacity-0 animate-fade-in-delay-1'>
                            {' '}
                            Matthew
                        </span>
                        <span className='text-gradient ml-2 opacity-0 animate-fade-in-delay-2'>
                            {' '}
                            Miclat
                        </span>
                    </h1>

                    <p className='text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3 select-none'>
                        👋 Hi, I’m a software developer with about 7 years of experience creating
                        apps for the web, mobile, and desktop. I love building things that people
                        actually use—whether it’s a simple tool that makes someone’s day easier or a
                        full product that helps a business grow.
                    </p>

                    <div className='opacity-0 animate-fade-in-delay-4 pt-4'>
                        <a href='#projects' className='cosmic-button'>
                            View My Work
                        </a>
                    </div>
                </div>
            </div>

            <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce'>
                <span className='text-sm text-muted-foreground mb-2'>Scroll</span>
                <ArrowDown className='h-5 w-5 text-primary' />
            </div>
        </section>
    )
}

export default HeroSection
