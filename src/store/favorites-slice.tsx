import { createSlice } from '@reduxjs/toolkit'
import { FavoriteItemTypes } from '../components/helpers/types'

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [] as FavoriteItemTypes[],
  reducers: {
    addRecipesFromStorage(_, action) {
      return action.payload
    },

    addRecipeToList(state, action) {
      const existingRecipeIndex = state.findIndex(
        (el) => el.recipeName === action.payload.recipeName
      )

      if (existingRecipeIndex === -1) {
        state.push(action.payload)
      }
    },

    changeRecipeCheckStatus(state, action) {
      return state.map((recipe) => {
        if (recipe.recipeName === action.payload.recipeName) {
          return {
            recipeName: action.payload.recipeName,
            recipeImage: action.payload.recipeImage,
            recipeIngredients: action.payload.recipeIngredients,
            recipeId: action.payload.recipeId,
          }
        } else {
          return recipe
        }
      })
    },
    
    deleteRecipe(state, action) {
      const updatedRecipes = state.filter(
        (product) => product.recipeName !== action.payload
      )
      return updatedRecipes
    },
  },
})

export const favoritesActions = favoritesSlice.actions
export default favoritesSlice
