import { RecipeDetailLabelProps } from '../helpers/types'
import styles from './RecipeDetailLabel.module.css'

const RecipeDetailLabel: React.FC<RecipeDetailLabelProps> = ({
  label,
  labelList,
}) => {
  let labelClass: string
  if (label === 'Health labels:') {
    labelClass = styles.health
  } else if (label === 'Diet labels:') {
    labelClass = styles.diet
  } else if (label === 'Cautions:') {
    labelClass = styles.cautions
  }

  return (
    <ul className={styles.box}>
      <h4 className={styles.label}>{label}</h4>
      {labelList.map((item) => (
        <li className={`${styles.item} ${labelClass}`} key={styles.item}>
          {item}
        </li>
      ))}
      {labelList.length < 1 ? <span className={styles.empty}>No labels</span> : null}
    </ul>
  )
}

export default RecipeDetailLabel
