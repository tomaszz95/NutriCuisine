import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import { Link } from 'react-router-dom'

import { favoritesActions } from '../../store/favorites-slice'
import { RecipeItemTypes } from '../helpers/types'
import styles from './RecipeItem.module.css'

const RecipeItem: React.FC<RecipeItemTypes> = ({
  recipeName,
  recipeImage,
  recipeCalories,
  recipeWeight,
  recipeCuisine,
  recipeIngredients,
  recipeType,
  recipeId,
  favoriteList,
}) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

  useEffect(() => {
    if (favoriteList === undefined || favoriteList.length < 1) return

    favoriteList.map((recipe) => {
      if (recipe.recipeName.toLowerCase() === recipeName.toLowerCase()) {
        setIsFavorite(true)
      }
    })
  }, [])

  const handleFavorite = () => {
    if (!isFavorite) {
      dispatch(
        favoritesActions.addRecipeToList({
          recipeName,
          recipeImage,
          recipeIngredients,
          recipeId,
        })
      )
    } else if (isFavorite) {
      dispatch(favoritesActions.deleteRecipe(recipeName))
    }

    setIsFavorite(() => !isFavorite)
  }

  let image
  if (recipeImage === undefined) {
    image =
      'https://t3.ftcdn.net/jpg/05/38/52/48/360_F_538524834_KTWCegIa69mIWDLVx6Sc6tdkW6beiMBR.jpg'
  } else {
    image = recipeImage
  }

  const kcal =
    recipeCalories === undefined ? '0' : Number(recipeCalories).toFixed()
  const weight =
    recipeWeight === undefined ? '0' : Number(recipeWeight).toFixed()
  const cuisine = recipeCuisine.charAt(0).toUpperCase() + recipeCuisine.slice(1)
  const type = recipeType.charAt(0).toUpperCase() + recipeType.slice(1)

  return (
    <li className={styles.card}>
      <button
        aria-label="Add / remove recipe from favorites"
        className={styles.button}
        onClick={handleFavorite}
      >
        {isFavorite ? (
          <i className="fa-solid fa-star" />
        ) : (
          <i className="fa-regular fa-star" />
        )}
      </button>
      <img src={image} className={styles.image} alt={recipeName} />
      <h3 className={styles.title}>{recipeName}</h3>
      <div className={styles.container}>
        <div className={styles.box}>
          <i className="fa-solid fa-pizza-slice" />
          <span>Total calories:</span>
          <b>{kcal}kcal</b>
        </div>
        <div className={styles.box}>
          <i className="fa-solid fa-scale-balanced" />
          <span>Total weight:</span>
          <b>{weight}g</b>
        </div>
        <div className={styles.box}>
          <i className="fa-solid fa-map-location"></i>
          <span>Cuisine:</span>
          <b>{cuisine}</b>
        </div>
        <div className={styles.box}>
          <i className="fa-solid fa-utensils"></i>
          <span>Meal type:</span>
          <b>{type}</b>
        </div>
        <div className={styles.box}>
          <span className={styles.ingredients}>Ingredients:</span>
          {recipeIngredients.map((recipe, indx) => (
            <div key={recipeId + indx} className={styles.ingredient}>
              {recipe}
            </div>
          ))}
        </div>
        <Link
          to={`/detail/${recipeId}`}
          className={styles.info}
          aria-label="Recipe details page"
        >
          Click for more info
        </Link>
      </div>
    </li>
  )
}

export default RecipeItem
