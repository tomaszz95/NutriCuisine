import { useSelector } from 'react-redux'

import ShoppingListItem from './ShoppingListItem'
import styles from './ShoppingList.module.css'
import { ShoppingItemTypeArr } from '../helpers/types'

const ShoppingList = () => {
  const productsList = useSelector<any, ShoppingItemTypeArr>(
    (state) => state.shopping
  )

  return (
    <ul className={styles.list}>
      {productsList.map((item) => (
        <ShoppingListItem prodImg={item.prodImg} prodName={item.prodName} />
      ))}
    </ul>
  )
}

export default ShoppingList
