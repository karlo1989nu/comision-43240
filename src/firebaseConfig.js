import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5ih0cLbJurltp8Y5Dqxr9HOBlJ1PQJLA",
  authDomain: "knu-comision-43240.firebaseapp.com",
  projectId: "knu-comision-43240",
  storageBucket: "knu-comision-43240.appspot.com",
  messagingSenderId: "433861447301",
  appId: "1:433861447301:web:a1cf811e397a167fe863ec",
};

//Este comentario fue dejado así a propósito, porque por más que lo intenté siempre me dio error y no logré solucionarlo

//El documento .env contiene lo siguiente:

// VITE_API_KEY=AIzaSyB5ih0cLbJurltp8Y5Dqxr9HOBlJ1PQJLA
// VITE_AUTH_DOMAIN=knu-comision-43240.firebaseapp.com
// VITE_PROJECT_ID=knu-comision-43240
// VITE_STORAGE_BUCKET=knu-comision-43240.appspot.com
// VITE_MESSAGING_SENDER_ID=433861447301
// VITE_API_ID=1:433861447301:web:a1cf811e397a167fe863ec

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_API_ID,
// };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const auth = getAuth(app);

export const ingresar = async ({ email, password }) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const register = async ({ email, password }) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

const googleAuth = new GoogleAuthProvider();
export const loginWithGoogle = async () => {
  return await signInWithPopup(auth, googleAuth);
};
