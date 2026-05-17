import { profile } from '../data/resume'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-8">
      <div className="container-narrow flex flex-col items-center justify-between gap-4 px-5 text-center text-sm text-ink-muted sm:flex-row sm:px-8 sm:text-left">
        <p>
          © {year} {profile.name}. Built with React, Tailwind CSS & Vite.
        </p>
        <p className="text-xs">Deployed-ready for Vercel & GitHub Pages</p>
      </div>
    </footer>
  )
}
