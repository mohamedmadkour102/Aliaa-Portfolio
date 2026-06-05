import { Hero } from '../sections/Hero'
import { About } from '../sections/About'
import { FeaturedGallery } from '../sections/FeaturedGallery'
import { Process } from '../sections/Process'
import { Contact } from '../sections/Contact'

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedGallery />
      <Process />
      <Contact />
    </>
  )
}
