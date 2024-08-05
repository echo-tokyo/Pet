import { useParams } from 'react-router-dom'
import data from '../../data/projects'
import { IProjects } from '../../types/types'

const ProjectPage:React.FC = () => {
	const {id} = useParams()
	const currentProject:IProjects | undefined = data.find(el => el.id === Number(id))
	return (
		<img src={currentProject?.image} alt={currentProject?.name} style={{width: '200px'}}/>
	)
}

export default ProjectPage