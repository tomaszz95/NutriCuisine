import { RecipeDetailIngredientsProps } from '../helpers/types'
import styles from './RecipeDetailIngredients.module.css'

const RecipeDetailIngredients: React.FC<RecipeDetailIngredientsProps> = ({
  ingredients,
}) => {
  return (
    <ul className={styles.ingredients}>
      <b>Ingredients:</b>
      {ingredients.map((ingr) => (
        <li className={styles.ingredient} key={styles.ingredient}>
          {ingr}
        </li>
      ))}
    </ul>
  )
}

export default RecipeDetailIngredients
