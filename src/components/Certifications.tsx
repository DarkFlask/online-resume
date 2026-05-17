import { motion } from 'framer-motion'
import { Award, ExternalLink, FileText, ZoomIn } from 'lucide-react'
import { useState } from 'react'
import { certifications, type Certification } from '../data/resume'
import { CertificateLightbox } from './CertificateLightbox'
import { SectionHeading } from './SectionHeading'

function hasPreview(cert: Certification) {
  return Boolean(cert.image || cert.pdf)
}

function CertificateCard({
  cert,
  index,
  onPreview,
}: {
  cert: Certification
  index: number
  onPreview: (cert: Certification) => void
}) {
  const [imageError, setImageError] = useState(false)
  const showImage = cert.image && !imageError
  const showPdfPreview = !showImage && cert.pdf
  const canPreview = hasPreview(cert) && (showImage || showPdfPreview)

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="flex flex-col overflow-hidden rounded-2xl border border-border bg-surface"
    >
      {showImage ? (
        <button
          type="button"
          onClick={() => onPreview(cert)}
          className="group relative aspect-[4/3] w-full overflow-hidden border-b border-border bg-surface-elevated"
          aria-label={`View certificate: ${cert.title}`}
        >
          <img
            src={cert.image}
            alt={cert.imageAlt ?? cert.title}
            className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
            onError={() => setImageError(true)}
          />
          <span className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors group-hover:bg-ink/40">
            <span className="flex items-center gap-2 rounded-full bg-surface-elevated/95 px-4 py-2 text-sm font-semibold text-ink opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
              <ZoomIn size={18} className="text-accent" />
              View certificate
            </span>
          </span>
        </button>
      ) : showPdfPreview ? (
        <button
          type="button"
          onClick={() => onPreview(cert)}
          className="group relative aspect-[4/3] w-full overflow-hidden border-b border-border bg-white"
          aria-label={`View certificate: ${cert.title}`}
        >
          <object
            data={`${cert.pdf}#view=FitH`}
            type="application/pdf"
            className="pointer-events-none h-full w-full object-cover object-top"
            aria-hidden
          >
            <div className="flex h-full items-center justify-center bg-accent-soft/20">
              <FileText size={48} className="text-accent" />
            </div>
          </object>
          <span className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors group-hover:bg-ink/35">
            <span className="flex items-center gap-2 rounded-full bg-surface-elevated/95 px-4 py-2 text-sm font-semibold text-ink opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
              <ZoomIn size={18} className="text-accent" />
              View certificate
            </span>
          </span>
        </button>
      ) : (
        <div className="flex aspect-[4/3] items-center justify-center border-b border-border bg-accent-soft/20">
          <div className="rounded-xl bg-accent/15 p-4 text-accent">
            <Award size={40} />
          </div>
        </div>
      )}

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {cert.date && (
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">{cert.date}</p>
        )}
        <h3 className="font-display font-bold leading-snug text-ink">{cert.title}</h3>
        <p className="mt-2 text-sm text-ink-muted">{cert.issuer}</p>

        <div className="mt-4 flex flex-wrap gap-3">
          {canPreview && (
            <button
              type="button"
              onClick={() => onPreview(cert)}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
            >
              <ZoomIn size={16} />
              View full size
            </button>
          )}
          {cert.pdf && (
            <a
              href={cert.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted transition-colors hover:text-accent"
            >
              <FileText size={16} />
              PDF
            </a>
          )}
          {cert.verifyUrl && (
            <a
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted transition-colors hover:text-accent"
            >
              <ExternalLink size={16} />
              Verify
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export function Certifications() {
  const [preview, setPreview] = useState<Certification | null>(null)

  return (
    <section className="section-padding bg-surface-elevated/50">
      <div className="container-narrow">
        <SectionHeading
          id="certifications"
          label="Certifications & Awards"
          title="Credentials"
          description="Industry certifications, internship completion, and academic recognition."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {certifications.map((cert, index) => (
            <CertificateCard
              key={cert.id}
              cert={cert}
              index={index}
              onPreview={setPreview}
            />
          ))}
        </div>
      </div>

      <CertificateLightbox cert={preview} onClose={() => setPreview(null)} />
    </section>
  )
}
