import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'

import useLocalStorage from '../hooks/useLocalStorage'
import { FavoriteItemTypes } from '../helpers/types'
import { favoritesActions } from '../../store/favorites-slice'
import styles from './FavoriteItem.module.css'

const FavoriteItem: React.FC<FavoriteItemTypes> = ({
  recipeName,
  recipeImage,
  recipeIngredients,
  recipeId,
}) => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
  const favoritesList = useSelector<any, FavoriteItemTypes[]>(
    (state) => state.favorites
  )
  const { removeValue } = useLocalStorage()

  const deleteProductHandler = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLButtonElement
    dispatch(favoritesActions.deleteRecipe(target.previousSibling!.textContent))

    if (favoritesList.length === 1) {
      removeValue('favorites')
    }
  }

  return (
    <li className={styles.item}>
     
      <button
        className={styles.button}
        onClick={deleteProductHandler}
        aria-label="Remove item from shopping list"
      >
        X
      </button>
    </li>
  )
}

export default FavoriteItem
