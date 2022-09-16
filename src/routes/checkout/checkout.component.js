import '../../routes/checkout/checkout.styles.scss'
import { CartContext } from '../../context/cart.context'
import { useContext } from 'react'
import CheckOutItem from '../../components/checkout-item/checkout-item.component'

const CheckOut = () => {
  const { cartItems, addItemToCart, deleteItemFromCart } = useContext(
    CartContext,
  )
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Products</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => (
        <CheckOutItem cartItem={cartItem} />
      ))}
      <span className="total">Total:0</span>
    </div>
  )
}

export default CheckOut