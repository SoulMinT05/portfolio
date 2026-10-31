import { Section } from '@/components/section'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { skills } from '@/data/profile'

export function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="What I work with">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <Card
            key={group.title}
            className="transition-[transform,box-shadow] duration-300 ease-out hover:shadow-lg motion-safe:hover:-translate-y-2"
          >
            <CardHeader>
              <CardTitle className="text-base font-semibold">{group.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge key={item} variant="secondary">
                  {item}
                </Badge>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}
