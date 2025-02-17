// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import "firebase/compat/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKL-OFxODD0lnfvmZetvSTfvt_PMIx0qc",
  authDomain: "clone-e96c9.firebaseapp.com",
  projectId: "clone-e96c9",
  storageBucket: "clone-e96c9.firebasestorage.app",
  messagingSenderId: "136600079745",
  appId: "1:136600079745:web:98072e1bb2ea7409892c80",
  measurementId: "G-CY5GRYD5NK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app);
export const db=getFirestore(app);