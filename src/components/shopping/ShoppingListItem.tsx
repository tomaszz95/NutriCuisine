import { ShoppingItemType } from '../helpers/types'
import styles from './ShoppingListItem.module.css'

const ShoppingListItem: React.FC<ShoppingItemType> = ({
  prodImg,
  prodName,
}) => {
  return (
    <div>
      <img src={prodImg} />
      <h3>{prodName}</h3>
    </div>
  )
}

export default ShoppingListItem
