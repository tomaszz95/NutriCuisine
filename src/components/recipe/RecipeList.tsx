import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import { useLoaderData } from 'react-router-dom'

import useLocalStorage from '../hooks/useLocalStorage'
import { favoritesActions } from '../../store/favorites-slice'
import { recipesActions } from '../../store/recipes-slice'
import RecipeItem from './RecipeItem'
import { InitialRecipesStateTypes, RecipeItemTypes } from '../helpers/types'
import styles from './RecipeList.module.css'

const RecipeList = () => {
  const loaderData = useLoaderData()
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
  const recipesList = useSelector<any, InitialRecipesStateTypes>(
    (state) => state.recipes
  )
  const favoriteList = useSelector<any, RecipeItemTypes[]>(
    (state) => state.favorites
  )
  const { getValue } = useLocalStorage()

  useEffect(() => {
    dispatch(recipesActions.getRecipeByName(loaderData))

    const storageValue = getValue('favorites')

    if (storageValue !== undefined) {
      dispatch(favoritesActions.addRecipesFromStorage(storageValue))
    }
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
          favoriteList={favoriteList}
        />
      ))}
      {recipesList.length < 1 && (
        <p className={styles.error}>No recipe with this name!</p>
      )}
    </ul>
  )
}

export default RecipeList
