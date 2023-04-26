import { useSelector } from 'react-redux'

import ShoppingItem from './ShoppingItem'
import { InitialShoppingType } from '../helpers/types'
import styles from './ShoppingList.module.css'

const ShoppingList = () => {
  const productsList = useSelector<any, InitialShoppingType[]>(
    (state) => state.shopping
  )

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Products to buy:</h3>
      <div className={styles.line} />
      <ul className={styles.list}>
        {productsList.map((item) => (
          <ShoppingItem
            prodName={item.productName}
            isBought={item.bought}
            key={item.productName}
          />
        ))}
      </ul>
    </div>
  )
}

export default ShoppingList
