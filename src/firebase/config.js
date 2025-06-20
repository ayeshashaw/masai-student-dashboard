import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; 


const firebaseConfig = {
  apiKey: "AIzaSyDyc8J1BHZ4_j5SUhw9sRMoD95EkJhARMw",
  authDomain: "student-manager-3a003.firebaseapp.com",
  projectId: "student-manager-3a003",
  storageBucket: "student-manager-3a003.firebasestorage.app",
  messagingSenderId: "955560508356",
  appId: "1:955560508356:web:d67d3bec53b4e1025e8291",
  measurementId: "G-SEQFDP561N"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app); 