import { configureStore } from '@reduxjs/toolkit'

import recipes from './recipes-slice'
import products from './products-slice'
import favorites from './favorites-slice'
import shopping from './shopping-slice'

const store = configureStore({
  reducer: {
    recipes: recipes.reducer,
    products: products.reducer,
    favorites: favorites.reducer,
    shopping: shopping.reducer,
  },
})

export default store
