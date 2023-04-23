import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'

import ProductItem from './ProductsItem'
import { productsActions } from '../../store/products-slice'
import { InitialProductStateType } from '../helpers/types'
import styles from './ProductsList.module.css'

const ProductsList = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
  const loaderData = useLoaderData()
  const productsList = useSelector<any, InitialProductStateType>(
    (state) => state.products
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
          key={item.id}
        />
      ))}
    </ul>
  )
}

export default ProductsList
