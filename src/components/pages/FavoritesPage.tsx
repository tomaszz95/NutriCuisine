import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'

import SectionLayout from '../layouts/SectionLayout'
import FavoriteList from '../favorite/FavoriteList'
import { favoritesInputActions } from '../../store/favoritesInput-slice'

const FavoritesPage = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

  dispatch(favoritesInputActions.changeFavoriteInput(''))

  return (
    <>
      <SectionLayout title="Your favorite recipes">
        <FavoriteList />
      </SectionLayout>
    </>
  )
}

export default FavoritesPage
