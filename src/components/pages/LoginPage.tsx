import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'

import auth from '../../firebase'
import LoginLayout from '../layouts/LoginLayout'
import styles from './LoginPage.module.css'

const LoginPage = () => {
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const [emailError, setEmailError] = useState<boolean>(false)
  const [passwordError, setPasswordError] = useState<boolean>(false)
  const [loginError, setLoginError] = useState<boolean>(false)
  const navigate = useNavigate()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    if (emailRef.current === null) return
    if (passwordRef.current === null) return

    emailRef.current.value.includes('@')
      ? setEmailError(false)
      : setEmailError(true)

    passwordRef.current.value.length < 8
      ? setPasswordError(true)
      : setPasswordError(false)

    if (
      emailRef.current.value.includes('@') &&
      passwordRef.current.value.length >= 8
    ) {
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then(() => {
          emailRef.current!.value = ''
          passwordRef.current!.value = ''
          setLoginError(false)
          navigate('/recipes')
        })
        .catch(() => setLoginError(true))
    }
  }
  
  return (
    <div className={styles.container}>
      <LoginLayout />
      <form className={styles.form} onSubmit={handleLogin}>
        <h2 className={styles.formHeader}>Welcome!</h2>
        <input
          className={styles.formInput}
          placeholder="Email.."
          type="email"
          ref={emailRef}
          required
        />
        {emailError && (
          <p className={styles.error}>Your email must contain '@'!</p>
        )}
        <input
          className={styles.formInput}
          placeholder="Password.."
          type="password"
          ref={passwordRef}
          required
        />
        {passwordError && (
          <p className={styles.error}>
            Your password must be at least 8 letters long!
          </p>
        )}
        {loginError && (
          <p className={styles.loginError}>Wrong email or password!</p>
        )}
        <button type="submit" className={styles.formButton} aria-label='Click to log in'>
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
