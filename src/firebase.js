// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqtalVAEF5bqp4ukfJy3L09LMCdT7D0So",
  authDomain: "ventcall.firebaseapp.com",
  projectId: "ventcall",
  storageBucket: "ventcall.appspot.com",
  messagingSenderId: "160123459897",
  appId: "1:160123459897:web:f2ebd95ab42b25505430e8",
  measurementId: "G-VWDST90923"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
//const database = getDatabase(app);
export const firebase={
  auth:auth,
  analytics:analytics
 }