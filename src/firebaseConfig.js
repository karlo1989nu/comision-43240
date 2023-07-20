import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5ih0cLbJurltp8Y5Dqxr9HOBlJ1PQJLA",
  authDomain: "knu-comision-43240.firebaseapp.com",
  projectId: "knu-comision-43240",
  storageBucket: "knu-comision-43240.appspot.com",
  messagingSenderId: "433861447301",
  appId: "1:433861447301:web:a1cf811e397a167fe863ec",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
