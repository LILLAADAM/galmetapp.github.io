// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAxN1Q9g2kcDcaiTwPsSZEgsTvtyLyN3oY",
  authDomain: "galmet-app.firebaseapp.com",
  projectId: "galmet-app",
  storageBucket: "galmet-app.firebasestorage.app",
  messagingSenderId: "900590512024",
  appId: "1:900590512024:web:16a36a085809a728c92ded"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
