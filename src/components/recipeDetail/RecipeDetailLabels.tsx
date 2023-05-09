import { RecipeDetailLabelsProps } from '../helpers/types'
import RecipeDetailLabel from './RecipeDetailLabel'
import styles from './RecipeDetailLabels.module.css'

const RecipeDetailLabels: React.FC<RecipeDetailLabelsProps> = ({
  cautions,
  dietLabels,
  healthLabels,
}) => {
  return (
    <div className={styles.container}>
      <RecipeDetailLabel label="Health labels:" labelList={healthLabels} />
      <RecipeDetailLabel label="Diet labels:" labelList={dietLabels} />
      <RecipeDetailLabel label="Cautions:" labelList={cautions} />
    </div>
  )
}

export default RecipeDetailLabels
