import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import projects from '../../data/projects'
import { IProjects } from '../../types/types'

const initialState = {
	projectsList: projects
}

const projectsSlice = createSlice({
	name: 'projects',
	initialState,
	reducers: {
		setProjectsList: (state, action: PayloadAction<IProjects[]>) => {
			state.projectsList = action.payload
		},
		slideRemove: (state, action) => {
			const currentEl = state.projectsList.find(el => el.id == action.payload[0].id)
			currentEl?.slides?.splice(action.payload[1], 1)
		}
	}
})

export const {setProjectsList, slideRemove} = projectsSlice.actions
export default projectsSlice.reducer