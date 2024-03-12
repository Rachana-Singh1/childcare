// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoM8CqgulhJzB1DJTObxRyjWPOkIUJMgQ",
  authDomain: "health-5d57e.firebaseapp.com",
  projectId: "health-5d57e",
  storageBucket: "health-5d57e.appspot.com",
  messagingSenderId: "18928249115",
  appId: "1:18928249115:web:e5dafc2113a33ed3de4bbe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);