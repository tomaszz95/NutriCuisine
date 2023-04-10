import React, { useEffect, useRef, useState } from 'react'
import styles from './Input.module.css'

const Input = ({ inputPage }: { inputPage: string }) => {
  const [placeholderText, setPlaceholderText] = useState<string>('')
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
      case 'menu':
        setPlaceholderText('Search recipe...')
        break
      case 'favorites':
        setPlaceholderText('Search favorite recipe...')
        break
      case 'shopping list':
        setPlaceholderText('Search ingredient...')
        break
      case 'ingredients':
        setPlaceholderText('Search ingredient...')
        break
      default:
        setPlaceholderText('Search...')
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
    </form>
  )
}

export default Input
