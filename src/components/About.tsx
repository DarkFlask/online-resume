import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { education, profile } from '../data/resume'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section className="section-padding border-t border-border">
      <div className="container-narrow">
        <SectionHeading
          id="about"
          label="About"
          title="Building thoughtful web experiences"
          description="I focus on clean interfaces, reliable backends, and quality that holds up in real use."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-surface-elevated p-6 sm:p-8"
          >
            <p className="text-base leading-relaxed text-ink-muted">{profile.summary}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center gap-4 rounded-2xl border border-accent/30 bg-accent-soft/30 p-6 sm:p-8"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-accent/15 p-3 text-accent">
                <GraduationCap size={28} />
              </div>
              <div>
                <p className="font-display text-lg font-bold text-ink">Adamson University</p>
                <p className="text-sm text-ink-muted">BS Information Technology</p>
                <p className="mt-1 text-sm font-medium text-accent">{profile.specialization}</p>
                <p className="mt-2 text-sm text-ink-muted">{education.graduation}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
