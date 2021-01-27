import app from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyApvOEYCSkDs5MNzkkwCl-qo1mmk9CaZKE",
  authDomain: "react-firebase-tahid.firebaseapp.com",
  projectId: "react-firebase-tahid",
  storageBucket: "react-firebase-tahid.appspot.com",
  messagingSenderId: "768068872246",
  appId: "1:768068872246:web:0f74db32c23856d6471097",
  measurementId: "G-S8HMC18B09",
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
  }
  doCreateUserWithEmailAndPassword = (email, password) => {
    this.auth.createUserWithEmailAndPassword(email, password);
  };
  doSignInWithEmailAndPassword = (email, password) => {
    this.auth.signInWithEmailAndPassword(email, password);
  };
  doSignOut = () => this.auth.signOut();
  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);
  doPasswordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password);
}

export default Firebase;
