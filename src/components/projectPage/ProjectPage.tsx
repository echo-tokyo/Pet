import { useParams } from 'react-router-dom'
import { IProjects } from '../../types/types'
import { useAppSelector } from '../../store/hooks'

const ProjectPage:React.FC = () => {
	const {id} = useParams()
	const projectsList = useAppSelector(state => state.projects.projectsList)
	const currentProject:IProjects | undefined = projectsList.find(el => el.id === Number(id))
	return (
			<img src={currentProject?.image} alt={currentProject?.name} style={{width: '200px'}}/>
	)
}

export default ProjectPage