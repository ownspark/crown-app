import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyBlNfBazddmJbVddByzwV1O8jkGFXZ2Z8U",
    authDomain: "crwn-db-ownspark.firebaseapp.com",
    databaseURL: "https://crwn-db-ownspark.firebaseio.com",
    projectId: "crwn-db-ownspark",
    storageBucket: "crwn-db-ownspark.appspot.com",
    messagingSenderId: "177908841600",
    appId: "1:177908841600:web:2af4359ef2c08f7a12fa65",
    measurementId: "G-2ED392MBCM"
};
  
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

