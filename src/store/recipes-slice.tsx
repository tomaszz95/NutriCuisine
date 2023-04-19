import { createSlice } from '@reduxjs/toolkit'

const recipesSlice = createSlice({
	name: 'recipes',
	initialState: [],
	reducers: {
		getRecipesByName(state: any, action: any) {
			return action.payload
		},
	},
})

export const recipesActions = recipesSlice.actions
export default recipesSlice
