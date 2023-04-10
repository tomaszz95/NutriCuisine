import { NavLink } from 'react-router-dom'

import styles from './FooterLayout.module.css'

const FooterLayout = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to="/menu">
        <i className="fa-solid fa-utensils"></i>
        <span>Menu</span>
      </NavLink>
      <NavLink to="/ingredients">
        <i className="fa-solid fa-carrot"></i>
        <span>Ingredients</span>
      </NavLink>
      <NavLink to="/favorites">
        <i className="fa-solid fa-star"></i>
        <span>Favorites</span>
      </NavLink>
      <NavLink to="/shopping_list">
        <i className="fa-solid fa-cart-shopping"></i>
        <span>Shopping list</span>
      </NavLink>
    </nav>
  )
}

export default FooterLayout
