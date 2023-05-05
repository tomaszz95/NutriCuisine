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
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
  const { addValue, getValue } = useLocalStorage()

  useEffect(() => {
    const storageValue = getValue('favorite')
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

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {recipeListFixed.map((item) => (
          <FavoriteItem
            recipeName={item.recipeName}
            recipeImage={item.recipeImage}
            recipeIngredients={item.recipeIngredients}
            recipeId={item.recipeId}
            key={item.recipeId}
          />
        ))}
      </ul>
    </div>
  )
}

export default FavoriteList
