import firebase from "firebase";

//For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgKwwgx-6QxGLtB4BkkmpPjGpt5VHsoYc",
  authDomain: "whatsapp-clone-32b8c.firebaseapp.com",
  projectId: "whatsapp-clone-32b8c",
  storageBucket: "whatsapp-clone-32b8c.appspot.com",
  messagingSenderId: "885944144611",
  appId: "1:885944144611:web:47549ecbe5ddc5d635abd6",
  measurementId: "G-1K9G43G6YL"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export default db;
