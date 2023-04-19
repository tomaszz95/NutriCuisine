import { createSlice } from '@reduxjs/toolkit'

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    addFavoriteRecipe(state: any, action: any) {
      return action.payload
    },
    removeFavoriteRecipe(state: any, action: any) {
      return action.payload
    },
  },
})

export const favoritesActions = favoritesSlice.actions
export default favoritesSlice
