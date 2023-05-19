import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useLocation } from 'react-router-dom'

import { InitialShoppingTypes } from '../helpers/types'
import styles from './Navigation.module.css'

const Navigation = () => {
  const location = useLocation()
  const [cartMove, setCartMove] = useState<boolean>(false)
  const productsList = useSelector<any, InitialShoppingTypes[]>(
    (state) => state.shopping
  )

  useEffect(() => {
    if (location.pathname === '/products' && productsList.length >= 1) {
      setCartMove(true)
    }

    const timeout = setTimeout(() => {
      setCartMove(false)
    }, 500)
    
    return () => clearTimeout(timeout)
  }, [productsList])

  return (
    <nav className={styles.nav}>
      <NavLink
        to="/recipes"
        className={({ isActive }) => (isActive ? `${styles.active}` : '')}
      >
        <i className="fa-solid fa-utensils"></i>
        <span>Recipes</span>
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) => (isActive ? `${styles.active}` : '')}
      >
        <i className="fa-solid fa-carrot"></i>
        <span>Products</span>
      </NavLink>
      <NavLink
        to="/favorites"
        className={({ isActive }) => (isActive ? `${styles.active}` : '')}
      >
        <i className="fa-solid fa-star"></i>
        <span>Favorites</span>
      </NavLink>
      <NavLink
        to="/shopping_list"
        className={({ isActive }) => (isActive ? `${styles.active}` : '')}
      >
        <i
          className={`fa-solid fa-cart-shopping ${
            cartMove && styles.shoppingList
          }`}
        ></i>
        <span>Shopping list</span>
      </NavLink>
    </nav>
  )
}

export default Navigation
