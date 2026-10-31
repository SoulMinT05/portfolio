import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { About } from '@/components/sections/about'
import { Contact } from '@/components/sections/contact'
import { Education } from '@/components/sections/education'
import { Experience } from '@/components/sections/experience'
import { Hero } from '@/components/sections/hero'
import { Projects } from '@/components/sections/projects'
import { Resume } from '@/components/sections/resume'
import { Skills } from '@/components/sections/skills'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
