import '../checkout-item/checkout-item.styles.scss'
import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'

const CheckOutItem = ({ cartItem }) => {
  const { name, price, quantity, imageUrl } = cartItem
  const { removeItemFromCart, deleteItemFromCart, addItemToCart } = useContext(
    CartContext,
  )

  //   const removeProductFromCart = () => removeItemFromCart(cartItem)
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={`${imageUrl}`} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="price">${price}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => deleteItemFromCart(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItemToCart(cartItem)}>
          &#10095;
        </div>
      </span>
      <div
        className="remove-button"
        onClick={() => removeItemFromCart(cartItem)}
      >
        &#10005;
      </div>
    </div>
  )
}

export default CheckOutItem
