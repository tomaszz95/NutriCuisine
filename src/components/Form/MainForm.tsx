import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchRecipes, fetchIngredients } from '../../store/api-actions'
import { ThunkDispatch } from '@reduxjs/toolkit'
import styles from './MainForm.module.css'

type MainFormType = {
  placeholderText: string
  buttonText: string
  errorText: string
  urlQuery: string
}

const MainForm: React.FC<MainFormType> = ({
  placeholderText,
  buttonText,
  errorText,
  urlQuery,
}) => {
  const [error, setError] = useState<boolean>(false)
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
  const inputRef = useRef<HTMLInputElement>(null)

  let errorParagraph = 'This field cannot be empty!'

  const submitInput = (e: React.SyntheticEvent) => {
    e.preventDefault()

    if (inputRef.current && inputRef.current.value.trim() !== '') {
      urlQuery === 'recipes'
        ? dispatch(fetchRecipes(inputRef.current.value))
        : dispatch(fetchIngredients(inputRef.current.value))
    } else {
      errorText = 'This field cannot be empty!'
      setError(true)
      return
    }
  }

  return (
    <form onSubmit={submitInput} className={styles.form}>
      <input
        className={styles.input}
        placeholder={placeholderText}
        ref={inputRef}
        type="text"
      />
      {error && <p className={styles.error}>{errorParagraph}</p>}
      <button aria-label="button" type="submit" className={styles.button}>
        {buttonText}
      </button>
    </form>
  )
}

export default MainForm
