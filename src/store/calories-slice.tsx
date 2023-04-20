import { createSlice } from '@reduxjs/toolkit'

const caloriesSlice = createSlice({
  name: 'calories',
  initialState: {
    ingredient: '',
    image: '',
    carbohydrates: '',
    fat: '',
    protein: '',
    fiber: '',
  },
  reducers: {
    getIngredientByName(_, action) {
      return action.payload
    },
  },
})

export const caloriesActions = caloriesSlice.actions
export default caloriesSlice
