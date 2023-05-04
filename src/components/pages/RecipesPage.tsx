import SectionLayout from '../layouts/SectionLayout'
import RecipesList from '../recipe/RecipeList'
import RecipeButtons from '../recipe/RecipeButtons'

const RecipesPage = () => {
  return (
    <>
      <SectionLayout title="Search for a recipe!">
        <RecipeButtons />
        <RecipesList />
      </SectionLayout>
    </>
  )
}

export default RecipesPage
