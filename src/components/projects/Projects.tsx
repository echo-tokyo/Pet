import './projects.scss'
import Project from './project/Project'
import { useAppSelector } from '../../store/hooks'

const Projects:React.FC = () => {
	
	const projects = useAppSelector(state => state.projects.projectsList)

	return (
		<div className="wrapper" id='projects'>
			<h2>Мои проекты</h2>
			<div className="items">
				<div className="projects">
					{projects.map(el => <Project key={el.id} el={el}/>)}
				</div>
				<div className="line"></div>
			</div>
		</div>
	)
}

export default Projects