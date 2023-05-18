import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import { signOut } from 'firebase/auth'

import auth from '../../firebase'
import { loginActions } from '../../store/login-slice'
import { HeaderLayoutTypes } from '../helpers/types'
import styles from './HeaderLayout.module.css'

const HeaderLayout: React.FC<HeaderLayoutTypes> = ({ titleText }) => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
  const loginStatus = useSelector<any, boolean>((state) => state.login)
  const navigate = useNavigate()

  const handleLoginButton = () => {
    if (loginStatus) {
      signOut(auth)
        .then(() => navigate('/recipes'))
        .then(() => dispatch(loginActions.changeLoginState(false)))
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
          aria-label={`Click to ${loginStatus ? 'loginout' : 'login'}`}
          onClick={handleLoginButton}
        >
          {loginStatus ? (
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
