import { Section } from '@/components/section'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { education } from '@/data/profile'

export function Education() {
  return (
    <Section id="education" title="Education" subtitle="My academic background">
      <div className="mx-auto max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              {education.degree} · <span className="text-primary">{education.school}</span>
            </CardTitle>
            <CardDescription>
              {education.period} · {education.location}
            </CardDescription>
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
