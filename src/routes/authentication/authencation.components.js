import SignInForm from '../../components/sign-in/sign-in.components'
import SignUpForm from '../../components/sign-up/sign-up.components'
import '../authentication/authentication.styles.scss'

export const Authentication = () => {
  return (
    <div className="authentication-container">
      {/* <h1>Sign in Page</h1> */}
      <SignInForm />
      <SignUpForm />
    </div>
  )
}
