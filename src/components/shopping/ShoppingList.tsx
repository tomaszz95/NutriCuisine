import { useSelector } from 'react-redux'

import { ShoppingItemTypeArr } from '../helpers/types'
import ShoppingListItem from './ShoppingListItem'
import styles from './ShoppingList.module.css'

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
