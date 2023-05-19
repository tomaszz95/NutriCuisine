import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'

import useFirebaseAuth from '../hooks/useFirebaseAuth'
import { fetchRecipes, fetchProducts } from '../../store/api-actions'
import { shoppingActions } from '../../store/shopping-slice'
import { favoritesInputActions } from '../../store/favoritesInput-slice'
import { MainFormTypes } from '../helpers/types'
import styles from './MainForm.module.css'

const MainForm: React.FC<MainFormTypes> = ({
  placeholderText,
  buttonText,
  urlQuery,
}) => {
  const [error, setError] = useState<string>('')
  const [isWrongUrl, setIsWrongUrl] = useState<boolean>(false)
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
  const inputRef = useRef<HTMLInputElement>(null)
  const isLogged = useFirebaseAuth()

  useEffect(() => {
    if (urlQuery === 'recipes' || urlQuery === 'products' || urlQuery === '') {
      setIsWrongUrl(false)
    } else if (
      (urlQuery === 'favorites' || urlQuery === 'shopping_list') &&
      isLogged
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
          dispatch(
            favoritesInputActions.changeFavoriteInput(inputRef.current.value)
          )
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

  const resetFilter = () => {
    dispatch(favoritesInputActions.changeFavoriteInput(''))
    setError('')
  }

  return (
    <form
      onSubmit={submitInput}
      className={styles.form}
      aria-label="Search form"
    >
      <input
        className={styles.input}
        placeholder={placeholderText}
        ref={inputRef}
        type="text"
        disabled={isWrongUrl}
      />
      {error !== '' && <p className={styles.error}>{error}</p>}
      <button
        type="submit"
        className={styles.button}
        disabled={isWrongUrl}
        aria-label="Search button"
      >
        {buttonText}
      </button>
      {urlQuery === 'favorites' ? (
        <button
          className={styles.clear}
          aria-label="Delete filter button"
          onClick={resetFilter}
          disabled={isWrongUrl}
          type="reset"
        >
          Delete filter
        </button>
      ) : null}
    </form>
  )
}

export default MainForm
