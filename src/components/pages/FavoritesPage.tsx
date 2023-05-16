import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'

import FavoriteList from '../favorite/FavoriteList'
import SectionLayout from '../layouts/SectionLayout'
import BlockedLayout from '../layouts/BlockedLayout'
import { favoritesInputActions } from '../../store/favoritesInput-slice'

const FavoritesPage = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
  const loginStatus = useSelector<any, boolean>((state) => state.login)

  useEffect(() => {
    dispatch(favoritesInputActions.changeFavoriteInput(''))
  }, [])

  return (
    <>
      <SectionLayout title="Your favorite recipes">
        {loginStatus ? <FavoriteList /> : <BlockedLayout />}
      </SectionLayout>
    </>
  )
}

export default FavoritesPage
