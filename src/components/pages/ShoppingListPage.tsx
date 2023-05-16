import { useSelector } from 'react-redux'

import ShoppingList from '../shopping/ShoppingList'
import SectionLayout from '../layouts/SectionLayout'
import BlockedLayout from '../layouts/BlockedLayout'

const ShoppingListPage = () => {
  const loginStatus = useSelector<any, boolean>((state) => state.login)

  return (
    <>
      <SectionLayout title="Your shopping list">
        {loginStatus ? <ShoppingList /> : <BlockedLayout />}
      </SectionLayout>
    </>
  )
}

export default ShoppingListPage
