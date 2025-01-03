// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFhKXzhXL8E6Es77_jkruHVytQTfzOKuE",
  authDomain: "bac-project-8474f.firebaseapp.com",
  projectId: "bac-project-8474f",
  storageBucket: "bac-project-8474f.firebasestorage.app",
  messagingSenderId: "631496555723",
  appId: "1:631496555723:web:4c95aa75057a675533af4e",
  measurementId: "G-WQV2VGER48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export { auth,createUserWithEmailAndPassword,signInWithEmailAndPassword};