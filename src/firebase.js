// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-blog-64ed8.firebaseapp.com",
  projectId: "mern-blog-64ed8",
  storageBucket: "mern-blog-64ed8.appspot.com",
  messagingSenderId: "632576513816",
  appId: "1:632576513816:web:05e1e127c8342d3948f06d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);