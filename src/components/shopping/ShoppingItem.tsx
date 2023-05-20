import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'

import useLocalStorage from '../hooks/useLocalStorage'
import { shoppingActions } from '../../store/shopping-slice'
import { InitialShoppingTypes } from '../helpers/types'
import styles from './ShoppingItem.module.css'

const ShoppingItem: React.FC<{ prodName: string; isBought: boolean }> = ({
  prodName,
  isBought,
}) => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
  const inputRef = useRef<HTMLInputElement>(null)
  const productsList = useSelector<any, InitialShoppingTypes[]>(
    (state) => state.shopping
  )
  const { removeValue } = useLocalStorage()

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

  const deleteProductHandler = () => {
    dispatch(shoppingActions.deleteProduct(prodName))

    if (productsList.length === 1) {
      removeValue('list')
    }
  }

  return (
    <li className={styles.item}>
      <input
        type="checkbox"
        ref={inputRef}
        onChange={inputHandler}
        checked={isBought}
        aria-label="Mark the product as purchased"
      />
      <span className={`${styles.name} ${isBought ? styles.checked : ''}`}>
        {prodName}
      </span>
      <button
        className={styles.button}
        onClick={deleteProductHandler}
        aria-label="Remove item from the shopping list"
      >
        X
      </button>
    </li>
  )
}

export default ShoppingItem
