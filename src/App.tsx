import Info from './components/info/Info'
import Projects from './components/projects/Projects'
import Stack from './components/stack/Stack'
import Services from './components/services/Services'
import Footer from './components/footer/Footer'
import { useAppSelector } from './store/hooks'
// TODO: удаление слайдов
// TODO: автоскролл вверх при заходе на страницу проекта
// TODO: затемнение фона при просмотре слайда проекта
// TODO: возможность менять обложку

const App:React.FC = () => {
  const projects = useAppSelector(state => state.projects.projectsList)
  const stack = useAppSelector(state => state.stack.stackList)

  if(window.location.pathname === '/admin') {
    localStorage.setItem('isAdmin', 'true')
  }
  // } else if(window.location.pathname === '/') {
  //   localStorage.setItem('isAdmin', 'false')
  // }
  
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