import SectionLayout from '../layouts/SectionLayout'
import ShoppingList from '../shopping/ShoppingList'

const ShoppingListPage = () => {
  return (
    <>
      <SectionLayout title="Your shopping list">
        <ShoppingList />
      </SectionLayout>
    </>
  )
}

export default ShoppingListPage
