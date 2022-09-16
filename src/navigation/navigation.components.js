import { Fragment, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as CrwnLogo } from '../assests/crown.svg'
import CartIcon from '../components/cart-icon/cart-icon.components'
import { UserContext } from '../context/user.context'
import './navigation.styles.scss'
import { signOutUser } from '../utils/firebase/firebase.utils'
import CartDropDown from '../components/cart-dropdown/cart-dropdown.components'
import { CartContext } from '../context/cart.context'

export const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)

  const signOutHandler = async () => {
    await signOutUser()
  }

  return (
    <Fragment>
      <div className="navigation">
        <div>
          <Link className="logo-container" to="/">
            <CrwnLogo className="logo" />
          </Link>
        </div>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
          {isCartOpen && <CartDropDown />}
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}
