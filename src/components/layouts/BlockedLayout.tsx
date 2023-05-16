import { Link } from 'react-router-dom'
import styles from './BlockedLayout.module.css'

const BlockedLayout = () => {
  return (
    <div className={styles.container}>
      <i className="fa-solid fa-lock"></i>
      <p className={styles.text}>
        If you want to see this content you must be <b>logged in!</b>
      </p>
      <div className={styles.links}>
        {' '}
        <Link to="/login" className={styles.link}>
          Log in
        </Link>
        <Link to="/signup" className={styles.link}>
          Create an account
        </Link>
      </div>
    </div>
  )
}

export default BlockedLayout
