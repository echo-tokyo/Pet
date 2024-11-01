import Info from './info/Info'
import Projects from './projects/Projects'
import Stack from './stack/Stack'
import Services from './services/Services'
import Footer from './footer/Footer'
import { useAppSelector } from '../store/hooks'
import landingData from '../data/landing'

const Landing:React.FC = () => {

  // запрос на получение данных о странице по id
  console.log(landingData)
  
	const projects = useAppSelector(state => state.projects.projectsList)
  const stack = useAppSelector(state => state.stack.stackList)

  if(window.location.pathname === '/admin') {
    localStorage.setItem('isAdmin', 'true')
  }
  
  return (
    <>
      <Info landingData={landingData}/>
      {projects.length > 0 && (<Projects />)}
      {stack.length > 0 && (<Stack />)}
      <Services />
      <Footer />
    </>
  )
}

export default Landing