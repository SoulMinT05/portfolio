import { ChevronDown } from 'lucide-react'
import { useId, useState } from 'react'
import { Section } from '@/components/section'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { experience } from '@/data/profile'
import { cn } from '@/lib/utils'

const VISIBLE_POINTS = 5

type Job = (typeof experience)[number]

function ExperienceCard({ job }: { job: Job }) {
  const [expanded, setExpanded] = useState(false)
  const listId = useId()
  const hasMore = job.points.length > VISIBLE_POINTS
  const points = expanded || !hasMore ? job.points : job.points.slice(0, VISIBLE_POINTS)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          {job.role} · <span className="text-primary">{job.company}</span>
        </CardTitle>
        <CardDescription>
          {job.period} · {job.location}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul id={listId} className="text-muted-foreground list-disc space-y-2 pl-5 text-sm leading-relaxed">
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </CardContent>
      {hasMore && (
        <CardFooter>
          <Button
            variant="ghost"
            size="sm"
            aria-expanded={expanded}
            aria-controls={listId}
            onClick={() => setExpanded((value) => !value)}
            className="text-primary h-8 gap-1.5 px-2"
          >
            {expanded ? 'Hide Details' : 'See Details'}
            <ChevronDown className={cn('transition-transform', expanded && 'rotate-180')} />
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}

export function Experience() {
  return (
    <Section id="experience" title="Experience" subtitle="Where I have worked">
      <div className="mx-auto grid max-w-4xl gap-5">
        {experience.map((job) => (
          <ExperienceCard key={job.company} job={job} />
        ))}
      </div>
    </Section>
  )
}
