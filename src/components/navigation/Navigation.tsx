import { NavLink } from 'react-router-dom'

import styles from './Navigation.module.css'

const Navigation = () => {
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
        <i className="fa-solid fa-cart-shopping"></i>
        <span>Shopping list</span>
      </NavLink>
    </nav>
  )
}

export default Navigation
