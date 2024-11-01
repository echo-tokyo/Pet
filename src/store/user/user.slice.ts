import { createSlice } from '@reduxjs/toolkit'
import userData from '../../data/user'

const initialState = {
	userData: userData
}

const userSlice = createSlice({
	name: 'userData',
	initialState,
	reducers: {
		setUserData: (state, action) => {
			state.userData = action.payload
		}
	}
})

export const {setUserData} = userSlice.actions
export default userSlice.reducer