import { configureStore } from '@reduxjs/toolkit'

import recipes from './recipes-slice'
import products from './products-slice'
import favorites from './favorites-slice'
import favoritesInput from './favoritesInput-slice'
import shopping from './shopping-slice'

const store = configureStore({
  reducer: {
    recipes: recipes.reducer,
    products: products.reducer,
    favorites: favorites.reducer,
    favoritesInput: favoritesInput.reducer,
    shopping: shopping.reducer,
  },
})

export default store
