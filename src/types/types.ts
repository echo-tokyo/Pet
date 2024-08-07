export interface IProjects {
	id: number
	name: string
	desc: string
	image: string
}

export interface IStack {
	id: number
	name: string
	image: string
}

export interface IProjectData {
	name: string
	desc?: string
	image?: string | null | ArrayBuffer
}