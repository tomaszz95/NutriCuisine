import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'

import auth from '../../firebase'
import LoginLayout from '../layouts/LoginLayout'
import styles from './SignupPage.module.css'

const SignUpPage = () => {
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const passwordRef2 = useRef<HTMLInputElement>(null)
  const [emailError, setEmailError] = useState<boolean>(false)
  const [passwordError, setPasswordError] = useState<boolean>(false)
  const [password2Error, setPassword2Error] = useState<boolean>(false)
  const [signUpError, setSignUpError] = useState<boolean>(false)
  const navigate = useNavigate()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (emailRef.current === null) return
    if (passwordRef.current === null) return
    if (passwordRef2.current === null) return

    emailRef.current.value.includes('@')
      ? setEmailError(false)
      : setEmailError(true)

    passwordRef.current.value.length < 8
      ? setPasswordError(true)
      : setPasswordError(false)

    passwordRef.current.value !== passwordRef2.current.value
      ? setPassword2Error(true)
      : setPassword2Error(false)

    if (
      emailRef.current.value.includes('@') &&
      passwordRef.current.value.length >= 8 &&
      passwordRef.current.value === passwordRef2.current.value
    ) {
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then(() => {
          emailRef.current!.value = ''
          passwordRef.current!.value = ''
          passwordRef2.current!.value = ''
          setSignUpError(false)
          navigate('/recipes')
        })
        .catch(() => setSignUpError(true))
    }
  }

  return (
    <div className={styles.container}>
      <LoginLayout />
      <form className={styles.form} onSubmit={handleLogin}>
        <h2 className={styles.formHeader}>Register!</h2>
        <input
          className={styles.formInput}
          placeholder="Email.."
          type="email"
          ref={emailRef}
          required
        />
        {emailError && (
          <p className={`${styles.error}`}>Your email must contain '@'!</p>
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
        <input
          className={styles.formInput}
          placeholder="Repeat password.."
          type="password"
          ref={passwordRef2}
          required
        />
        {password2Error && (
          <p className={styles.error}>Passwords must be the same!</p>
        )}
        {signUpError && (
          <p className={styles.signupError}>This user already exist!</p>
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
