// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDfLdiRvV1OMvAQrkxOYgzG0UJWNiIhIEI",
    authDomain: "clone-21aba.firebaseapp.com",
    projectId: "clone-21aba",
    storageBucket: "clone-21aba.appspot.com",
    messagingSenderId: "289368437287",
    appId: "1:289368437287:web:09615aa6a24bb110195402",
    measurementId: "G-ZD8YGZ6Z8X"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
