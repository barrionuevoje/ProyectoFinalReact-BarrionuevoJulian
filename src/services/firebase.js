import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBO8g6Ssqz8adwkJqiKTMi2dkoBv8Wcn9Y",
  authDomain: "react-d7bbd.firebaseapp.com",
  projectId: "react-d7bbd",
  storageBucket: "react-d7bbd.firebasestorage.app",
  messagingSenderId: "1036688224707",
  appId: "1:1036688224707:web:bd106bb985a7894d210d76",
  measurementId: "G-P9RPY6STZR"
};

// Inicializa Firebase y Firestore
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
