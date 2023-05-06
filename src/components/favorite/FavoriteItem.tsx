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

  const deleteRecipeHandler = () => {
    dispatch(favoritesActions.deleteRecipe(recipeName))

    if (favoritesList.length === 1) {
      removeValue('favorites')
    }
  }

  let image
  if (recipeImage === undefined) {
    image =
      'https://t3.ftcdn.net/jpg/05/38/52/48/360_F_538524834_KTWCegIa69mIWDLVx6Sc6tdkW6beiMBR.jpg'
  } else {
    image = recipeImage
  }

  return (
    <li className={styles.item}>
      <img src={image} className={styles.image} alt={recipeName} />
      <h3 className={styles.title}>{recipeName}</h3>
      <div className={styles.container}>
        <div className={styles.box}>
          <span className={styles.ingredients}>Ingredients:</span>
          {recipeIngredients.map((recipe, indx) => (
            <div key={recipeId + indx} className={styles.ingredient}>
              {recipe}
            </div>
          ))}
        </div>
        <div className={styles.buttons}>
          <a className={styles.info} aria-label="Recipe details page">
            Click for more info
          </a>
          <button
            className={styles.delete}
            onClick={deleteRecipeHandler}
            aria-label="Remove item from favorites"
          >
            Delete from favorites
          </button>
        </div>
      </div>
    </li>
  )
}

export default FavoriteItem
