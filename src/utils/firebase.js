// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC50EPFWOMv3fzKAfg5631-G6FKImIEoR0",
  authDomain: "netflix-c5652.firebaseapp.com",
  databaseURL: "https://netflix-c5652-default-rtdb.firebaseio.com",
  projectId: "netflix-c5652",
  storageBucket: "netflix-c5652.firebasestorage.app",
  messagingSenderId: "498982569610",
  appId: "1:498982569610:web:78c2367a8487e0ae934f73",
  measurementId: "G-CGCEZ4C9Z5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();