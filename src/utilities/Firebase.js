import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDoT_Ith8ApHDQ-GKeoJTkPc2OHyLyNVhg",
  authDomain: "moje-portfolio-522ea.firebaseapp.com",
  databaseURL:
    "https://moje-portfolio-522ea-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "moje-portfolio-522ea",
  storageBucket: "moje-portfolio-522ea.appspot.com",
  messagingSenderId: "384667341405",
  appId: "1:384667341405:web:0b8deb94b7f96ebcb733b4",
  measurementId: "G-KF4GK84C1S",
};

const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
export const db = getDatabase(app);
export const auth = getAuth(app);
