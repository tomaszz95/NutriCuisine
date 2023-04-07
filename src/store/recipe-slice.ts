import { createSlice } from '@reduxjs/toolkit'

const recipeSlice = createSlice({
	name: 'recipe',
	initialState: [],
	reducers: {
		getRecipes(state: any, action: any) {
			return action.payload
		},
		filterRecipes(state: any, action: any) {
			return action.payload
		},
	},
})

export const recipeActions = recipeSlice.actions
export default recipeSlice
