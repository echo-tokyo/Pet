import { IProjects } from '../../../types/types'
import { useNavigate } from 'react-router-dom'

interface IProjectItem{
	el: IProjects	
}

const Project:React.FC<IProjectItem> = (props) => {
	const nav = useNavigate()
	const {el} = props

	return (
		<div className="project"
		onClick={() => nav(`/landing/project/${el.id}`)}>

			<div className="project__image"
			style={{backgroundImage: `url(${el.image})`}}>

				<svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M36 20H12M42 12H6M42 28H6M36 36H12" stroke="#828282" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg>
			</div>

			<div className="project__text">
				<h3 className="project__text-title">{el.name}</h3>
				<p className="project__text-subtitle">{el.desc}</p>
			</div>
		</div>
	)
}

export default Project