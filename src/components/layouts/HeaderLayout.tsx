import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'

import useFirebaseAuth from '../hooks/useFirebaseAuth'
import auth from '../../firebase'
import { HeaderLayoutTypes } from '../helpers/types'
import styles from './HeaderLayout.module.css'

const HeaderLayout: React.FC<HeaderLayoutTypes> = ({ titleText }) => {
  const navigate = useNavigate()
  const isLogged = useFirebaseAuth()

  const handleLoginButton = () => {
    if (isLogged) {
      signOut(auth)
        .then(() => navigate('/recipes'))
        .catch((error) => console.log(error))
    } else {
      navigate('/login')
    }
  }

  return (
    <>
      <div className={styles.shadow} />
      <div className={styles.container}>
        <i className={`fa-solid fa-scroll ${styles.logo}`}></i>
        <h1 className={styles.title}>{titleText}</h1>
        <button
          type="button"
          className={styles.button}
          aria-label={`Click to ${isLogged ? 'loginout' : 'login'}`}
          onClick={handleLoginButton}
        >
          {isLogged ? (
            <i className={`fa-solid fa-right-to-bracket ${styles.icon}`} />
          ) : (
            <i className={`fa-solid fa-circle-user ${styles.icon}`} />
          )}
        </button>
      </div>
    </>
  )
}

export default HeaderLayout
