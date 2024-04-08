
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBuJbkZG4dynLwXBL-fKKHAC-wnVn5lhY8",
  authDomain: "madpractice-4a4fb.firebaseapp.com",
  projectId: "madpractice-4a4fb",
  storageBucket: "madpractice-4a4fb.appspot.com",
  messagingSenderId: "935457721180",
  appId: "1:935457721180:web:4340992913d033487d8f99",
  measurementId: "G-EERNLF9H3G"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestoreConfig = getFirestore(app);


export { auth, firestoreConfig};