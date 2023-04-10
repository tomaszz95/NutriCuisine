import { NavLink } from 'react-router-dom'

import styles from './FooterLayout.module.css'

const FooterLayout = () => {
  return (
    <nav className={styles.nav}>
      <NavLink
        to="/menu"
        className={({ isActive }) => (isActive ? `${styles.active}` : '')}
      >
        <i className="fa-solid fa-utensils"></i>
        <span>Menu</span>
      </NavLink>
      <NavLink
        to="/ingredients"
        className={({ isActive }) => (isActive ? `${styles.active}` : '')}
      >
        <i className="fa-solid fa-carrot"></i>
        <span>Ingredients</span>
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

export default FooterLayout
