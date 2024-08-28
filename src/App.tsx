import Info from './components/info/Info'
import Projects from './components/projects/Projects'
import Stack from './components/stack/Stack'
import Services from './components/services/Services'
import Footer from './components/footer/Footer'
import { useAppSelector } from './store/hooks'

const App:React.FC = () => {
  const projects = useAppSelector(state => state.projects.projectsList)
  const stack = useAppSelector(state => state.stack.stackList)
  return (
    <>
      <Info />
      {projects.length > 0 && (<Projects />)}
      {stack.length > 0 && (<Stack />)}
      <Services />
      <Footer />
    </>
  )
}

export default App