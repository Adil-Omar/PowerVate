import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBzpKQqJ_QLpti7asXOyiL5CZkWSLdVzHg",
  authDomain: "powervate-fitness.firebaseapp.com",
  databaseURL: "https://powervate-fitness-default-rtdb.firebaseio.com",
  projectId: "powervate-fitness",
  storageBucket: "powervate-fitness.firebasestorage.app",
  messagingSenderId: "923547972596",
  appId: "1:923547972596:web:0904843eb22e5d996f7fa1",
  measurementId: "G-L0XBBDPSP1",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
