import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '../lib/utils'
import SectionHeading from './ui/SectionHeading'

const skills = [
    //frontend
    { name: 'HTML/CSS', level: 95, category: 'frontend' },
    { name: 'JavaScript', level: 90, category: 'frontend' },
    { name: 'TypeScript', level: 85, category: 'frontend' },
    { name: 'React', level: 85, category: 'frontend' },
    { name: 'Angular', level: 85, category: 'frontend' },
    { name: 'Vue.js', level: 75, category: 'frontend' },
    { name: 'Tailwind CSS', level: 80, category: 'frontend' },
    { name: 'JQuery', level: 70, category: 'frontend' },

    //backend
    { name: 'NestJS', level: 85, category: 'backend' },
    { name: '.NET Core', level: 80, category: 'backend' },
    { name: 'Laravel', level: 75, category: 'backend' },
    { name: 'Java', level: 70, category: 'backend' },
    { name: 'SQL', level: 80, category: 'backend' },

    //mobile
    { name: 'React Native', level: 75, category: 'mobile' },
    { name: 'Xamarin', level: 70, category: 'mobile' },

    //automation
    { name: 'UiPath', level: 70, category: 'automation' },
    { name: 'Cypress', level: 75, category: 'automation' },
    { name: 'Selenium WebDriver', level: 65, category: 'automation' },

    //tools
    { name: 'Git/GitHub', level: 85, category: 'tools' },
    { name: 'Docker', level: 70, category: 'tools' },
    { name: 'AWS', level: 60, category: 'tools' },
    { name: 'CPanel', level: 65, category: 'tools' },
    { name: 'VS Code', level: 80, category: 'tools' },
    { name: 'Postman', level: 75, category: 'tools' },
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
    const [activeCategory, setActiveCategory] = useState('all')

    const visibleSkills = skills.filter(
        skill => activeCategory === 'all' || skill.category === activeCategory,
    )

    return (
        <section id='skills' className='relative scroll-mt-24 py-24 md:py-32'>
            <div className='container'>
                <SectionHeading
                    eyebrow='Toolbox'
                    title='My'
                    highlight='Skills'
                    description='The languages, frameworks, and tools I reach for most often.'
                />

                {/* Category filter */}
                <div className='mt-12 flex flex-wrap justify-center gap-2'>
                    {categories.map(category => {
                        const isActive = activeCategory === category.id
                        return (
                            <button
                                key={category.id}
                                type='button'
                                onClick={() => setActiveCategory(category.id)}
                                aria-pressed={isActive}
                                className={cn(
                                    'relative cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200',
                                    isActive
                                        ? 'border-transparent text-primary-foreground'
                                        : 'border-border bg-card/50 text-muted-foreground backdrop-blur-sm hover:border-primary/40 hover:text-foreground',
                                )}
                            >
                                {isActive && (
                                    <motion.span
                                        layoutId='skill-filter-pill'
                                        className='absolute inset-0 -z-10 rounded-full bg-primary'
                                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                                    />
                                )}
                                {category.name}
                            </button>
                        )
                    })}
                </div>

                {/* Skill grid */}
                <motion.div
                    layout
                    className='mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'
                >
                    <AnimatePresence mode='popLayout'>
                        {visibleSkills.map(skill => (
                            <motion.article
                                key={skill.name}
                                layout
                                initial={{ opacity: 0, scale: 0.92 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.92 }}
                                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                                className='surface surface-hover group p-5 text-left'
                            >
                                <div className='flex items-baseline justify-between gap-3'>
                                    <h3 className='font-display text-base font-semibold'>
                                        {skill.name}
                                    </h3>
                                    <span className='font-mono text-xs text-muted-foreground transition-colors duration-300 group-hover:text-primary'>
                                        {skill.level}%
                                    </span>
                                </div>

                                <div className='mt-4 h-1.5 w-full overflow-hidden rounded-full bg-foreground/10'>
                                    <motion.div
                                        className='h-full rounded-full bg-linear-to-r from-primary to-accent'
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        viewport={{ once: true, amount: 0.6 }}
                                        transition={{
                                            duration: 1,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                    />
                                </div>
                            </motion.article>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    )
}

export default SkillsSection
