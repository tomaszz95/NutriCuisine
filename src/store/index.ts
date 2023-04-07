import { configureStore } from '@reduxjs/toolkit'
import recipies from './recipe-slice'
import favorite from './favorite-slice'

const store = configureStore({
	reducer: {
		recipies: recipies.reducer,
		favorite: favorite.reducer,
	},
})

export default store
