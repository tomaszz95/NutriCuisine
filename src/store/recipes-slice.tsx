import { createSlice } from '@reduxjs/toolkit'

const recipesSlice = createSlice({
  name: 'recipes',
  initialState: [],
  reducers: {
    getRecipeByName(_, action) {
      const fetchedData = action.payload.hits.map((item: any) => {
        return {
          name: item.recipe.label,
          image: item.recipe.image,
          calories: item.recipe.calories,
          weight: item.recipe.totalWeight,
          cuisine: item.recipe.cuisineType[0],
          ingredients: item.recipe.ingredientLines,
          mealType: item.recipe.mealType[0],
          id: item._links.self.href.slice(38,70),
        }
      })
      return fetchedData
    },
  },
})

export const recipesActions = recipesSlice.actions
export default recipesSlice
