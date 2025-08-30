import React from 'react'
import { cn } from '../lib/utils'

const skills = [
    //frontend
    {
        name: 'HTML/CSS',
        level: 95,
        category: 'frontend',
    },
    {
        name: 'JavaScript',
        level: 90,
        category: 'frontend',
    },
    {
        name: 'TypeScript',
        level: 85,
        category: 'frontend',
    },
    {
        name: 'React',
        level: 85,
        category: 'frontend',
    },
    {
        name: 'Angular',
        level: 85,
        category: 'frontend',
    },
    {
        name: 'Vue.js',
        level: 75,
        category: 'frontend',
    },
    {
        name: 'Tailwind CSS',
        level: 80,
        category: 'frontend',
    },

    //backend
    {
        name: 'NestJS',
        level: 85,
        category: 'backend',
    },
    {
        name: '.NET Core',
        level: 80,
        category: 'backend',
    },
    {
        name: 'Laravel',
        level: 75,
        category: 'backend',
    },
    {
        name: 'SQL',
        level: 80,
        category: 'backend',
    },

    //mobile
    {
        name: 'React Native',
        level: 75,
        category: 'mobile',
    },
    {
        name: 'Xamarin',
        level: 70,
        category: 'mobile',
    },

    //automation
    {
        name: 'UiPath',
        level: 70,
        category: 'automation',
    },
    {
        name: 'Cypress',
        level: 75,
        category: 'automation',
    },

    //tools
    {
        name: 'Git/GitHub',
        level: 85,
        category: 'tools',
    },
    {
        name: 'Docker',
        level: 70,
        category: 'tools',
    },
    {
        name: 'VS Code',
        level: 80,
        category: 'tools',
    },
    {
        name: 'Postman',
        level: 75,
        category: 'tools',
    },
]

const categories = [
    { id: 'all', name: 'All' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'automation', name: 'Automation' },
    { id: 'tools', name: 'Tools' },
]

const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = React.useState('all')

    return (
        <section id='skills' className='py-24 px-4 relative  z-10'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                    My <span className='text-primary'>Skills</span>
                </h2>

                <div className='flex flex-wrap justify-center mb-12 gap-4'>
                    {categories.map(category => (
                        <button
                            key={category.id}
                            className={cn(
                                `px-5 py-2 rounded-full transition-colors capitalize cursor-pointer`,
                                activeCategory === category.id
                                    ? 'bg-primary text-primary-foreground'
                                    : 'bg-secondary/10 text-foreground hover:bg-secondary/90',
                            )}
                            onClick={() => setActiveCategory(category.id)}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {skills
                        .filter(
                            skill => activeCategory === 'all' || skill.category === activeCategory,
                        )
                        .map((skill, index) => (
                            <div
                                key={index}
                                className='bg-card/90 p-6 rounded-lg shadow-xs card-hover'
                            >
                                <div className='text-left mb-4'>
                                    <h3 className='font-semibold text-lg'>{skill.name}</h3>
                                </div>
                                <div className='w-full bg-secondary/50 h-2 rounded-full overflow-hidden'>
                                    <div
                                        className='bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]'
                                        style={{ width: `${skill.level}%` }}
                                    />
                                </div>
                                <div className='text-right mt-1'>
                                    <span className='text-sm text-muted-foreground'>
                                        {skill.level}%
                                    </span>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    )
}

export default SkillsSection
