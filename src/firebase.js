import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBXrzRiG7AcR3Dy0a9xunUJfErgV0LMiNk",
  authDomain: "e2-clone.firebaseapp.com",
  projectId: "e2-clone",
  storageBucket: "e2-clone.appspot.com",
  messagingSenderId: "940354438045",
  appId: "1:940354438045:web:d1bb33066fd80a4bb52574",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
export default db;
