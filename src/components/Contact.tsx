import { motion } from 'framer-motion'
import { Code2, Mail, Phone, Send, UserRound } from 'lucide-react'
import { profile } from '../data/resume'
import { SectionHeading } from './SectionHeading'

export function Contact() {
  return (
    <section className="section-padding border-t border-border">
      <div className="container-narrow">
        <SectionHeading
          id="contact"
          label="Contact"
          title="Let's connect"
          description="Reach out for internships, collaborations, or opportunities."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-border bg-gradient-to-br from-accent-soft/40 to-surface-elevated p-8 sm:p-10"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-4">
              <h3 className="font-display text-lg font-bold text-ink">Direct contact</h3>
              {profile.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-ink-muted transition-colors hover:text-accent"
                >
                  <Phone size={20} className="text-accent" />
                  {phone}
                </a>
              ))}
              {profile.emails.map((email) => (
                <a
                  key={email}
                  href={`mailto:${email}`}
                  className="flex items-center gap-3 text-ink-muted transition-colors hover:text-accent"
                >
                  <Mail size={20} className="text-accent" />
                  {email}
                </a>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="font-display text-lg font-bold text-ink">Online</h3>
              {profile.github && (
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-ink-muted transition-colors hover:text-accent"
                >
                  <Code2 size={20} className="text-accent" />
                  GitHub Profile
                </a>
              )}
              {profile.linkedin && (
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-ink-muted transition-colors hover:text-accent"
                >
                  <UserRound size={20} className="text-accent" />
                  LinkedIn
                </a>
              )}
              <a
                href={profile.resumePdf}
                download
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                <Send size={18} />
                Download Resume PDF
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
