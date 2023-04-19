import { createSlice } from '@reduxjs/toolkit'

const shoppingSlice = createSlice({
  name: 'shopping',
  initialState: [],
  reducers: {
    addItemToBuy(state: any, action: any) {
      return action.payload
    },
    removeItemFromBuy(state: any, action: any) {
      return action.payload
    },
  },
})

export const shoppingActions = shoppingSlice.actions
export default shoppingSlice
