import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyC6obwiA3slHode9Udq91f1dqWVGL4Mb1o",
  authDomain: "vue-live-chat-4413e.firebaseapp.com",
  projectId: "vue-live-chat-4413e",
  storageBucket: "vue-live-chat-4413e.appspot.com",
  messagingSenderId: "715247560516",
  appId: "1:715247560516:web:0bc0eeba52ce82fa435911"
};

// init firebase
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp, projectAuth };