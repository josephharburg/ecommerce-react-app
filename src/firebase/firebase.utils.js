import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyBmO7ziscRVi5ILjct2kQGcYY5WPDj1fRI",
  authDomain: "ecommerce-react-project-dc3d3.firebaseapp.com",
  projectId: "ecommerce-react-project-dc3d3",
  storageBucket: "ecommerce-react-project-dc3d3.appspot.com",
  messagingSenderId: "242112759069",
  appId: "1:242112759069:web:fad9d82150bbc70b1c4df4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
