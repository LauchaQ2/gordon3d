import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBwxChOUWdkDfjA_6LGTcaBu8OpZ6rRqvU",
  authDomain: "gordon3d-3170b.firebaseapp.com",
  projectId: "gordon3d-3170b",
  storageBucket: "gordon3d-3170b.appspot.com",
  messagingSenderId: "855879826935",
  appId: "1:855879826935:web:335b97fd74e152817a82f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;