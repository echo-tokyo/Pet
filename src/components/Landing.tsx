import { useAppSelector } from '../store/hooks'
import Footer from './footer/Footer'
import Info from './info/Info'
import Projects from './projects/Projects'
import Services from './services/Services'
import Stack from './stack/Stack'

const Landing: React.FC = () => {

	// запрос на получение данных о странице по id
	const landingData = useAppSelector(state => state.landing.landingData)
	const projects = landingData.projects
	const stack = landingData.stack

	if (window.location.pathname === '/admin') {
		localStorage.setItem('isAdmin', 'true')
	}

	return (
		<>
			<Info />
			{projects.length > 0 && <Projects />}
			{stack.length > 0 && <Stack />}
			<Services />
			<Footer />
		</>
	)
}

export default Landing
