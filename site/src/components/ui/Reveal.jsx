import { motion, useReducedMotion } from 'framer-motion'

/**
 * Scroll-triggered reveal. Fades + lifts its children into place once,
 * the first time they enter the viewport. Falls back to a plain wrapper
 * when the user prefers reduced motion.
 */
const Reveal = ({ children, delay = 0, y = 24, className, as = 'div', ...rest }) => {
    const reduceMotion = useReducedMotion()
    const MotionTag = motion[as] ?? motion.div

    if (reduceMotion) {
        const Tag = as
        return (
            <Tag className={className} {...rest}>
                {children}
            </Tag>
        )
    }

    return (
        <MotionTag
            className={className}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2, margin: '0px 0px -80px 0px' }}
            transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
            {...rest}
        >
            {children}
        </MotionTag>
    )
}

export default Reveal
