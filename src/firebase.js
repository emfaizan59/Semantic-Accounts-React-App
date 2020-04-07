import * as firebase from 'firebase'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/database'
var firebaseConfig = {
    apiKey: "AIzaSyClr9zTw9BeSgjPIGKHMSnpOcaoSbeEjrM",
    authDomain: "accounts-semantic.firebaseapp.com",
    databaseURL: "https://accounts-semantic.firebaseio.com",
    projectId: "accounts-semantic",
    storageBucket: "accounts-semantic.appspot.com",
    messagingSenderId: "886453909297",
    appId: "1:886453909297:web:c1c69efb642d462d8d2210"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase