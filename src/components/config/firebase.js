import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA6D5YKSJLIXZ53c4IIVxKubxt7_wOSJKY",
  authDomain: "eshop-pro-201a6.firebaseapp.com",
  projectId: "eshop-pro-201a6",
  storageBucket: "eshop-pro-201a6.appspot.com",
  messagingSenderId: "275641384751",
  appId: "1:275641384751:web:a62d3fcb97c3a4fa6e2bda",
  measurementId: "G-2PJ054VCC1",
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
