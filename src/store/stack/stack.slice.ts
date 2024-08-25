import { createSlice } from '@reduxjs/toolkit'
import { stack } from '../../data/projects'

const initialState = {
	stackList: stack
}

const stackSlice = createSlice({
	name: 'stack',
	initialState,
	reducers: {
		setStackList: (state, action) => {
			state.stackList = action.payload
		}
	}

})

export const {setStackList} = stackSlice.actions
export default stackSlice.reducer