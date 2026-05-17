import { motion } from 'framer-motion'
import { ArrowDown, Code2, Mail, Phone } from 'lucide-react'
import { profile } from '../data/resume'

export function Hero() {
  return (
    <section
      id="hero"
      className="gradient-mesh relative flex min-h-screen flex-col justify-center section-padding pt-28"
    >
      <div className="container-narrow">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-6xl lg:text-7xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 max-w-xl text-xl font-medium text-accent sm:text-2xl"
        >
          {profile.role}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-2 text-lg text-ink-muted"
        >
          Specializing in {profile.specialization}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg"
        >
          {profile.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-transform hover:scale-[1.02]"
          >
            View Projects
          </a>
          <a
            href={profile.resumePdf}
            download
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface-elevated px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent/50"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-ink-muted transition-colors hover:text-accent"
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex flex-wrap gap-4 text-sm text-ink-muted"
        >
          {profile.phones.map((phone) => (
            <a
              key={phone}
              href={`tel:${phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-accent"
            >
              <Phone size={16} className="text-accent" />
              {phone}
            </a>
          ))}
          {profile.emails.map((email) => (
            <a
              key={email}
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-accent"
            >
              <Mail size={16} className="text-accent" />
              {email}
            </a>
          ))}
          {profile.github && (
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-accent"
            >
              <Code2 size={16} className="text-accent" />
              GitHub
            </a>
          )}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-muted transition-colors hover:text-accent"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={24} className="animate-bounce" />
      </motion.a>
    </section>
  )
}
