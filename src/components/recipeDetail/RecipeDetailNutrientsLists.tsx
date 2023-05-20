import { useState } from 'react'

import RecipeDetailNutrientsItem from './RecipeDetailNutrientsItem'
import { RecipeDetailNutrientsListsTypes } from '../helpers/types'
import styles from './RecipeDetailNutrientsLists.module.css'

const RecipeDetailNutrientsLists: React.FC<RecipeDetailNutrientsListsTypes> = ({
  totalWeight,
  totalDaily,
}) => {
  const [isTotal, setIsTotal] = useState(true)
  
  let daily100g: { [key: string]: any } = {}
  Object.entries(totalDaily).forEach(([key, value]: any) => {
    daily100g[key] = {
      ...value,
      quantity: (+value.quantity / +totalWeight) * 100,
    }
  })

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Nutritional daily values*:</h4>
      <div className={styles.buttons}>
        <button
          className={`${styles.button} ${isTotal ? styles.activeButton : ''}`}
          onClick={() => setIsTotal(true)} aria-label='Click to check nutritional daily values per meal'
        >
          Per meal
        </button>
        <button
          className={`${styles.button} ${!isTotal ? styles.activeButton : ''}`}
          onClick={() => setIsTotal(false)} aria-label='Click to check nutritional daily values per 100g'
        >
          Per 100g
        </button>
      </div>
      {isTotal ? (
        <RecipeDetailNutrientsItem nutrientsList={totalDaily} />
      ) : (
        <RecipeDetailNutrientsItem nutrientsList={daily100g} />
      )}
      <small className={styles.small}>
        * Percent Daily Values are based on a 2000 calorie diet. Your daily
        values may be higher or lower depending on your calorie needs.
      </small>
    </div>
  )
}

export default RecipeDetailNutrientsLists
