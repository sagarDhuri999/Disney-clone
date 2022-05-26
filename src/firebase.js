import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAtcMTxWTL5BiJcnaPIR-X_0Ech09z9Fr8",
    authDomain: "clone-app-8e846.firebaseapp.com",
    projectId: "clone-app-8e846",
    storageBucket: "clone-app-8e846.appspot.com",
    messagingSenderId: "16200441949",
    appId: "1:16200441949:web:f80a49bd70e9ecee746db4"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);