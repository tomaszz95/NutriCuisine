import { useSelector } from 'react-redux'

import ShoppingListItem from './ShoppingListItem'
import styles from './ShoppingList.module.css'

const ShoppingList = () => {
  const productsList = useSelector<any, string[]>((state) => state.shopping)

  return (
    <ul className={styles.list}>
      <h3 className={styles.heading}>Products to buy:</h3>
      {productsList.map((item: string) => (
        <ShoppingListItem prodName={item} />
      ))}
    </ul>
  )
}

export default ShoppingList
