import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAGK5xxh-bkIzC0zTOGhYO-ZCsq9dyqCvg",
  authDomain: "chat-89da0.firebaseapp.com",
  databaseURL: "https://chat-89da0-default-rtdb.firebaseio.com",
  projectId: "chat-89da0",
  storageBucket: "chat-89da0.appspot.com",
  messagingSenderId: "339065652510",
  appId: "1:339065652510:web:e5ec2c711f54115afa350f"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
export const dbr = getDatabase()