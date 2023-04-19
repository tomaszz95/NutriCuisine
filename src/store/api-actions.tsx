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

      const importantData = {
        ingredient: cartData.parsed[0].food.label,
        image: cartData.parsed[0].food.image,
        carbohydrates: cartData.parsed[0].food.nutrients.CHOCDF,
        fat: cartData.parsed[0].food.nutrients.FAT,
        protein: cartData.parsed[0].food.nutrients.PROCNT,
        fiber: cartData.parsed[0].food.nutrients.FIBTG,
      }
      dispatch(caloriesActions.getIngredientByName(importantData))
    } catch (error) {
      throw json({ message: 'Could not fetch ingredients.' }, { status: 500 })
    }
  }
}

export const fetchRecipes = (itemName: string) => {
  console.log('ta')
  //   return async (dispatch: any) => {
  //     const fetchData = async () => {
  //       const response = await fetch(
  //         `https://api.edamam.com/api/food-database/v2/parser?app_id=${
  //           import.meta.env.VITE_CALORIESID
  //         }&app_key=${
  //           import.meta.env.VITE_CALORIESKEY
  //         }&ingr=${itemName}&nutrition-type=cooking`
  //       )

  //       if (!response.ok) {
  //         throw new Error('Could not fetch recipes!')
  //       }

  //       const data = await response.json()
  //       return data
  //     }

  //     try {
  //       const cartData = await fetchData()
  //       console.log(cartData)
  //       dispatch(caloriesActions.getIngredientByName(cartData))
  //     } catch (error) {
  //       throw json({ message: 'Could not fetch ingredients.' }, { status: 500 })
  //     }
  //   }
}
