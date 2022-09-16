import Button from '../button/button-type.components'
import '../cart-dropdown/cart-dropdown.styles.scss'
import CartItem from '../cart-item/cart-item.component'
import { useContext } from 'react'

import { useNavigate } from 'react-router-dom'

import { CartContext } from '../../context/cart.context'

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext)

  const navigate = useNavigate()

  const linkToCheckout = () => navigate('/checkout')
  return (
    <div>
      <div className="cart-dropdown-container">
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem cartItem={item} />
          ))}
        </div>

        <Button onClick={linkToCheckout}>GO TO CHECKOUT</Button>
      </div>
    </div>
  )
}

export default CartDropDown
