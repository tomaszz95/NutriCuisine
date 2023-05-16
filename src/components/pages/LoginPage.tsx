import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'

import LoginLayout from '../layouts/LoginLayout'
import { loginActions } from '../../store/login-slice'
import styles from './LoginPage.module.css'

const LoginPage = () => {
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const [usernameError, setUsernameError] = useState<boolean>(false)
  const [passwordError, setPasswordError] = useState<boolean>(false)
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (usernameRef.current === null) return
    if (passwordRef.current === null) return

    usernameRef.current.value.length < 5
      ? setUsernameError(true)
      : setUsernameError(false)

    passwordRef.current.value.length < 8
      ? setPasswordError(true)
      : setPasswordError(false)

    if (
      usernameRef.current.value.length >= 5 &&
      passwordRef.current.value.length >= 8
    ) {
      dispatch(loginActions.changeLoginState(true))
      usernameRef.current.value = ''
      passwordRef.current.value = ''
    }
  }
  return (
    <div className={styles.container}>
      <LoginLayout />
      <form className={styles.form} onSubmit={handleLogin}>
        <h2 className={styles.formHeader}>Welcome!</h2>
        <input
          className={styles.formInput}
          placeholder="Username.."
          type="text"
          ref={usernameRef}
        />
        {usernameError && (
          <p className={styles.error}>
            Your username must be at least 5 letters long!
          </p>
        )}
        <input
          className={styles.formInput}
          placeholder="Password.."
          type="password"
          ref={passwordRef}
        />
        {passwordError && (
          <p className={styles.error}>
            Your password must be at least 8 letters long!
          </p>
        )}
        <button type="submit" className={styles.formButton}>
          Login
        </button>
      </form>
      <div className={styles.redirect}>
        <p className={styles.redirectText}>Don't have an account?</p>
        <Link to="/signup" className={styles.redirectLink}>
          Register
        </Link>
      </div>
    </div>
  )
}

export default LoginPage
