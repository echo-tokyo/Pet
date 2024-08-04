import './projects.scss'
import Project from './project/Project'
import { IProjects } from '../../types/types'

interface IProjectsList {
	projects: IProjects[]
}

const Projects:React.FC<IProjectsList> = (props) => {
	const {projects} = props
	return (
		<div className="wrapper">
			<h2>Мои проекты</h2>
			<div className="items">
				<div className="projects">
					{projects.map(el => <Project key={el.id} el={el}/>)}
				</div>
				<div className="line"><div className="square"></div></div>
			</div>
		</div>
	)
}

export default Projects