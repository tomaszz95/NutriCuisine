import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'

import useLocalStorage from '../hooks/useLocalStorage'
import { shoppingActions } from '../../store/shopping-slice'
import ShoppingItem from './ShoppingItem'
import { InitialShoppingTypes } from '../helpers/types'
import styles from './ShoppingList.module.css'

const ShoppingList = () => {
  const [productListFixed, setProductListFixed] = useState<
    InitialShoppingTypes[]
  >([])
  const productsList = useSelector<any, InitialShoppingTypes[]>(
    (state) => state.shopping
  )
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
  const { addValue, getValue } = useLocalStorage()

  useEffect(() => {
    const storageValue = getValue('list')
    
    if (productsList.length === 0) {
      if (storageValue === undefined) {
        setProductListFixed([])
      } else {
        dispatch(shoppingActions.addProductsFromStorage(storageValue))
        setProductListFixed(storageValue)
      }
    } else {
      setProductListFixed(productsList)
      addValue('list', productsList)
    }
  }, [productsList])

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Products to buy:</h3>
      <div className={styles.line} />
      <ul className={styles.list}>
        {productListFixed!.map((item) => (
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
