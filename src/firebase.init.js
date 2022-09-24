import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAW6sKttADeikcVVDW6iZQPg1AFQH4S5B8",
  authDomain: "groups-users-7d9e5.firebaseapp.com",
  projectId: "groups-users-7d9e5",
  storageBucket: "groups-users-7d9e5.appspot.com",
  messagingSenderId: "806765121922",
  appId: "1:806765121922:web:252f8c16fb2894a6233f9b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const auth = getAuth(app);

