// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-dd925.firebaseapp.com",
  projectId: "mern-blog-dd925",
  storageBucket: "mern-blog-dd925.appspot.com",
  messagingSenderId: "51690560724",
  appId: "1:51690560724:web:be3bf5479816baded06f41"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);