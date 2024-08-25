import { configureStore } from '@reduxjs/toolkit'
import projectsReducer from './projects/projects.slice.ts'
import stackReducer from './stack/stack.slice.ts'

export const store = configureStore({
	reducer: {
		projects: projectsReducer,
		stack: stackReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch