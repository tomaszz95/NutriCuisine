import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'

import auth from '../../firebase'

const useFirebaseAuth = () => {
  const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user === null) {
        setIsLogged(false)
      } else {
        setIsLogged(true)
      }
    })
  }, [])

  return isLogged
}

export default useFirebaseAuth
