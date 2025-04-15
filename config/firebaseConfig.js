// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// //import necessary services from Firebase
// import { getFirestore } from "firebase/firestore";
// // // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBhOJGPGKwlMNVGuKffKGIWtZ954GC3KOk",
//   authDomain: "cpan213starterproject.firebaseapp.com",
//   projectId: "cpan213starterproject",
//   storageBucket: "cpan213starterproject.firebasestorage.app",
//   messagingSenderId: "29176123892",
//   appId: "1:29176123892:web:a4f1ac8aa0ab604baa29a1"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// //associate firestore with the app
// export const db = getFirestore(app)

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//service
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4uIiGWcUVViS8UIrj1iW8h-tgx1zJS0I",
  authDomain: "sem3-ea0f0.firebaseapp.com",
  projectId: "sem3-ea0f0",
  storageBucket: "sem3-ea0f0.firebasestorage.app",
  messagingSenderId: "892157459687",
  appId: "1:892157459687:web:697f5187d3f670cb4d3642"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);