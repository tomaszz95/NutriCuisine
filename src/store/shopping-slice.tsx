import { createSlice } from '@reduxjs/toolkit'

import { ShoppingItemType } from '../components/helpers/types'

const shoppingSlice = createSlice({
  name: 'shopping',
  initialState: [] as ShoppingItemType[],
  reducers: {
    addProductToList(state, action) {
      const existingItemIndex = state.findIndex(
        (el) =>
          el.prodName === action.payload.prodName &&
          el.prodImg === action.payload.prodImg
      )

      if (existingItemIndex === -1) {
        state.push(action.payload)
      }
    },
  },
})

export const shoppingActions = shoppingSlice.actions
export default shoppingSlice
