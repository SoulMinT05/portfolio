import avatar from '@/assets/avatar.jpg'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { buttonVariants } from '@/components/ui/button'
import { profile } from '@/data/profile'
import { cn } from '@/lib/utils'

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-3xl flex-col items-center px-4 pt-16 pb-12 text-center sm:px-6 md:pt-24"
    >
      <Avatar className="size-40 md:size-56">
        <AvatarImage src={avatar} alt={profile.name} className="object-[50%_18%]" />
        <AvatarFallback>TN</AvatarFallback>
      </Avatar>
      <h1 className="mt-8 text-4xl font-bold tracking-tight md:text-6xl">{profile.name}</h1>
      <p className="text-primary mt-3 text-lg font-semibold md:text-xl">{profile.title}</p>
      <p className="text-muted-foreground mt-4 max-w-2xl text-base leading-relaxed">{profile.tagline}</p>
      <a
        href="#contact"
        className={cn(buttonVariants({ variant: 'outline' }), 'border-primary dark:border-primary mt-8 h-12 rounded-full px-8 text-base')}
      >
        Contact Me
      </a>
    </section>
  )
}
