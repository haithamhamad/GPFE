import { initializeApp, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBcjdHs6dkwsNsdvKQ1xFqPqG1RZto4zKc",
    authDomain: "gpfe-df87a.firebaseapp.com",
    projectId: "gpfe-df87a",
    storageBucket: "gpfe-df87a.appspot.com",
    messagingSenderId: "339889042690",
    appId: "1:339889042690:web:a107975af0f9d99d823e1b",
    measurementId: "G-C5QCEXHWFQ"

};

initializeApp(firebaseConfig);

const auth = getAuth();
const database= getFirestore();

export { database, auth };