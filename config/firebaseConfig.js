// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//import necessary services from Firebase
import { getFirestore } from "firebase/firestore";
// // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhOJGPGKwlMNVGuKffKGIWtZ954GC3KOk",
  authDomain: "cpan213starterproject.firebaseapp.com",
  projectId: "cpan213starterproject",
  storageBucket: "cpan213starterproject.firebasestorage.app",
  messagingSenderId: "29176123892",
  appId: "1:29176123892:web:a4f1ac8aa0ab604baa29a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//associate firestore with the app
export const db = getFirestore(app)