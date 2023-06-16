// config.js
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaKaMcs_R05XLwreWOpu6on3o4LW9SOws",
  authDomain: "fitflux-8637c.firebaseapp.com",
  projectId: "fitflux-8637c",
  storageBucket: "fitflux-8637c.appspot.com",
  messagingSenderId: "613291869513",
  appId: "1:613291869513:web:be36b9fce690bd3f424698",
  measurementId: "G-NG1CLRBEZY"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
