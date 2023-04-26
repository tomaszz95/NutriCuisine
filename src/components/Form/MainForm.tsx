import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'

import { fetchRecipes, fetchProducts } from '../../store/api-actions'
import { shoppingActions } from '../../store/shopping-slice'
import { MainFormType } from '../helpers/types'
import styles from './MainForm.module.css'

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
      urlQuery === 'products' ||
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
        case 'products':
          dispatch(fetchProducts(inputRef.current.value))
          setError('')
          break
        case 'favorites':
          console.log('fav')
          setError('')
          break
        case 'shopping_list':
          dispatch(
            shoppingActions.addProductToList({
              productName: inputRef.current.value,
              bought: false,
            })
          )
          setError('')
          break
        default:
          setError('You are in wrong place!')
      }
    } else {
      setError('This field cannot be empty!')
      return
    }
    inputRef.current.value = ''
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
