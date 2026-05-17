import { AnimatePresence, motion } from 'framer-motion'
import { Code2, ExternalLink } from 'lucide-react'
import { useMemo, useState } from 'react'
import { projects, type ProjectCategory } from '../data/resume'
import { SectionHeading } from './SectionHeading'

type Filter = 'all' | ProjectCategory

const filters: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'featured', label: 'Featured' },
  { id: 'academic', label: 'Academic' },
]

export function Projects() {
  const [filter, setFilter] = useState<Filter>('all')

  const filtered = useMemo(() => {
    if (filter === 'all') return projects
    return projects.filter((p) => p.category === filter)
  }, [filter])

  return (
    <section className="section-padding bg-surface-elevated/50">
      <div className="container-narrow">
        <SectionHeading
          id="projects"
          label="Projects"
          title="Selected work"
          description="Web applications and systems—from mental health support to logistics and campus tools."
        />

        <div className="mb-10 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                filter === f.id
                  ? 'bg-accent text-white'
                  : 'border border-border text-ink-muted hover:border-accent/40 hover:text-ink'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 lg:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col rounded-2xl border border-border bg-surface p-6 sm:p-8"
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                      {project.period}
                    </span>
                    <h3 className="mt-1 font-display text-xl font-bold text-ink">{project.title}</h3>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${
                      project.category === 'featured'
                        ? 'bg-accent/15 text-accent'
                        : 'bg-border/80 text-ink-muted'
                    }`}
                  >
                    {project.category === 'featured' ? 'Featured' : 'Academic'}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-ink-muted">{project.description}</p>

                <ul className="mt-4 space-y-2">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-sm text-ink-muted">
                      <span className="text-accent">▹</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-surface-elevated px-2.5 py-1 text-xs font-medium text-ink-muted ring-1 ring-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {project.links && project.links.length > 0 && (
                  <div className="mt-6 flex gap-3 border-t border-border pt-5">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                      >
                        {link.label.toLowerCase().includes('github') ? (
                          <Code2 size={16} />
                        ) : (
                          <ExternalLink size={16} />
                        )}
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
