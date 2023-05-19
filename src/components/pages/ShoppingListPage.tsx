import useFirebaseAuth from '../hooks/useFirebaseAuth'
import ShoppingList from '../shopping/ShoppingList'
import SectionLayout from '../layouts/SectionLayout'
import BlockedLayout from '../layouts/BlockedLayout'

const ShoppingListPage = () => {
  const isLogged = useFirebaseAuth()

  return (
    <>
      <SectionLayout title="Your shopping list">
        {isLogged ? <ShoppingList /> : <BlockedLayout />}
      </SectionLayout>
    </>
  )
}

export default ShoppingListPage
