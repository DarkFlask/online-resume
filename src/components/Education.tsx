import { motion } from 'framer-motion'
import { BookOpen } from 'lucide-react'
import { education } from '../data/resume'
import { SectionHeading } from './SectionHeading'

export function Education() {
  return (
    <section className="section-padding border-t border-border">
      <div className="container-narrow">
        <SectionHeading id="education" label="Education" title="Academic background" />

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex gap-6 rounded-2xl border border-border bg-surface-elevated p-6 sm:p-8"
        >
          <div className="hidden rounded-xl bg-accent/15 p-4 text-accent sm:block">
            <BookOpen size={32} />
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold text-ink">{education.degree}</h3>
            <p className="mt-2 text-lg font-medium text-accent">{education.specialization}</p>
            <p className="mt-3 text-ink-muted">{education.school}</p>
            <p className="mt-1 text-sm text-ink-muted">{education.period}</p>
            <p className="mt-4 inline-flex rounded-lg bg-accent-soft/50 px-3 py-1.5 text-sm font-semibold text-accent">
              {education.graduation}
            </p>
          </div>
        </motion.article>
      </div>
    </section>
  )
}
