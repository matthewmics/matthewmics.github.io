import { cn } from '../../lib/utils'
import Reveal from './Reveal'

/**
 * Shared section header: small mono eyebrow, two-tone title, optional lede.
 * Keeps vertical rhythm identical across every section.
 */
const SectionHeading = ({ eyebrow, title, highlight, description, className }) => {
    return (
        <div className={cn('flex flex-col items-center text-center', className)}>
            {eyebrow && (
                <Reveal>
                    <span className='eyebrow'>
                        <span className='size-1.5 rounded-full bg-primary' />
                        {eyebrow}
                    </span>
                </Reveal>
            )}

            <Reveal delay={0.06}>
                <h2 className='mt-5 text-3xl font-bold sm:text-4xl md:text-5xl'>
                    {title} {highlight && <span className='text-gradient'>{highlight}</span>}
                </h2>
            </Reveal>

            {description && (
                <Reveal delay={0.12}>
                    <p className='mt-4 max-w-2xl text-balance text-base text-muted-foreground'>
                        {description}
                    </p>
                </Reveal>
            )}

            <Reveal delay={0.18}>
                <span className='mt-8 block h-px w-24 bg-linear-to-r from-transparent via-primary to-transparent' />
            </Reveal>
        </div>
    )
}

export default SectionHeading
