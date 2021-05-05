import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBzdiBpXn7eZ6TZMLsQgUAtlNPPaWqGiPo",
    authDomain: "chat-app-d20eb.firebaseapp.com",
    projectId: "chat-app-d20eb",
    storageBucket: "chat-app-d20eb.appspot.com",
    messagingSenderId: "441113868820",
    appId: "1:441113868820:web:84db45b7fb33821e384501"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const firestore = firebase.firestore()
  const auth = firebase.auth()
  const timestamps = firebase.firestore.FieldValue.serverTimestamp

  export {firestore , auth , timestamps}