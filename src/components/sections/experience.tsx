import { ExpandablePoints } from '@/components/expandable-points'
import { Section } from '@/components/section'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { experience } from '@/data/profile'

export function Experience() {
  return (
    <Section id="experience" title="Experience" subtitle="Where I have worked">
      <div className="mx-auto grid max-w-4xl gap-5">
        {experience.map((job) => (
          <Card key={job.company}>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                {job.role} · <span className="text-primary">{job.company}</span>
              </CardTitle>
              <CardDescription>
                {job.period} · {job.location}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ExpandablePoints points={job.points} />
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}
