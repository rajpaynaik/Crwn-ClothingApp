import { useContext } from 'react'
import ProductCard from '../../components/products/product-card.components'
import { ProductContext } from '../../context/products.context'
import '../shop/shop.styles.scss'

const Shop = () => {
  const { products } = useContext(ProductContext)
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default Shop
