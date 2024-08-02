import './info.scss'

const Info = () => {
	return (
		<>
		<header className='header'>
			<ul className='header__list'>
				<li className='header__list-item'><a href="#">Портфолио</a></li>
				<li className='header__list-item'><a href="#">Стэк</a></li>
				<li className='header__list-item'><a href="#">Услуги</a></li>
			</ul>
		</header>
		<div className="container">
			<div className="web">
				<div className="web__pic pic"></div>
				<div className="web__text">
					<h2 className="web__text-title">Веб-разработка</h2>
					<p className="web__text-subtitle">Это искусство и наука создания веб-сайтов, которые <br /> помогут тебе осуществить свои идеи в реальность, <br /> сделать твою онлайн-жизнь ярче, эффективнее и <br /> комфортнее.</p>
				</div>
			</div>
			<div className="about">
				<div className="about__pic pic"></div>
				<div className="about__text">
					<h2 className="about__text-title">Обо мне</h2>
					<p className="about__text-subtitle">В мире цифрового искусства я рисую веб-сайты, <br /> придавая им форму и жизнь. Моя миссия - создавать <br /> привлекательные и функциональные интерфейсы, <br /> которые вдохновляют и увлекают пользователей.</p>
				</div>
			</div>
		</div>
		</>
	)
}

export default Info