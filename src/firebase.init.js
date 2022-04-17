// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCHgmyRCFVZhXmispZVrG195XHo_Yz6llg",
    authDomain: "dentist-in-shahin.firebaseapp.com",
    projectId: "dentist-in-shahin",
    storageBucket: "dentist-in-shahin.appspot.com",
    messagingSenderId: "541628022622",
    appId: "1:541628022622:web:4123399740e72f977ed9cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;