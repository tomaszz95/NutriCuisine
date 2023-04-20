import { useEffect, useRef, useState } from 'react'
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
  const [error, setError] = useState<string>('')
  const [isWrongUrl, setIsWrongUrl] = useState<boolean>(false)
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (
      urlQuery === 'recipes' ||
      urlQuery === 'calories' ||
      urlQuery === 'favorites' ||
      urlQuery === 'shopping_list' ||
      urlQuery === ''
    ) {
      setIsWrongUrl(false)
    } else {
      setIsWrongUrl(true)
    }
  }, [urlQuery])

  const submitInput = (e: React.SyntheticEvent) => {
    e.preventDefault()

    if (inputRef.current && inputRef.current.value.trim() !== '') {
      switch (urlQuery) {
        case 'recipes':
          dispatch(fetchRecipes(inputRef.current.value))
          setError('')
          break
        case '':
          dispatch(fetchRecipes(inputRef.current.value))
          setError('')
          break
        case 'calories':
          dispatch(fetchIngredients(inputRef.current.value))
          setError('')
          break
        case 'favorites':
          console.log('fav')
          setError('')
          break
        case 'shopping_list':
          console.log('shopping')
          setError('')
          break
        default:
          setError('You are in wrong place!')
      }
    } else {
      setError('This field cannot be empty!')
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
        disabled={isWrongUrl}
      />
      {error !== '' && <p className={styles.error}>{error}</p>}
      <button
        aria-label="button"
        type="submit"
        className={styles.button}
        disabled={isWrongUrl}
      >
        {buttonText}
      </button>
    </form>
  )
}

export default MainForm
