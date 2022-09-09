import { useState } from 'react'
import {
  sigInWithGooglePopup,
  createUserDocumentFromAuth,
  signInUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils'
import Button from '../button/button-type.components'
import FormInput from '../form-input/form-input.components'
import '../sign-in/sign-in.styles.scss'

const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)

  const { email, password } = formFields

  console.log(formFields)

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormFields({ ...formFields, [name]: value })
  }

  const resetFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await signInUserWithEmailAndPassword(email, password)
      console.log(response)
      resetFields()
    } catch (e) {
      switch (e.code) {
        case 'auth/wrong-password':
          alert('Incorrect password')
          break
        case 'auth/user-not-found':
          alert('Incorrect email address')
          break
        default:
          alert(`${e}`)
      }
      // alert(`Incorrect password${e.code}`)
      console.log('error occurred:', e.message)
    }
  }

  const logGoogleUser = async () => {
    const { user } = await sigInWithGooglePopup()

    await createUserDocumentFromAuth(user)
  }

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" onClick={logGoogleUser} buttonType="google">
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  )
}
export default SignInForm
