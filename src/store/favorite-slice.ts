import { createSlice } from '@reduxjs/toolkit'

const favoriteSlice = createSlice({
	name: 'favorite',
	initialState: [],
	reducers: {
		addFavorite(state: any, action: any) {
			return action.payload
		},
		removeFavorite(state: any, action: any) {
			return action.payload
		},
	},
})

export const favoriteActions = favoriteSlice.actions
export default favoriteSlice
