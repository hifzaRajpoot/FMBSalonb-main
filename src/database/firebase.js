
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCXKQDQ2B0Uy0ghRXLl60pkqiwwIIQnnQQ",
  authDomain: "fmbsalon.firebaseapp.com",
  projectId: "fmbsalon",
  storageBucket: "fmbsalon.appspot.com",
  messagingSenderId: "125588782275",
  appId: "1:125588782275:web:546601626ad22daa927676",
  measurementId: "G-2CQ481ZSKW"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);