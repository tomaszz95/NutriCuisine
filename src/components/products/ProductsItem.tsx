import { ProductItemType } from '../helpers/types'
import styles from './ProductsItem.module.css'

const ProductItem: React.FC<ProductItemType> = ({
  productName,
  productImage,
  productKcal,
  productCarbo,
  productFat,
  productProtein,
  productFiber,
}) => {
  let image
  if (productImage === undefined) {
    image =
      'https://t3.ftcdn.net/jpg/05/38/52/48/360_F_538524834_KTWCegIa69mIWDLVx6Sc6tdkW6beiMBR.jpg'
  } else {
    image = productImage
  }
  const kcal = productKcal === undefined ? '0' : Number(productKcal).toFixed()
  const carbo =
    productCarbo === undefined ? '0.00' : Number(productCarbo).toFixed(2)
  const protein =
    productProtein === undefined ? '0.00' : Number(productProtein).toFixed(2)
  const fat = productFat === undefined ? '0.00' : Number(productFat).toFixed(2)
  const fiber =
    productFiber === undefined ? '0.00' : Number(productFiber).toFixed(2)

  return (
    <li className={styles.card}>
      <button className={styles.button}>
        <i className="fa-solid fa-cart-shopping"></i>
      </button>
      <img src={image} className={styles.image} />
      <h3 className={styles.title}>{productName}</h3>
      <div className={styles.container}>
        <div className={styles.box}>
          <i className="fa-solid fa-weight-scale" />
          <span>Kcal:</span>
          <b>{kcal}kcal / 100g</b>
        </div>
        <div className={styles.box}>
          <i className="fa-solid fa-cookie"></i>
          <span>Carbohydrates:</span>
          <b>{carbo}g</b>
        </div>
        <div className={styles.box}>
          <i className="fa-solid fa-drumstick-bite"></i>
          <span>Protein:</span>
          <b>{protein}g</b>
        </div>
        <div className={styles.box}>
          <i className="fa-solid fa-burger"></i>
          <span>Fat:</span>
          <b>{fat}g</b>
        </div>
        <div className={styles.box}>
          <i className="fa-solid fa-wheat-awn"></i>
          <span>Fiber:</span>
          <b>{fiber}g</b>
        </div>
      </div>
    </li>
  )
}

export default ProductItem
