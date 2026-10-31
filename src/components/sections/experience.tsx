import { Section } from '@/components/section'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { education, experience } from '@/data/profile'

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
              <ul className="text-muted-foreground list-disc space-y-2 pl-5 text-sm leading-relaxed">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              {education.degree} · <span className="text-primary">{education.school}</span>
            </CardTitle>
            <CardDescription>{education.period}</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="text-muted-foreground list-disc space-y-2 pl-5 text-sm leading-relaxed">
              {education.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
              <li>{education.language}</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </Section>
  )
}
