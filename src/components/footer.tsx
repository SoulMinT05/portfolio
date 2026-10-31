import { Mail } from 'lucide-react'
import { profile } from '@/data/profile'

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between">
        <p className="text-3xl font-semibold tracking-wide md:text-4xl">
          Let&apos;s
          <br />
          Work Together
        </p>
        <div className="flex flex-col items-start gap-3 md:items-end">
          <a
            href={`mailto:${profile.email}`}
            className="hover:border-primary inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm transition-colors"
          >
            <Mail className="text-primary size-4" /> {profile.email}
          </a>
          <div className="text-muted-foreground flex gap-5 text-sm">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground">
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-foreground">
              GitHub
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="hover:text-foreground">
              {profile.phone}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
