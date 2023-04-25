import styles from './ShoppingListItem.module.css'

const ShoppingListItem: React.FC<{ prodName: string }> = ({ prodName }) => {
  return (
    <div>
      <h3>{prodName}</h3>
    </div>
  )
}

export default ShoppingListItem
