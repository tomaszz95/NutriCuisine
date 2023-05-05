import SectionLayout from '../layouts/SectionLayout'
import FavoriteList from '../favorite/FavoriteList'

const FavoritesPage = () => {
  return (
    <>
      <SectionLayout title="Your favorite recipes">
        <FavoriteList />
      </SectionLayout>
    </>
  )
}

export default FavoritesPage
