import { Menu } from 'lucide-react'
import { useState } from 'react'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { navItems, profile } from '@/data/profile'
import { useActiveSection } from '@/hooks/use-active-section'
import { cn } from '@/lib/utils'

const ids = navItems.map((item) => item.id)

export function Navbar() {
  const active = useActiveSection(ids)
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-background/80 sticky top-0 z-50 border-b backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
      >
        <a href="#top" className="font-logo text-3xl leading-none">
          {profile.logo}
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={active === item.id ? 'true' : undefined}
                className={cn(
                  'text-base font-medium transition-colors',
                  active === item.id ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={<Button variant="ghost" size="icon-lg" className="lg:hidden" aria-label="Open menu" />}
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right">
              <SheetTitle className="font-logo px-4 pt-4 text-2xl">{profile.logo}</SheetTitle>
              <ul className="flex flex-col gap-1 p-4">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      className={cn(
                        'block rounded-lg px-3 py-2 text-base font-medium',
                        active === item.id ? 'text-primary' : 'text-muted-foreground',
                      )}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
