import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import landingData from '../../data/landing'
import { IProjects } from '../../types/types'

const initialState = {
	landingData: landingData,
}

const landingSlice = createSlice({
	name: 'landingData',
	initialState,
	reducers: {
		setProjectsList: (state, action: PayloadAction<IProjects[]>) => {
			state.landingData.projects = action.payload
		},
		slideRemove: (state, action) => {
			const currentEl = state.landingData.projects.find(
				el => el.id == action.payload[0].id
			)
			currentEl?.slides?.splice(action.payload[1], 1)
		},
		setStackList: (state, action) => {
			state.landingData.stack = action.payload
		},
	},
})

export const { setProjectsList, slideRemove, setStackList } = landingSlice.actions
export default landingSlice.reducer
