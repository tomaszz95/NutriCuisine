import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'

import ProductItem from './ProductsItem'
import { productsActions } from '../../store/products-slice'
import { InitialProductStateType, InitialShoppingType } from '../helpers/types'
import styles from './ProductsList.module.css'

const ProductsList = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
  const loaderData = useLoaderData()
  const productsList = useSelector<any, InitialProductStateType>(
    (state) => state.products
  )
  const shoppingList = useSelector<any, InitialShoppingType[]>(
    (state) => state.shopping
  )

  useEffect(() => {
    dispatch(productsActions.getProductByName(loaderData))
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
