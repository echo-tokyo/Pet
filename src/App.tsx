import Info from './components/info/Info'
import Projects from './components/projects/Projects'
import Stack from './components/stack/Stack'
import Services from './components/services/Services'
import Footer from './components/footer/Footer'
import { IProjects } from './types/types'
import data from './data/projects'
import { useState } from 'react'

const App:React.FC = () => {
  const [projects, setProjects] = useState<IProjects[]>(data)
  console.log(setProjects)
  return (
    <>
      <Info />
      <Projects projects={projects} />
      <Stack />
      <Services />
      <Footer />
    </>
  )
}

export default App