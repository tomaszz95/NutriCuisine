import { createSlice } from '@reduxjs/toolkit'

import { InitialProductState } from '../components/helpers/initialStates'

const productsSlice = createSlice({
  name: 'products',
  initialState: InitialProductState,

  reducers: {
    getProductByName(_, action) {
      const fetchedData = action.payload.hints.map((item: any) => {
        return {
          ingredient: item.food.label,
          image: item.food.image,
          kcal: item.food.nutrients.ENERC_KCAL,
          carbohydrates: item.food.nutrients.CHOCDF,
          fat: item.food.nutrients.FAT,
          protein: item.food.nutrients.PROCNT,
          fiber: item.food.nutrients.FIBTG,
          id: item.food.foodId,
        }
      })
      return fetchedData
    },
  },
})

export const productsActions = productsSlice.actions
export default productsSlice
