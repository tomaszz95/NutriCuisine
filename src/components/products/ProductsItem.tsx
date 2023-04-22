import { ProductItemType } from '../helpers/types'

const ProductItem: React.FC<ProductItemType> = ({
  productName,
  productImage,
  productCarbo,
  productFat,
  productProtein,
  productFiber,
}) => {
  return (
    <div>
      <img src={productImage} />
      <div>
        <h3>{productName}</h3>
        <span>
          Carbohydrates:
          <b>{productCarbo}</b>
        </span>
        <span>
          Protein:
          <b>{productProtein}</b>
        </span>
        <span>
          Fat:
          <b>{productFat}</b>
        </span>
        <span>
          Fiber:
          <b>{productFiber}</b>
        </span>
      </div>
    </div>
  )
}

export default ProductItem
