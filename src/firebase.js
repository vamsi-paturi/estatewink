import {getFirestore} from "firebase/firestore"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgDiVrE6F0-HL6MeiXsZ5bei0OvGGJCJM",
  authDomain: "estatewink.firebaseapp.com",
  projectId: "estatewink",
  storageBucket: "estatewink.appspot.com",
  messagingSenderId: "1062378379929",
  appId: "1:1062378379929:web:77eef24d76b6e4137e7608"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()
