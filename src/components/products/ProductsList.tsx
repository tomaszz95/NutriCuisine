import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import { useLoaderData } from 'react-router-dom'

import useLocalStorage from '../hooks/useLocalStorage'
import { shoppingActions } from '../../store/shopping-slice'
import { productsActions } from '../../store/products-slice'
import ProductItem from './ProductsItem'
import {
  InitialProductStateTypes,
  InitialShoppingTypes,
} from '../helpers/types'
import styles from './ProductsList.module.css'

const ProductsList = () => {
  const loaderData = useLoaderData()
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
  const productsList = useSelector<any, InitialProductStateTypes>(
    (state) => state.products
  )
  const shoppingList = useSelector<any, InitialShoppingTypes[]>(
    (state) => state.shopping
  )
  const { getValue } = useLocalStorage()

  useEffect(() => {
    dispatch(productsActions.getProductByName(loaderData))

    const storageValue = getValue('list')

    if (storageValue !== undefined) {
      dispatch(shoppingActions.addProductsFromStorage(storageValue))
    }
  }, [])

  return (
    <ul className={styles.list}>
      {productsList.map((item) => (
        <ProductItem
          productName={item.ingredient}
          productImage={item.image}
          productKcal={item.kcal}
          productCarbo={item.carbohydrates}
          productFat={item.fat}
          productProtein={item.protein}
          productFiber={item.fiber}
          shoppingList={shoppingList}
          key={item.id}
        />
      ))}
      {productsList.length < 1 && (
        <p className={styles.error}>No product with this name!</p>
      )}
    </ul>
  )
}

export default ProductsList
