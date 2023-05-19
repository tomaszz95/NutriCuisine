import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'

import useFirebaseAuth from '../hooks/useFirebaseAuth'
import FavoriteList from '../favorite/FavoriteList'
import SectionLayout from '../layouts/SectionLayout'
import BlockedLayout from '../layouts/BlockedLayout'
import { favoritesInputActions } from '../../store/favoritesInput-slice'

const FavoritesPage = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
  const isLogged = useFirebaseAuth()

  useEffect(() => {
    dispatch(favoritesInputActions.changeFavoriteInput(''))
  }, [])

  return (
    <>
      <SectionLayout title="Your favorite recipes">
        {isLogged ? <FavoriteList /> : <BlockedLayout />}
      </SectionLayout>
    </>
  )
}

export default FavoritesPage
