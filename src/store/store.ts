import { configureStore } from '@reduxjs/toolkit'
import landingReducer from './landing/landing.slice.ts'

export const store = configureStore({
	reducer: {
		landing: landingReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch