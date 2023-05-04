import SectionLayout from '../layouts/SectionLayout'
import RecipesList from '../products/ProductsList'

const RecipesPage = () => {
  return (
    <>
      <SectionLayout title="Check the nutritional values of the product!">
        <ProductsList />
      </SectionLayout>
    </>
  )
}

export default RecipesPage
