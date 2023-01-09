// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBcjdHs6dkwsNsdvKQ1xFqPqG1RZto4zKc",
    authDomain: "gpfe-df87a.firebaseapp.com",
    projectId: "gpfe-df87a",
    storageBucket: "gpfe-df87a.appspot.com",
    messagingSenderId: "339889042690",
    appId: "1:339889042690:web:a107975af0f9d99d823e1b",
    measurementId: "G-C5QCEXHWFQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);