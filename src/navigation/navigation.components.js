import { Fragment, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as CrwnLogo } from '../assests/crown.svg'
import { UserContext } from '../context/user.context'
import '../navigation/navigation.styles.scss'
import { signOutUser } from '../utils/firebase/firebase.utils'

export const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext)
  // console.log(currentUser)
  const signOutHandler = async () => {
    await signOutUser()
    setCurrentUser(null)
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
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}
