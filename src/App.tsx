import Info from './components/info/Info'
import Projects from './components/projects/Projects'
import Stack from './components/stack/Stack'
import Services from './components/services/Services'
import Footer from './components/footer/Footer'
import { IProjects } from './types/types'
import data from './data/projects'
import { useState } from 'react'
import { stack } from './data/projects'
import { IStack } from './types/types'
import { useAppSelector } from './store/hooks'

const App:React.FC = () => {
  const [projects, setProjects] = useState<IProjects[]>(data)
  const [techs, setTechs] = useState<IStack[]>(stack)
  console.log(setTechs)
  const test = useAppSelector((state) => state.projects.projectsList)
  console.log(test)
  return (
    <>
      <Info setProjects={setProjects} projects={projects}/>
      <Projects projects={projects} />
      <Stack techs={techs} />
      <Services />
      <Footer />
    </>
  )
}

export default App