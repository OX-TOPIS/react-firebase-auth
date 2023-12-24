// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbyGRkS1-Hj-GvQe1il-gQmgLSFV0u6y0",
  authDomain: "react-firebase-auth-fd914.firebaseapp.com",
  projectId: "react-firebase-auth-fd914",
  storageBucket: "react-firebase-auth-fd914.appspot.com",
  messagingSenderId: "278117478828",
  appId: "1:278117478828:web:206b90d9ef1435b4a10a09",
  measurementId: "G-BSZZEGSSW6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;