import { configureStore } from '@reduxjs/toolkit'
import landingReducer from './landing/landing.slice.ts'
import userReducer from './user/user.slice.ts'

export const store = configureStore({
	reducer: {
		landing: landingReducer,
		user: userReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch