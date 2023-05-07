import { recipesActions } from './recipes-slice'
import { productsActions } from './products-slice'
import { recipeDetailActions } from './recipeDetail-slice'
import { json } from 'react-router-dom'

export const fetchProducts = (itemName: string) => {
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
      dispatch(productsActions.getProductByName(cartData))
    } catch (error) {
      throw json({ message: 'Could not fetch products.' }, { status: 500 })
    }
  }
}

export const fetchRecipes = (recipeName: string) => {
  return async (dispatch: any) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${recipeName}&app_id=${
          import.meta.env.VITE_RECIPEID
        }&app_key=${import.meta.env.VITE_RECIPEKEY}`
      )

      const data = await response.json()
      return data
    }

    try {
      const cartData = await fetchData()
      dispatch(recipesActions.getRecipeByName(cartData))
    } catch (error) {
      throw json({ message: 'Could not fetch recipes.' }, { status: 500 })
    }
  }
}
