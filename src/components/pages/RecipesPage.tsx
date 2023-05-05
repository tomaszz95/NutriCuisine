import SectionLayout from '../layouts/SectionLayout'
import RecipeList from '../recipe/RecipeList'

const RecipesPage = () => {
  return (
    <>
      <SectionLayout title="Search for a recipe!">
        <RecipeList />
      </SectionLayout>
    </>
  )
}

export default RecipesPage
