// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAxN1Q9g2kcDcaiTwPsSZEgsTvtyLyN3oY",
  authDomain: "galmet-app.firebaseapp.com",
  projectId: "galmet-app",
  storageBucket: "galmet-app.appspot.com",
  messagingSenderId: "900590512024",
  appId: "1:900590512024:web:16a36a085809a728c92ded"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);

export { db };
