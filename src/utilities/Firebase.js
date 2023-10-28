import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDoT_Ith8ApHDQ-GKeoJTkPc2OHyLyNVhg",
  authDomain: "moje-portfolio-522ea.firebaseapp.com",
  projectId: "moje-portfolio-522ea",
  storageBucket: "moje-portfolio-522ea.appspot.com",
  messagingSenderId: "384667341405",
  appId: "1:384667341405:web:0b8deb94b7f96ebcb733b4",
  measurementId: "G-KF4GK84C1S"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);