import { useCallback } from 'react'

function useLocalStorage() {
  const getValue = useCallback((key: any) => {
    const storageValue = localStorage.getItem(key)
    if (storageValue !== null) {
      const parsedValue = JSON.parse(storageValue)
      return parsedValue
    }
  }, [])

  const addValue = useCallback((key: any, newValue: any) => {
    window.localStorage.setItem(key, JSON.stringify(newValue))
  }, [])

  const removeValue = useCallback((key: any) => {
    localStorage.removeItem(key)
  }, [])

  return { getValue, addValue, removeValue }
}

export default useLocalStorage
