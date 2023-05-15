import styles from './LoginLayout.module.css'

const LoginLayout = () => {
  return (
    <div className={styles.logoBox}>
      <i className={`fa-solid fa-scroll ${styles.logoShape}`} />
      <h1 className={styles.logoHeader}>NutriCusine</h1>
      <p className={styles.logoText}>Find your dream food!</p>
    </div>
  )
}

export default LoginLayout
