// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA-PWn6c9sgMKHarzJ1BWwDqR2LXbBQ0mc",
  authDomain: "my-app-81b8a.firebaseapp.com",
  projectId: "my-app-81b8a",
  storageBucket: "my-app-81b8a.appspot.com",
  messagingSenderId: "946232628948",
  appId: "1:946232628948:web:204b389b8ffa64da6e0d41"
};

firebase.initializeApp(firebaseConfig);

export default firebase;