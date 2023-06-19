// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmYKeoVGRAGTu0OY6d3BCQT81RFzCkXuM",
  authDomain: "blog-3370c.firebaseapp.com",
  projectId: "blog-3370c",
  storageBucket: "blog-3370c.appspot.com",
  messagingSenderId: "133582568403",
  appId: "1:133582568403:web:d6b0002c617d5907504d26",
  measurementId: "G-FNG1K284H2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)