export interface IProjects {
	id: number
	owner: string
	name: string
	desc: string
	slides?: ISlide[]
}

export interface ISlide{
	id: number
	slide: string
}

export interface IStack {
	id: number
	name: string
	image: string
}

export interface ILanding {
	id: number
	owner: string
	title_desc: string
	about_desc: string
	projects: IProjects[]
	stack: IStack[]
}

export interface IUser {
	username: string
	isAdmin: boolean
}