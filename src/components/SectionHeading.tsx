import { motion } from 'framer-motion'

interface SectionHeadingProps {
  id: string
  label: string
  title: string
  description?: string
}

export function SectionHeading({ id, label, title, description }: SectionHeadingProps) {
  return (
    <motion.header
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="mb-12 scroll-mt-28"
    >
      <p className="mb-2 font-display text-sm font-semibold uppercase tracking-widest text-accent">
        {label}
      </p>
      <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-muted">{description}</p>
      )}
    </motion.header>
  )
}
