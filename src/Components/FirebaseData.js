
import firebase from 'firebase'
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDRzogyYRhwzR1lMVJOTSAOJGkNp0m5kc8",
    authDomain: "linkedin12.firebaseapp.com",
    projectId: "linkedin12",
    storageBucket: "linkedin12.appspot.com",
    messagingSenderId: "619617936287",
    appId: "1:619617936287:web:cf1281221ee276eda793aa",
    measurementId: "G-N3ZMWCPE09"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db,auth,provider};