import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'

import { shoppingActions } from '../../store/shopping-slice'
import { ProductItemTypes } from '../helpers/types'
import styles from './ProductsItem.module.css'

const ProductItem: React.FC<ProductItemTypes> = ({
  productName,
  productImage,
  productKcal,
  productCarbo,
  productFat,
  productProtein,
  productFiber,
  shoppingList,
}) => {
  const [isInShoppingList, setIsInShoppingList] = useState(false)
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
  const loginStatus = useSelector<any, boolean>((state) => state.login)

  useEffect(() => {
    if (shoppingList.length < 1) return

    shoppingList.map((product) => {
      if (product.productName.toLowerCase() === productName.toLowerCase()) {
        setIsInShoppingList(true)
      }
    })
  }, [])

  const handleShoppingList = () => {
    if (!isInShoppingList) {
      dispatch(shoppingActions.addProductToList({ productName, bought: false }))
    } else if (isInShoppingList) {
      dispatch(shoppingActions.deleteProduct(productName))
    }

    setIsInShoppingList(() => !isInShoppingList)
  }

  let image
  if (productImage === undefined) {
    image =
      'https://t3.ftcdn.net/jpg/05/38/52/48/360_F_538524834_KTWCegIa69mIWDLVx6Sc6tdkW6beiMBR.jpg'
  } else {
    image = productImage
  }

  const kcal = productKcal === undefined ? '0' : Number(productKcal).toFixed()
  const carbo =
    productCarbo === undefined ? '0.00' : Number(productCarbo).toFixed(2)
  const protein =
    productProtein === undefined ? '0.00' : Number(productProtein).toFixed(2)
  const fat = productFat === undefined ? '0.00' : Number(productFat).toFixed(2)
  const fiber =
    productFiber === undefined ? '0.00' : Number(productFiber).toFixed(2)

  return (
    <li className={styles.card}>
      <button
        aria-label="Add / remove products from shopping list button"
        className={styles.button}
        onClick={handleShoppingList}
        disabled={!loginStatus}
      >
        {isInShoppingList ? (
          <i className="fa-solid fa-check" />
        ) : (
          <i className="fa-solid fa-cart-shopping" />
        )}
      </button>
      <img src={image} className={styles.image} alt={productName} />
      <h3 className={styles.title}>{productName}</h3>
      <div className={styles.container}>
        <div className={styles.box}>
          <i className="fa-solid fa-weight-scale" />
          <span>Kcal:</span>
          <b>{kcal}kcal / 100g</b>
        </div>
        <div className={styles.box}>
          <i className="fa-solid fa-cookie"></i>
          <span>Carbohydrates:</span>
          <b>{carbo}g</b>
        </div>
        <div className={styles.box}>
          <i className="fa-solid fa-drumstick-bite"></i>
          <span>Protein:</span>
          <b>{protein}g</b>
        </div>
        <div className={styles.box}>
          <i className="fa-solid fa-burger"></i>
          <span>Fat:</span>
          <b>{fat}g</b>
        </div>
        <div className={styles.box}>
          <i className="fa-solid fa-wheat-awn"></i>
          <span>Fiber:</span>
          <b>{fiber}g</b>
        </div>
      </div>
    </li>
  )
}

export default ProductItem
