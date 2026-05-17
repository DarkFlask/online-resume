import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink, X } from 'lucide-react'
import { useEffect } from 'react'
import type { Certification } from '../data/resume'

interface CertificateLightboxProps {
  cert: Certification | null
  onClose: () => void
}

export function CertificateLightbox({ cert, onClose }: CertificateLightboxProps) {
  const hasPreview = Boolean(cert?.image || cert?.pdf)

  useEffect(() => {
    if (!hasPreview) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [hasPreview, onClose])

  return (
    <AnimatePresence>
      {cert && hasPreview && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`Certificate: ${cert.title}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
        >
          <button
            type="button"
            className="absolute inset-0 bg-ink/70 backdrop-blur-sm"
            onClick={onClose}
            aria-label="Close certificate preview"
          />

          <motion.figure
            initial={{ opacity: 0, scale: 0.92, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            className="relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-border bg-surface-elevated shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4 border-b border-border px-4 py-3 sm:px-5">
              <div className="min-w-0">
                <figcaption className="font-display text-sm font-bold text-ink sm:text-base">
                  {cert.title}
                </figcaption>
                <p className="text-xs text-ink-muted sm:text-sm">{cert.issuer}</p>
                {cert.date && (
                  <p className="mt-0.5 text-xs font-medium text-accent">{cert.date}</p>
                )}
              </div>
              <button
                type="button"
                onClick={onClose}
                className="shrink-0 rounded-lg border border-border p-2 text-ink-muted transition-colors hover:bg-accent-soft/50 hover:text-ink"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            <div className="overflow-auto bg-surface p-3 sm:p-4">
              {cert.image ? (
                <img
                  src={cert.image}
                  alt={cert.imageAlt ?? cert.title}
                  className="mx-auto max-h-[65vh] w-auto max-w-full rounded-lg object-contain"
                />
              ) : cert.pdf ? (
                <iframe
                  title={cert.imageAlt ?? cert.title}
                  src={`${cert.pdf}#view=FitH`}
                  className="h-[65vh] w-full rounded-lg border border-border bg-white"
                />
              ) : null}
            </div>

            <div className="flex flex-wrap items-center gap-4 border-t border-border px-4 py-3 sm:px-5">
              {cert.pdf && (
                <a
                  href={cert.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                >
                  <ExternalLink size={16} />
                  Open PDF
                </a>
              )}
              {cert.verifyUrl && (
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-ink-muted transition-colors hover:text-accent"
                >
                  <ExternalLink size={16} />
                  Verify credential
                </a>
              )}
            </div>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
