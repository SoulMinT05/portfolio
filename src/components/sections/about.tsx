import { Download } from 'lucide-react'
import { Section } from '@/components/section'
import { buttonVariants } from '@/components/ui/button'
import { profile } from '@/data/profile'
import { cn } from '@/lib/utils'

export function About() {
  return (
    <Section id="about" title="About Me" subtitle="Get to know me">
      <div className="text-muted-foreground mx-auto max-w-3xl space-y-5 text-center leading-relaxed">
        {profile.summary.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <a
          href={profile.cvUrl}
          download={profile.cvFileName}
          className={cn(buttonVariants({ variant: 'outline' }), 'border-primary dark:border-primary h-11 rounded-full px-6')}
        >
          <Download /> Download Resume
        </a>
      </div>
    </Section>
  )
}
