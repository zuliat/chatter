// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQz6ZsuOn5tYM4v-z2GdCSju6Sy5IJIJk",
  authDomain: "chatter-app-2973c.firebaseapp.com",
  projectId: "chatter-app-2973c",
  storageBucket: "chatter-app-2973c.appspot.com",
  messagingSenderId: "1069970007842",
  appId: "1:1069970007842:web:8886e5260a0fd1e0ce277b",
  measurementId: "G-93JCP4TCC4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
