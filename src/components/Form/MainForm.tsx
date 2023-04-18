import React, { useEffect, useRef, useState } from 'react'

import styles from './MainForm.module.css'

const MainForm = ({ inputPage }: { inputPage: string }) => {
  const [placeholderText, setPlaceholderText] = useState<string>('')
  const [buttonText, setButtonText] = useState<string>('')
  const [error, setError] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const submitInput = (e: React.SyntheticEvent) => {
    e.preventDefault()

    if (inputRef.current && inputRef.current.value.trim() !== '') {
      console.log(inputRef.current.value)
      inputRef.current.value = ''
      setError(false)
    } else {
      setError(true)
    }
  }

  useEffect(() => {
    switch (inputPage) {
      case 'recipes':
        setPlaceholderText('Search recipe...')
        setButtonText('Search')
        break
      case 'calories':
        setPlaceholderText('Check ingredient calories...')
        setButtonText('Check')
        break
      case 'favorites':
        setPlaceholderText('Search favorite recipe...')
        setButtonText('Search')
        break
      case 'shopping list':
        setPlaceholderText('Add product to list...')
        setButtonText('Add')
        break
      default:
        setPlaceholderText('Search...')
        setButtonText('Search')
    }
  }, [inputPage])

  return (
    <form onSubmit={submitInput} className={styles.form}>
      <input
        className={styles.input}
        placeholder={placeholderText}
        ref={inputRef}
        type="text"
      />
      {error && (
        <p className={styles.error}>There is no ingredient with that name!</p>
      )}
      <button aria-label="button" type="submit" className={styles.button}>
        {buttonText}
      </button>
    </form>
  )
}

export default MainForm
