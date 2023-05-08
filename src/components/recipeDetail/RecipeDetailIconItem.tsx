import { RecipeDetailIconsProps } from '../helpers/types'
import styles from './RecipeDetailIconItem.module.css'

const RecipeDetailIconitem: React.FC<RecipeDetailIconsProps> = ({
  iconClass,
  headingText,
  property,
}) => {
  return (
    <div className={styles.container}>
      <i className={iconClass} />
      <div className={styles.box}>
        <h4 className={styles.heading}>{headingText}</h4>
        <span className={styles.property}>{property}</span>
      </div>
    </div>
  )
}

export default RecipeDetailIconitem
