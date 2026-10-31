import { useState, type FormEvent } from 'react'
import { Section } from '@/components/section'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { profile } from '@/data/profile'

type Errors = Partial<Record<'name' | 'email' | 'message', string>>
type Status = 'idle' | 'sending' | 'success' | 'error'

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

export function Contact() {
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    const nextErrors = validate(data)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus('sending')
    try {
      const response = await fetch(profile.formEndpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (!response.ok) throw new Error(`Form request failed with ${response.status}`)
      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const sending = status === 'sending'

  return (
    <Section id="contact" title="Get In Touch" subtitle="Let's work together">
      <form onSubmit={handleSubmit} noValidate className="mx-auto flex max-w-xl flex-col gap-5">
        <input type="hidden" name="_subject" value="New message from your portfolio" />
        {/* Honeypot: hidden from people, filled in by bots. Formspree discards submissions that fill it. */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
          <label>
            Leave this field empty
            <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            placeholder="Your name"
            disabled={sending}
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
            disabled={sending}
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
            disabled={sending}
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && (
            <p id="message-error" className="text-destructive text-sm">
              {errors.message}
            </p>
          )}
        </div>

        <Button type="submit" disabled={sending} className="h-11 text-base">
          {sending ? 'Sending…' : 'Get in Touch'}
        </Button>

        <div role="status" aria-live="polite" className="min-h-6 text-center text-sm">
          {status === 'success' && (
            <p className="text-primary">Thanks for reaching out! Your message was sent, and I'll get back to you soon.</p>
          )}
          {status === 'error' && (
            <p className="text-destructive">
              Something went wrong and your message was not sent. Please try again, or email me at{' '}
              <a href={`mailto:${profile.email}`} className="underline">
                {profile.email}
              </a>
              .
            </p>
          )}
        </div>
      </form>
    </Section>
  )
}
