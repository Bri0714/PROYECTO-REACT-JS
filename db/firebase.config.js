// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA3YLwwdhWWMaGH0a5VC8JeSBIUGCnWxuU",
    authDomain: "proyectofinalreact-ed3db.firebaseapp.com",
    projectId: "proyectofinalreact-ed3db",
    storageBucket: "proyectofinalreact-ed3db.appspot.com",
    messagingSenderId: "794485556103",
    appId: "1:794485556103:web:b6b399522d1a3745bf4922"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default db