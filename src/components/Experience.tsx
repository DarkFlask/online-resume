import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'
import { experience } from '../data/resume'
import { SectionHeading } from './SectionHeading'

export function Experience() {
  return (
    <section className="section-padding border-t border-border">
      <div className="container-narrow">
        <SectionHeading
          id="experience"
          label="Experience"
          title="Professional experience"
          description="Hands-on industry training alongside academic projects."
        />

        <div className="relative space-y-8 pl-8 before:absolute before:left-[11px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-border">
          {experience.map((job, index) => (
            <motion.article
              key={`${job.company}-${job.start}`}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <span className="absolute -left-8 top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-accent bg-surface text-accent">
                <Briefcase size={12} />
              </span>
              <div className="rounded-2xl border border-border bg-surface-elevated p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-xl font-bold text-ink">{job.role}</h3>
                    <p className="mt-1 font-medium text-accent">{job.company}</p>
                  </div>
                  <span className="rounded-full border border-accent/30 bg-accent-soft/40 px-3 py-1 text-xs font-semibold text-accent">
                    {job.type}
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={16} className="shrink-0 text-accent" />
                    {job.period}
                  </span>
                  {job.location && (
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={16} className="shrink-0 text-accent" />
                      {job.location}
                    </span>
                  )}
                  {job.duration && (
                    <span className="rounded-md bg-surface px-2 py-0.5 text-xs font-medium ring-1 ring-border">
                      {job.duration}
                    </span>
                  )}
                </div>

                <ul className="mt-6 space-y-3 border-t border-border pt-6">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm leading-relaxed text-ink-muted sm:text-base"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
