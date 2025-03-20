// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBO8g6Ssqz8adwkJqiKTMi2dkoBv8Wcn9Y",
  authDomain: "react-d7bbd.firebaseapp.com",
  projectId: "react-d7bbd",
  storageBucket: "react-d7bbd.firebasestorage.app",
  messagingSenderId: "1036688224707",
  appId: "1:1036688224707:web:bd106bb985a7894d210d76",
  measurementId: "G-P9RPY6STZR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Función para obtener productos desde Firestore
export const getItems = async () => {
  const querySnapshot = await getDocs(collection(db, "productos"));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};