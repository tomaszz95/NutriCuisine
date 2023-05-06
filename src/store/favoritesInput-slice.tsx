import { createSlice } from '@reduxjs/toolkit'

const favoritesInputSlice = createSlice({
  name: 'favoritesInput',
  initialState: '',
  reducers: {
    changeFavoriteInput(_, action) {
      return action.payload
    },
  },
})

export const favoritesInputActions = favoritesInputSlice.actions
export default favoritesInputSlice
