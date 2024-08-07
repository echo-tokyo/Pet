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
		}
	}
})

export const {setProjectsList} = projectsSlice.actions
export default projectsSlice.reducer