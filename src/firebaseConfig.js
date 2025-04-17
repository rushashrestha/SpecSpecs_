// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuarWiSPGP5fmf8TYCKZIoiXDW_9hG21I",
  authDomain: "specspecs1.firebaseapp.com",
  projectId: "specspecs1",
  storageBucket: "specspecs1.firebasestorage.app",
  messagingSenderId: "1010623704561",
  appId: "1:1010623704561:web:32dfd299d912451e5fa850"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };