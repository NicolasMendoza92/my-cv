
import ImagenPrin from '@/components/ImagenPrin'
import Icons from '@/components/Icons'
import About from '@/components/About'
import Cursos from '@/components/Cursos'
import Projects from '@/components/Projects'

export default function Home() {
  return (
    <>
      <ImagenPrin />
      <Projects/>
      <Cursos />
      <About />
      
      <Icons />
    </>
  )
}
