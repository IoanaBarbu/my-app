import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCF7FGUNshaDF61kF0BXZiw7t2DhZXyHaE",
    authDomain: "myapp-812f3.firebaseapp.com",
    databaseURL: "https://myapp-812f3.firebaseio.com",
    projectId: "myapp-812f3",
    storageBucket: "myapp-812f3.appspot.com",
    messagingSenderId: "949140825444",
    appId: "1:949140825444:web:560e8cd9e8625db4ea0671",
    measurementId: "G-4E9FBBVC8S"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
   const db = firebase.firestore();
    // db.settings({timestampsInSnapshots:true})
    

  export default firebase;