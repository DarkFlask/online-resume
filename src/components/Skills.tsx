import { motion } from 'framer-motion'
import { skillGroups } from '../data/resume'
import { SectionHeading } from './SectionHeading'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
}

export function Skills() {
  return (
    <section className="section-padding bg-surface-elevated/50">
      <div className="container-narrow">
        <SectionHeading
          id="skills"
          label="Skills"
          title="Technical toolkit"
          description="Technologies and practices I use across frontend, backend, and quality workflows."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-5 sm:grid-cols-2"
        >
          {skillGroups.map((group) => (
            <motion.article
              key={group.label}
              variants={item}
              className="group rounded-2xl border border-border bg-surface p-6 transition-shadow hover:shadow-lg hover:shadow-accent/5"
            >
              <h3 className="font-display text-lg font-bold text-ink">{group.label}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-lg border border-border bg-surface-elevated px-3 py-1.5 text-sm font-medium text-ink-muted transition-colors group-hover:border-accent/30 group-hover:text-ink"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
