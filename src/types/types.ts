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