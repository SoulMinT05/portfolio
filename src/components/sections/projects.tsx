import { ExternalLink } from 'lucide-react'
import { Section } from '@/components/section'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { projects } from '@/data/profile'
import { cn } from '@/lib/utils'

export function Projects() {
  return (
    <Section id="projects" title="Projects" subtitle="Some of my work">
      <div className="mx-auto grid max-w-4xl gap-5">
        {projects.map((project) => (
          <Card key={project.name}>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">{project.name}</CardTitle>
              <CardDescription>{project.period}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
              <ul className="text-muted-foreground list-disc space-y-2 pl-5 text-sm leading-relaxed">
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className={cn(buttonVariants({ variant: 'outline' }), 'border-primary dark:border-primary h-10 rounded-full px-5')}
              >
                GitHub <ExternalLink />
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  )
}
