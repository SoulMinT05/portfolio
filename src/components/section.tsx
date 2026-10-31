import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type SectionProps = {
  id: string
  title: string
  subtitle?: string
  className?: string
  children: ReactNode
}

export function Section({ id, title, subtitle, className, children }: SectionProps) {
  return (
    <section id={id} className={cn('mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 md:py-14', className)}>
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
        {subtitle && <p className="text-primary mt-2 text-sm font-medium">{subtitle}</p>}
      </div>
      {children}
    </section>
  )
}
