import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD7-_BEI0Y0blezwKODSSJTbtmfc9n15t4",
    authDomain: "everest-79065.firebaseapp.com",
    databaseURL: "https://everest-79065.firebaseio.com",
    projectId: "everest-79065",
    storageBucket: "everest-79065.appspot.com",
    messagingSenderId: "561915203016",
    appId: "1:561915203016:web:3f4cfe5444ad0f7ceac4fd",
    measurementId: "G-REGVGZ5DCH"
}
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
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
  
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
export default firebase;