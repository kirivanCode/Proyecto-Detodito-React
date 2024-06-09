// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXjmM6uiLVxfR3k2UJ63R4VN6fF3m6uoU",
  authDomain: "tienda-68633.firebaseapp.com",
  databaseURL: "https://tienda-68633-default-rtdb.firebaseio.com",
  projectId: "tienda-68633",
  storageBucket: "tienda-68633.appspot.com",
  messagingSenderId: "228657285519",
  appId: "1:228657285519:web:3e6f2caff29f65c0fe63fa",
  measurementId: "G-DV73B9K4QC"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;