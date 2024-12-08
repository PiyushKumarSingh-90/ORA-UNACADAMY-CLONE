import {initializeApp} from "firebase/app"

const firebaseConfig = 
{
    apiKey: "AIzaSyAPbC7PCUSVd5mJUP9c1fwZhU3t2PYs1ns",
    authDomain: "ora-2341a.firebaseapp.com",
    databaseURL: "https://ora-2341a-default-rtdb.firebaseio.com",
    projectId: "ora-2341a",
    storageBucket: "ora-2341a.firebasestorage.app",
    messagingSenderId: "645504318267",
    appId: "1:645504318267:web:554a1e6c89c2fd38fb151e",
    measurementId: "G-P2YBY0TPW2"
};

export const app = initializeApp(firebaseConfig);