import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'

import ProductItem from './ProductsItem'
import { productsActions } from '../../store/products-slice'
import { InitialProductState } from '../helpers/initialStates'
import { InitialProductStateType } from '../helpers/types'
import styles from './ProductsList.module.css'

const ProductsList = () => {
  const [products, setProducts] = useState(InitialProductState)
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
  const loaderData = useLoaderData()
  const productsList = useSelector<any, InitialProductStateType>(
    (state) => state.products
  )

  useEffect(() => {
    dispatch(productsActions.getProductByName(loaderData))
  }, [loaderData])

  useEffect(() => {
    if (Array.isArray(productsList)) {
      setProducts(productsList)
    }
  }, [productsList])

  return (
    <ul className={styles.list}>
      {products.map((item) => (
        <ProductItem productName={item.ingredient} />
      ))}
    </ul>
  )
}

export default ProductsList
