export interface IProjects {
	id: number
	name: string
	desc: string
	image: string 
	slides?:  string[] | undefined
}

export interface IStack {
	id: number
	name: string
	image: string
}

export interface ILanding {
	id: string
	title_desc: string
	about_desc: string
	projects: IProjects[]
	stack: IStack[]
}

export interface IUser {
	username: string
	isAdmin: boolean
}