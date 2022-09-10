import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDhfTrAhZiN7mpHG7wcsUacKV_EsGnqhPQ',
  authDomain: 'crwn-db-f0abb.firebaseapp.com',
  projectId: 'crwn-db-f0abb',
  storageBucket: 'crwn-db-f0abb.appspot.com',
  messagingSenderId: '38550340155',
  appId: '1:38550340155:web:53e25dbc73c7403656921e',
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth()
export const sigInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {},
) => {
  if (!userAuth) return
  const userRefDoc = await doc(db, 'users', userAuth.uid)

  const userSnapshot = await getDoc(userRefDoc)

  if (!userSnapshot.exists()) {
    try {
      const { displayName, email } = userAuth
      const createdAt = new Date()

      await setDoc(userRefDoc, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      })
    } catch (e) {
      console.log(`error creating user${e.message}`)
    }
  }

  return userRefDoc
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return
  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return
  return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth)
