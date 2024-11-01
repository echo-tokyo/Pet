import { ILanding } from '../types/types'

export const landingData: ILanding = {
	id: 'user',
	title_desc: 'Это искусство и наука создания веб-сайтов, которые помогут тебе осуществить свои идеи в реальность, сделать твою онлайн-жизнь ярче, эффективнее и комфортнее.',
	about_desc: 'В мире цифрового искусства я рисую веб-сайты, придавая им форму и жизнь. Моя миссия - создавать привлекательные и функциональные интерфейсы, которые вдохновляют и увлекают пользователей.',
	projects: [
		{
			id: 1,
			owner: 'user',
			name: 'Cloud Strorage',
			desc: 'Крутой проект облачное хранилище',
			image: '/public/cloudstorage.png'
		},
		{
			id: 2,
			owner: 'user',
			name: 'Realty',
			desc: 'Крутой проект недвижка',
			image: '/public/интронедвижка.png',
			slides: ['../../public/квиз недвижка.png', '../../public/квиз пройден недвижка.png', '../../public/квиз финал недвижка.png']
		},
		{
			id: 3,
			owner: 'user',
			name: 'Friend Auto',
			desc: 'Крутой проект френдавто',
			image: '/public/френдавто.png'
		},
		{
			id: 4,
			owner: 'user',
			name: 'Lorem',
			desc: 'Крутой проект lorem',
			image: '/public/визитка.png'
		},
		{
			id: 5,
			owner: 'user',
			name: 'Pet',
			desc: 'Крутой проект pet',
			image: '/public/pet.png'
		},
		{
			id: 6,
			owner: 'user',
			name: 'Крутой проект Vortex',
			desc: 'Крутой проект Pet',
			image: '/public/Frame4.jpg'
		}
	],
	stack: [
		{
			id: 1,
			name: 'HTML',
			image: '../../public/html-5-svgrepo-com 1.svg'
		},
		{
			id: 2,
			name: 'CSS',
			image: '../../public/css-3-svgrepo-com 1.svg'
		},
		{
			id: 3,
			name: 'Sass/Scss',
			image: '../../public/scss2-svgrepo-com 1.svg'
		},
		{
			id: 4,
			name: 'JavaScript',
			image: '../../public/js-official-svgrepo-com 1.svg'
		},
		{
			id: 5,
			name: 'TypeScript',
			image: '../../public/typescript-icon-svgrepo-com 1.svg'
		},
		{
			id: 6,
			name: 'React',
			image: '../../public/react-svgrepo-com 1.svg'
		},
		{
			id: 7,
			name: 'Redux Toolkit',
			image: '../../public/redux-svgrepo-com 1.svg'
		},
		{
			id: 8,
			name: 'Figma',
			image: '../../public/figma-svgrepo-com 1.svg'
		},
		{
			id: 9,
			name: 'Git',
			image: '../../public/git-svgrepo-com 1.svg'
		},
	]
}


export default landingData