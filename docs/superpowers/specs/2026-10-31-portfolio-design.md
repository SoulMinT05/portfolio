# Portfolio – Tam Nguyen (Design Spec)

## Goal
A single-page personal portfolio for Nguyen Minh Tam (Fullstack Developer), introducing them briefly from their CV. Audience: recruiters/HR. Simple, clean, no flashy effects.

## Visual reference
Figma: `gAzCrEkzGn34Z5Ih9LaROB` ("Designer/Developer Portfolio (Community)"), page "Designs", frame "Dark Theme Portfolio" (mobile frame: "iPhone 14 & 15 Pro").
- Dark bg `#1E1E1E`, accent `#4fc3f7`, muted text `#c1c1c1`, white headings.
- Fonts: Montserrat (body/UI), Oleo Script (logo).
- Outlined pill/rounded buttons with accent border; rounded dark cards.
- Light theme is NOT in Figma: design it with the same accent and layout.
- Exact tokens/spacing are read from Figma via MCP during implementation, not guessed.

## Stack
React + Vite + TypeScript + Tailwind + shadcn/ui. Static site, no backend. Deploy target: Vercel or GitHub Pages (not part of this spec).

shadcn components: Button, Card, Badge, Avatar, Sheet (mobile nav), Input, Textarea, Label.

## Page structure (top to bottom)
| Section | Content |
|---|---|
| Navbar | Logo "Tam Nguyen" (Oleo Script). Links: About, Skills, Experience, Projects, Resume, Contact. Right: light/dark toggle. Mobile: links in a Sheet. |
| Hero | Circular avatar, "Nguyen Minh Tam", tagline "Fullstack Developer", 1–2 sentence summary, "Contact Me" button (scrolls to Contact). |
| About | Professional Summary from CV (shortened), "Download Resume" button. |
| Skills | 5 cards: Frontend, Backend, Architecture, Databases, Tools. Skill names as Badges. |
| Experience | 2 cards: TMA Solutions (Dec 2025 – Present), FPT Software (Apr – Oct 2025), 3–4 key bullets each. Education + IELTS in a compact block. |
| Projects | One card: RubyStore (stack, 3–4 bullets, GitHub link). No filter chips, no "View All". |
| Resume | Short block with two buttons: **See CV** (opens PDF in new tab) and **Download PDF**. |
| Get In Touch | UI only: Name, Email, Message, Submit. No Service field. |
| Footer | "Let's Work Together" + email, plus LinkedIn/GitHub links. |

## Behavior
- Navbar links smooth-scroll to their section; the section in view is highlighted with the accent color (scroll-spy).
- Theme toggle switches light/dark, persists in localStorage, defaults to system preference.
- Resume: See CV → `target="_blank"` to the PDF; Download PDF → `download="Nguyen_Minh_Tam_Fullstack.pdf"`. The About "Download Resume" button uses the same file.
- Get In Touch form: basic client-side validation (required fields, email format). Submit does not send anywhere in this version. Wiring (EmailJS/Formspree/etc.) is a later task. Fix Figma's swapped placeholders (Name → "Your name", Email → "example@email.com").
- Responsive: desktop plus mobile layout per Figma's iPhone frame.

## Content & assets
- All CV content lives in one data file (e.g. `src/data/profile.ts`); components only render it. Content is taken from `Nguyen_Minh_Tam_Fullstack.pdf`.
- Avatar: the user's photo, cropped to a circle centered on the face. Source: `C:\Users\ADMIN\AppData\Local\Temp\claude\d--project-Edge-NBCU\bef319ed-829b-4778-880e-622e5432c2f3\images\5.jpg` (copy into the project's `src/assets/`).
- CV PDF placed in `public/`. The user supplies the real file path at implementation time.
- English only.

## Out of scope
Animations beyond smooth scroll/hover, blog, CMS, backend, form delivery, i18n, project filtering, analytics.

## Testing
- Build and lint pass.
- Manual check in browser at desktop and mobile widths, both themes: navbar scroll-spy, theme persistence, Resume buttons, form validation.
- Visual comparison of dark theme against the Figma screenshot per section.
