import './stack.scss'

const Stack = () => {
	return (
		<div className="stack">
			<div className="stack__text">
				<h2 className="stack__text-title">Стэк технологий</h2>
				<p className="stack__text-subtitle">Основной набор инструментов, который помогает мне <br /> в разработке веб-приложений</p>
			</div>
			<div className="stack__items">
				<div className="stack__item">
					<img src="../../../public/html-5-svgrepo-com 1.svg" alt="html" />
					<h3 className="stack__item-desc">HTML</h3>
				</div>
				<div className="stack__item">
					<img src="../../../public/css-3-svgrepo-com 1.svg" alt="css" />
					<h3 className="stack__item-desc">CSS</h3>
				</div>
				<div className="stack__item">
					<img src="../../../public/scss2-svgrepo-com 1.svg" alt="html" />
					<h3 className="stack__item-desc">Sass/Scss</h3>
				</div>
				<div className="stack__item">
					<img src="../../../public/js-official-svgrepo-com 1.svg" alt="js" />
					<h3 className="stack__item-desc">JavaScript</h3>
				</div>
				<div className="stack__item">
					<img src="../../../public/typescript-icon-svgrepo-com 1.svg" alt="ts" />
					<h3 className="stack__item-desc">TypeScript</h3>
				</div>
				<div className="stack__item">
					<img src="../../../public/react-svgrepo-com 1.svg" alt="react" />
					<h3 className="stack__item-desc">React</h3>
				</div>
				<div className="stack__item">
					<img src="../../../public/redux-svgrepo-com 1.svg" alt="redux" />
					<h3 className="stack__item-desc">Redux Toolkit</h3>
				</div>
				<div className="stack__item">
					<img src="../../../public/figma-svgrepo-com 1.svg" alt="figma" />
					<h3 className="stack__item-desc">Figma</h3>
				</div>
				<div className="stack__item">
					<img src="../../../public/git-svgrepo-com 1.svg" alt="git" />
					<p className="stack__item-desc">Git</p>
				</div>
			</div>
		</div>
	)
}

export default Stack