import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'

import RecipeItem from './RecipeItem'
import { recipesActions } from '../../store/recipes-slice'
import { InitialRecipesStateTypes } from '../helpers/types'
import styles from './RecipeList.module.css'

const RecipeList = () => {
  const loaderData = useLoaderData()
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
  const recipesList = useSelector<any, InitialRecipesStateTypes>(
    (state) => state.recipes
  )

  // const shoppingList = useSelector<any, InitialShoppingTypes[]>(
  //   (state) => state.shopping
  // )

  useEffect(() => {
    dispatch(recipesActions.getRecipeByName(loaderData))
  }, [])

  return (
    <ul className={styles.list}>
      {recipesList.map((item) => (
        <RecipeItem
          recipeName={item.name}
          recipeImage={item.image}
          recipeCalories={item.calories}
          recipeWeight={item.weight}
          recipeCuisine={item.cuisine}
          recipeIngredients={item.ingredients}
          recipeType={item.mealType}
          recipeId={item.id}
          key={item.id}
        />
      ))}
      {recipesList.length < 1 && (
        <p className={styles.error}>No recipe with this name!</p>
      )}
    </ul>
  )
}

export default RecipeList
