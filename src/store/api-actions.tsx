import { recipesActions } from './recipes-slice'
import { caloriesActions } from './calories-slice'
import { json } from 'react-router-dom'

export const fetchIngredients = (itemName: string) => {
  return async (dispatch: any) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.edamam.com/api/food-database/v2/parser?app_id=${
          import.meta.env.VITE_CALORIESID
        }&app_key=${
          import.meta.env.VITE_CALORIESKEY
        }&ingr=${itemName}&nutrition-type=cooking`
      )

      const data = await response.json()
      return data
    }

    try {
      const cartData = await fetchData()
      const importantData = cartData.hints.map((item: any) => {
        return {
          ingredient: item.food.label,
          image: item.food.image,
          carbohydrates: item.food.nutrients.CHOCDF,
          fat: item.food.nutrients.FAT,
          protein: item.food.nutrients.PROCNT,
          fiber: item.food.nutrients.FIBTG,
        }
      })
      dispatch(caloriesActions.getIngredientByName(importantData))
    } catch (error) {
      throw json({ message: 'Could not fetch ingredient.' }, { status: 500 })
    }
  }
}

export const fetchRecipes = (itemName: string) => {
  console.log('ta')
}
