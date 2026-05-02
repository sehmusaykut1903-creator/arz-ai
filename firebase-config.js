import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyDjIGcen_K2oqG2sCFF508VzUt1ITvsjyg",
  authDomain: "arz-ai.firebaseapp.com",
  projectId: "arz-ai",
  storageBucket: "arz-ai.firebasestorage.app",
  messagingSenderId: "464542023476",
  appId: "1:464542023476:web:2b09014bb99dbba8d66f61"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
