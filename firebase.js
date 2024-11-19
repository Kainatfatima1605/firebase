
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword ,onAuthStateChanged ,signOut ,GoogleAuthProvider,signInWithPopup} from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js';
const firebaseConfig = {
  apiKey: "AIzaSyDhBcMpGuB6v-w9APGB7ozktwU-yhU4ghs",
  authDomain: "firstproject-5b5db.firebaseapp.com",
  projectId: "firstproject-5b5db",
  storageBucket: "firstproject-5b5db.firebasestorage.app",
  messagingSenderId: "162373007228",
  appId: "1:162373007228:web:44582baf4c59bd6026d6f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =  getAuth(app);
const provider = new GoogleAuthProvider();

export{auth,provider,createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged ,signOut,GoogleAuthProvider,signInWithPopup }