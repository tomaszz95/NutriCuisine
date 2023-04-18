import { useRef, useState } from 'react'

import useIngredient from '../hooks/useFoodApi'
import styles from './MainForm.module.css'

type MainFormType = {
  placeholderTxt: string
  buttonTxt: string
}

const MainForm: React.FC<MainFormType> = ({ placeholderTxt, buttonTxt }) => {
  const [error, setError] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)

  let errorText = 'There is no ingredient with that name!'

  const getData = async (ingr: string) => {
    const ingrData = useIngredient(ingr)
    return ingrData
  }

  const submitInput = async (e: React.SyntheticEvent) => {
    e.preventDefault()

    if (inputRef.current && inputRef.current.value.trim() !== '') {
      const fullData = await getData(inputRef.current.value)
      console.log(fullData)

      inputRef.current.value = ''
      errorText = 'There is no ingredient with that name!'
      setError(false)
    } else {
      setError(true)
    }
  }

  return (
    <form onSubmit={submitInput} className={styles.form}>
      <input
        className={styles.input}
        placeholder={placeholderTxt}
        ref={inputRef}
        type="text"
      />
      {error && <p className={styles.error}>{errorText}</p>}
      <button aria-label="button" type="submit" className={styles.button}>
        {buttonTxt}
      </button>
    </form>
  )
}

export default MainForm
