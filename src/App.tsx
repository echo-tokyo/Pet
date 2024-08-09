import Info from './components/info/Info'
import Projects from './components/projects/Projects'
import Stack from './components/stack/Stack'
import Services from './components/services/Services'
import Footer from './components/footer/Footer'
import { useState } from 'react'
import { stack } from './data/projects'
import { IStack } from './types/types'
import { useAppSelector } from './store/hooks'

const App:React.FC = () => {
  const test = useAppSelector((state) => state.projects.projectsList)
  const [techs, setTechs] = useState<IStack[]>(stack)
  // TODO: setTechs
  console.log(setTechs)
  
  console.log(test)
  return (
    <>
      <Info />
      <Projects />
      <Stack techs={techs} />
      <Services />
      <Footer />
    </>
  )
}

export default App