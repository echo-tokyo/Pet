import Info from './components/info/Info'
import Projects from './components/projects/Projects'
import Stack from './components/stack/Stack'
import Services from './components/services/Services'
import Footer from './components/footer/Footer'

const App:React.FC = () => {
  return (
    <>
      <Info />
      <Projects />
      <Stack />
      <Services />
      <Footer />
    </>
  )
}

export default App