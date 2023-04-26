import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'

import { shoppingActions } from '../../store/shopping-slice'
import styles from './ShoppingItem.module.css'

const ShoppingListItem: React.FC<{ prodName: string; isBought: boolean }> = ({
  prodName,
  isBought,
}) => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
  const inputRef = useRef<HTMLInputElement>(null)

  const inputHandler = () => {
    if (inputRef.current) {
      dispatch(
        shoppingActions.changeProductCheckStatus({
          productName: prodName,
          bought: inputRef.current.checked,
        })
      )
    }
  }

  const deleteProductHandler = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLButtonElement
    dispatch(shoppingActions.deleteProduct(target.previousSibling!.textContent))
  }

  return (
    <li className={styles.item}>
      <input
        type="checkbox"
        ref={inputRef}
        onClick={inputHandler}
        checked={isBought}
      />
      <span className={`${styles.name} ${isBought ? styles.checked : ''}`}>
        {prodName}
      </span>
      <button className={styles.button} onClick={deleteProductHandler}>
        X
      </button>
    </li>
  )
}

export default ShoppingListItem
