import Button from '../button/button-type.components'
import '../cart-dropdown/cart-dropdown.styles.scss'

const CartDropDown = () => {
  return (
    <div>
      <div className="cart-dropdown-container">
        <div className="cart-items" />
        <Button>GO TO CHECKOUT</Button>
      </div>
    </div>
  )
}

export default CartDropDown
