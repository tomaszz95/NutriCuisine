import RecipeDetailIconItem from './RecipeDetailIconItem'
import { RecipeDetailIconListProps } from '../helpers/types'
import styles from './RecipeDetailIconList.module.css'

const RecipeDetailIconList: React.FC<RecipeDetailIconListProps> = ({
  totalCalories,
  totalWeight,
  cuisine,
  mealType,
  totalTime,
}) => {
  const calories100g = ((+totalCalories / +totalWeight) * 100).toFixed()
  const cuisineFinal = cuisine.charAt(0).toUpperCase() + cuisine.slice(1)
  const mealTypeFinal = mealType.charAt(0).toUpperCase() + mealType.slice(1)
  const totalTimeFinal = totalTime === '0' ? '10' : totalTime
  return (
    <div className={styles.detail}>
      <RecipeDetailIconItem
        iconClass="fa-solid fa-pizza-slice"
        headingText="Total calories:"
        property={`${totalCalories}kcal`}
      />
      <RecipeDetailIconItem
        iconClass="fa-solid fa-scale-balanced"
        headingText="Total weight:"
        property={`${totalWeight}g`}
      />
      <RecipeDetailIconItem
        iconClass="fa-solid fa-clock"
        headingText="Total time:"
        property={`${totalTimeFinal}min`}
      />
      <RecipeDetailIconItem
        iconClass="fa-solid fa-drumstick-bite"
        headingText="Kcal per 100g:"
        property={`${calories100g}kcal`}
      />
      <RecipeDetailIconItem
        iconClass="fa-solid fa-map-location"
        headingText="Cuisine:"
        property={cuisineFinal}
      />
      <RecipeDetailIconItem
        iconClass="fa-solid fa-utensils"
        headingText="Meal type:"
        property={mealTypeFinal}
      />
    </div>
  )
}

export default RecipeDetailIconList
