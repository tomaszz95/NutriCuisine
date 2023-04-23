import SectionLayout from '../layouts/SectionLayout'
import ProductsList from '../products/ProductsList'

const ProductsPage = () => {
  return (
    <>
      <SectionLayout title="Check the nutritional values of the product!">
        <ProductsList />
      </SectionLayout>
    </>
  )
}

export default ProductsPage
