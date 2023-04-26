import { createSlice } from '@reduxjs/toolkit'

import { InitialShoppingType } from '../components/helpers/types'

const shoppingSlice = createSlice({
  name: 'shopping',
  initialState: [] as InitialShoppingType[],
  reducers: {
    addProductsFromStorage(_, action) {
      return action.payload
    },
    addProductToList(state, action) {
      const existingItemIndex = state.findIndex(
        (el) => el.productName === action.payload.productName
      )

      if (existingItemIndex === -1) {
        state.push(action.payload)
      }
    },
    changeProductCheckStatus(state, action) {
      return state.map((product) => {
        if (product.productName === action.payload.productName) {
          return {
            productName: action.payload.productName,
            bought: action.payload.bought,
          }
        } else {
          return product
        }
      })
    },
    deleteProduct(state, action) {
      const updatedProducts = state.filter(
        (product) => product.productName !== action.payload
      )
      return updatedProducts
    },
  },
})

export const shoppingActions = shoppingSlice.actions
export default shoppingSlice
