import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDjzqWO83iAXCiJYjnVldslLeNflhZgW30",
    authDomain: "linkedin-clone-4ee12.firebaseapp.com",
    projectId: "linkedin-clone-4ee12",
    storageBucket: "linkedin-clone-4ee12.appspot.com",
    messagingSenderId: "516347909151",
    appId: "1:516347909151:web:192dea4cf9fbbf8e76f12a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };