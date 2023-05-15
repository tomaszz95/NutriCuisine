import { Link } from 'react-router-dom'
import { HeaderLayoutTypes } from '../helpers/types'
import styles from './HeaderLayout.module.css'

const HeaderLayout: React.FC<HeaderLayoutTypes> = ({ titleText }) => {
  return (
    <>
      <div className={styles.shadow} />
      <div className={styles.container}>
        <i className={`fa-solid fa-scroll ${styles.logo}`}></i>
        <h1 className={styles.title}>{titleText}</h1>
        <Link to="/login" className={styles.button} aria-label="Click to switch to login page">
          <i className={`fa-solid fa-circle-user ${styles.icon}`} />
        </Link>
      </div>
    </>
  )
}

export default HeaderLayout
