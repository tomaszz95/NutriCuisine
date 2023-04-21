import { ProductItemType } from '../helpers/types'

const ProductItem: React.FC<ProductItemType> = ({ productName }) => {
  return <p>{productName}</p>
}

export default ProductItem
