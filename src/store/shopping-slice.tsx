import { createSlice } from '@reduxjs/toolkit'

const shoppingSlice = createSlice({
  name: 'shopping',
  initialState: [] as string[],
  reducers: {
    addProductToList(state, action) {
      const existingItemIndex = state.findIndex((el) => el === action.payload)

      if (existingItemIndex === -1) {
        state.push(action.payload)
      }
    },
  },
})

export const shoppingActions = shoppingSlice.actions
export default shoppingSlice
