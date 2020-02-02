import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBxHuflQutI3HaX0ySD5QCgxzP5P73ie8o",
  authDomain: "asdsse-cfbd9.firebaseapp.com",
  databaseURL: "https://asdsse-cfbd9.firebaseio.com",
  projectId: "asdsse-cfbd9",
  storageBucket: "asdsse-cfbd9.appspot.com",
  messagingSenderId: "851913286449",
  appId: "1:851913286449:web:919d085c847a0598670610",
  measurementId: "G-04R4FNPX98"
};

export const app = firebase.initializeApp(config);
export const db = firebase.firestore();
