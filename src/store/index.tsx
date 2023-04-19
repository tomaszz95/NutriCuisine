import { configureStore } from '@reduxjs/toolkit'

import recipes from './recipes-slice'
import calories from './calories-slice'
import favorites from './favorites-slice'
import shopping from './shopping-slice'

const store = configureStore({
  reducer: {
    recipes: recipes.reducer,
    calories: calories.reducer,
    favorites: favorites.reducer,
    shopping: shopping.reducer,
  },
})

export default store