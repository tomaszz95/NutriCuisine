import RecipeDetailIconList from './RecipeDetailIconList'
import RecipeDetailIngredients from './RecipeDetailIngredients'
import RecipeDetailLabels from './RecipeDetailLabels'
import { RecipeDetailProps } from '../helpers/types'
import styles from './RecipeDetail.module.css'

const RecipeDetail: React.FC<RecipeDetailProps> = ({ recipeData }) => {
  let image
  if (recipeData.image === undefined) {
    image =
      'https://t3.ftcdn.net/jpg/05/38/52/48/360_F_538524834_KTWCegIa69mIWDLVx6Sc6tdkW6beiMBR.jpg'
  } else {
    image = recipeData.image
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{recipeData.name}</h3>
      <img src={image} className={styles.image} alt={recipeData.name} />
      <RecipeDetailIconList
        totalCalories={recipeData.totalCalories}
        totalWeight={recipeData.totalWeight}
        cuisine={recipeData.cuisine}
        mealType={recipeData.mealType}
        totalTime={recipeData.totalTime}
      />
      <RecipeDetailIngredients ingredients={recipeData.ingredientLines} />
      <RecipeDetailLabels
        cautions={recipeData.cautions}
        dietLabels={recipeData.dietLabels}
        healthLabels={recipeData.healthLabels}
      />
    </div>
  )
}

export default RecipeDetail
