// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzxxpf1EbPr0L_N_r3mW5UGxWZruaoXKk",
  authDomain: "aula-370c4.firebaseapp.com",
  projectId: "aula-370c4",
  storageBucket: "aula-370c4.appspot.com",
  messagingSenderId: "154044000",
  appId: "1:154044000:web:00fe4d43c28ce6fcb42505"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};