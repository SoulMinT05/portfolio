import { Download, Eye } from 'lucide-react'
import { Section } from '@/components/section'
import { buttonVariants } from '@/components/ui/button'
import { profile } from '@/data/profile'
import { cn } from '@/lib/utils'

export function Resume() {
  return (
    <Section id="resume" title="Resume" subtitle="Take a closer look">
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a
          href={profile.cvUrl}
          target="_blank"
          rel="noreferrer"
          className={cn(buttonVariants(), 'h-12 rounded-full px-8 text-base')}
        >
          <Eye /> See CV
        </a>
        <a
          href={profile.cvUrl}
          download={profile.cvFileName}
          className={cn(buttonVariants({ variant: 'outline' }), 'border-primary dark:border-primary h-12 rounded-full px-8 text-base')}
        >
          <Download /> Download PDF
        </a>
      </div>
    </Section>
  )
}
