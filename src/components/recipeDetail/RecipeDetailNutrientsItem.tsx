import styles from './RecipeDetailNutrientsItem.module.css'

const RecipeDetailNutrientsItem = ({ nutrientsList }: any) => {
  return (
    <ul className={styles.list}>
      {Object.keys(nutrientsList).map((key) => {
        const proggresClass = `${styles.progressBar} ${
          nutrientsList[key].quantity.toFixed() < 33
            ? styles.red
            : nutrientsList[key].quantity.toFixed() < 66
            ? styles.yellow
            : nutrientsList[key].quantity.toFixed() < 150
            ? styles.green
            : styles.blue
        }`

        const proggresWidth =
          nutrientsList[key].quantity.toFixed() >= 100
            ? 40
            : (nutrientsList[key].quantity.toFixed() / 100) * 40

        return (
          <li key={Math.random()} className={styles.item}>
            <span className={styles.nutrientName}>
              {nutrientsList[key].label}
            </span>
            <div className={styles.box}>
              <b className={styles.nutrientValue}>
                {nutrientsList[key].quantity.toFixed()}
                {nutrientsList[key].unit}
              </b>
              <div className={styles.colorBar}>
                <div
                  className={proggresClass}
                  style={{ width: `${proggresWidth}px` }}
                ></div>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default RecipeDetailNutrientsItem
