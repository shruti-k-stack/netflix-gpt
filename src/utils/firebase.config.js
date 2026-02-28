// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5WsokBLy4AZPK2igruWbIQOlUgS4RPgI",
  authDomain: "netflix-re-4fefb.firebaseapp.com",
  projectId: "netflix-re-4fefb",
  storageBucket: "netflix-re-4fefb.firebasestorage.app",
  messagingSenderId: "809606674164",
  appId: "1:809606674164:web:0ac862a8a3a8f3c98410a1",
  measurementId: "G-KBE0R65TBW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);