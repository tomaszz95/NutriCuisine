import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'

import useLocalStorage from '../hooks/useLocalStorage'
import { favoritesActions } from '../../store/favorites-slice'
import { FavoriteItemTypes } from '../helpers/types'
import FavoriteItem from './FavoriteItem'
import styles from './FavoriteList.module.css'

const FavoriteList = () => {
  const [recipeListFixed, setRecipeListFixed] = useState<FavoriteItemTypes[]>(
    []
  )
  const recipesList = useSelector<any, FavoriteItemTypes[]>(
    (state) => state.favorites
  )
  const favoritesInputValue = useSelector<any, ''>(
    (state) => state.favoritesInput
  )
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
  const { addValue, getValue } = useLocalStorage()

  useEffect(() => {
    const storageValue = getValue('favorites')
    if (recipesList.length === 0) {
      if (storageValue === undefined) {
        setRecipeListFixed([])
      } else {
        dispatch(favoritesActions.addRecipesFromStorage(storageValue))
        setRecipeListFixed(storageValue)
      }
    } else {
      setRecipeListFixed(recipesList)
      addValue('favorites', recipesList)
    }
  }, [recipesList])

  const filteredFavList = recipeListFixed.filter((item) => {
    return item.recipeName
      .toLowerCase()
      .includes(favoritesInputValue.toLowerCase())
  })
  console.log(recipesList)
  return (
    <ul className={styles.list}>
      {filteredFavList.map((item) => (
        <FavoriteItem
          recipeName={item.recipeName}
          recipeImage={item.recipeImage}
          recipeIngredients={item.recipeIngredients}
          recipeId={item.recipeId}
          key={item.recipeId}
        />
      ))}
      {recipeListFixed.length < 1 && (
        <p className={styles.error}>No favorite recipes yet!</p>
      )}
      {filteredFavList.length < 1 && (
        <p className={styles.error}>No recipe with this name!</p>
      )}
    </ul>
  )
}

export default FavoriteList
