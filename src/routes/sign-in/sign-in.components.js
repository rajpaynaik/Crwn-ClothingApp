import {
  sigInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'

export const SigIn = () => {
  const logGoogleUser = async () => {
    const { user } = await sigInWithGooglePopup()

    await createUserDocumentFromAuth(user)
  }
  return (
    <div>
      <h1>You are signed in</h1>
      <button onClick={logGoogleUser}>SigIn with Google</button>
    </div>
  )
}
