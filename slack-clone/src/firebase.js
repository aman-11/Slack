// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCUn6O-1abG4FlLLBS0orydqu4fL6brqB0",
    authDomain: "slack-clone-9f9b0.firebaseapp.com",
    projectId: "slack-clone-9f9b0",
    storageBucket: "slack-clone-9f9b0.appspot.com",
    messagingSenderId: "699317602587",
    appId: "1:699317602587:web:c436df91cdee336a9e2bbe",
    measurementId: "G-7K1CH4TSXJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };