import './projects.scss'

const Projects = () => {
	return (
		<div className="wrapper">
			<h2>Мои проекты</h2>
			<div className="items">
				<div className="projects">
					<div className="project">
						<div className="project__image">
							<svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M36 20H12M42 12H6M42 28H6M36 36H12" stroke="#828282" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
						</div>
						<div className="project__text">
							<h3 className="project__text-title">Название</h3>
							<p className="project__text-subtitle">Описание описание описание описание описание описание описание описание</p>
						</div>
					</div>
					<div className="project">
						<div className="project__image">
							<svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M36 20H12M42 12H6M42 28H6M36 36H12" stroke="#828282" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
						</div>
						<div className="project__text">
							<h3 className="project__text-title">Название</h3>
							<p className="project__text-subtitle">Описание описание описание описание описание описание описание описание</p>
						</div>
					</div>
					<div className="project">
						<div className="project__image">
							<svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M36 20H12M42 12H6M42 28H6M36 36H12" stroke="#828282" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
						</div>
						<div className="project__text">
							<h3 className="project__text-title">Название</h3>
							<p className="project__text-subtitle">Описание описание описание описание описание описание описание описание</p>
						</div>
					</div>
				</div>
				<div className="line"><div className="square"></div></div>
			</div>
		</div>
	)
}

export default Projects