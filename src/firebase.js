// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, FacebookAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEyStuE6yyjyDXmCOT0keGLHOXNEKkMyo",
  authDomain: "react-auth-e9b16.firebaseapp.com",
  databaseURL: "https://react-auth-e9b16-default-rtdb.firebaseio.com",
  projectId: "react-auth-e9b16",
  storageBucket: "react-auth-e9b16.appspot.com",
  messagingSenderId: "280728810163",
  appId: "1:280728810163:web:ae3dac1686a273fc0bf6c6",
  measurementId: "G-V2263NXYVE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(firebaseConfig)