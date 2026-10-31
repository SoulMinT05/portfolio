import { useState, type FormEvent } from 'react'
import { Section } from '@/components/section'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

type Errors = Partial<Record<'name' | 'email' | 'message', string>>

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(data: FormData): Errors {
  const errors: Errors = {}
  if (!String(data.get('name') ?? '').trim()) errors.name = 'Please enter your name.'
  const email = String(data.get('email') ?? '').trim()
  if (!email) errors.email = 'Please enter your email.'
  else if (!EMAIL_PATTERN.test(email)) errors.email = 'Please enter a valid email address.'
  if (!String(data.get('message') ?? '').trim()) errors.message = 'Please enter a message.'
  return errors
}

// UI only for now: submitting validates the fields but does not send anything yet.
export function Contact() {
  const [errors, setErrors] = useState<Errors>({})

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setErrors(validate(new FormData(event.currentTarget)))
  }

  return (
    <Section id="contact" title="Get In Touch" subtitle="Let's work together">
      <form onSubmit={handleSubmit} noValidate className="mx-auto flex max-w-xl flex-col gap-5">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            placeholder="Your name"
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className="h-11"
          />
          {errors.name && (
            <p id="name-error" className="text-destructive text-sm">
              {errors.name}
            </p>
          )}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="example@email.com"
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className="h-11"
          />
          {errors.email && (
            <p id="email-error" className="text-destructive text-sm">
              {errors.email}
            </p>
          )}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            rows={6}
            placeholder="How can I help you?"
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && (
            <p id="message-error" className="text-destructive text-sm">
              {errors.message}
            </p>
          )}
        </div>
        <Button type="submit" className="h-11 text-base">
          Get in Touch
        </Button>
      </form>
    </Section>
  )
}
