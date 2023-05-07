import { RecipeDetailItemProps } from '../helpers/types'

const RecipeDetailItem: React.FC<RecipeDetailItemProps> = ({ recipeData }) => {
  console.log(recipeData.name)

  return <div>Item</div>
}

export default RecipeDetailItem
