import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import LoginLayout from '../layouts/LoginLayout'
import styles from './SignupPage.module.css'

const SignUpPage = () => {
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const passwordRef2 = useRef<HTMLInputElement>(null)
  const [usernameError, setUsernameError] = useState<boolean>(false)
  const [passwordError, setPasswordError] = useState<boolean>(false)
  const [password2Error, setPassword2Error] = useState<boolean>(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (usernameRef.current === null) return
    if (passwordRef.current === null) return
    if (passwordRef2.current === null) return

    usernameRef.current.value.length < 5
      ? setUsernameError(true)
      : setUsernameError(false)

    passwordRef.current.value.length < 8
      ? setPasswordError(true)
      : setPasswordError(false)

    passwordRef.current.value !== passwordRef2.current.value
      ? setPassword2Error(true)
      : setPassword2Error(false)

    if (
      usernameRef.current.value.length >= 5 &&
      passwordRef.current.value.length >= 8 &&
      passwordRef.current.value === passwordRef2.current.value
    ) {
      usernameRef.current.value = ''
      passwordRef.current.value = ''
      passwordRef2.current.value = ''
    }
  }
  return (
    <div className={styles.container}>
      <LoginLayout />
      <form className={styles.form} onSubmit={handleLogin}>
        <h2 className={styles.formHeader}>Register!</h2>
        <input
          className={styles.formInput}
          placeholder="Username.."
          type="text"
          ref={usernameRef}
        />
        {usernameError && (
          <p className={`${styles.error}`}>
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
        <input
          className={styles.formInput}
          placeholder="Repeat password.."
          type="password"
          ref={passwordRef2}
        />
        {password2Error && (
          <p className={styles.error}>Passwords must be the same!</p>
        )}
        <button type="submit" className={styles.formButton}>
          Register
        </button>
      </form>
      <div className={styles.redirect}>
        <p className={styles.redirectText}>Already have an account?</p>
        <Link to="/login" className={styles.redirectLink}>
          Login
        </Link>
      </div>
    </div>
  )
}

export default SignUpPage
