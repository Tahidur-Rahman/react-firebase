import app from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyApvOEYCSkDs5MNzkkwCl-qo1mmk9CaZKE",
    authDomain: "react-firebase-tahid.firebaseapp.com",
    projectId: "react-firebase-tahid",
    storageBucket: "react-firebase-tahid.appspot.com",
    messagingSenderId: "768068872246",
    appId: "1:768068872246:web:0f74db32c23856d6471097",
    measurementId: "G-S8HMC18B09"
  };
  
 
  class Firebase{
      constructor(){
          app.initializeApp(firebaseConfig)
      }
  }

  export default Firebase;