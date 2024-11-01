import { useAppSelector } from '../store/hooks'
import Footer from './footer/Footer'
import Info from './info/Info'
import Projects from './projects/Projects'
import Services from './services/Services'
import Stack from './stack/Stack'
import landingData from '../data/landing'

const Landing: React.FC = () => {
	const data = useAppSelector(state => state)
	console.log(data)

	// запрос на получение данных о странице по id
	// console.log(landingData)

	const projects = useAppSelector(state => state.landing.landingData.projects)
	const stack = useAppSelector(state => state.landing.landingData.stack)

	if (window.location.pathname === '/admin') {
		localStorage.setItem('isAdmin', 'true')
	}

	return (
		<>
			<Info landingData={landingData} />
			{projects.length > 0 && <Projects />}
			{stack.length > 0 && <Stack />}
			<Services />
			<Footer />
		</>
	)
}

export default Landing
