// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Your Configuration
const firebaseConfig = {
    apiKey: "AIzaSyBVrjOiSrVvHdl2YKpeqpscurgXY3ssgCI",
    authDomain: "adishaktirealty-770f3.firebaseapp.com",
    projectId: "adishaktirealty-770f3",
    storageBucket: "adishaktirealty-770f3.firebasestorage.app",
    messagingSenderId: "503178690938",
    appId: "1:503178690938:web:d10d7e7f8d1dfd9db296c3"
};

// Initialize One Time
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export the database so other files can use it
export { db };