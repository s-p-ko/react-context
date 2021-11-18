import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyCtcHO5YzCaSTbzznw1nuPwHfCBAmePHpM',
  authDomain: 'crwn-db-fc0e3.firebaseapp.com',
  projectId: 'crwn-db-fc0e3',
  storageBucket: 'crwn-db-fc0e3.appspot.com',
  messagingSenderId: '6493568964',
  appId: '1:6493568964:web:5b7b21ef0d14ba55302e91',
  measurementId: 'G-G7BQWBY9VB',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
