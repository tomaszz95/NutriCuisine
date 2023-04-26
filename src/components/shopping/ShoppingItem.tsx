import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'

import useLocalStorage from '../hooks/useLocalStorage'
import { InitialShoppingType } from '../helpers/types'
import { shoppingActions } from '../../store/shopping-slice'
import styles from './ShoppingItem.module.css'

const ShoppingListItem: React.FC<{ prodName: string; isBought: boolean }> = ({
  prodName,
  isBought,
}) => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
  const inputRef = useRef<HTMLInputElement>(null)
  const productsList = useSelector<any, InitialShoppingType[]>(
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

  const deleteProductHandler = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLButtonElement
    dispatch(shoppingActions.deleteProduct(target.previousSibling!.textContent))

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
