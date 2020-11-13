// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAG3vXyvhnGUvK0YyX7A2c-paxfDwrGP90",
    authDomain: "slack-clone-f2a51.firebaseapp.com",
    databaseURL: "https://slack-clone-f2a51.firebaseio.com",
    projectId: "slack-clone-f2a51",
    storageBucket: "slack-clone-f2a51.appspot.com",
    messagingSenderId: "565086724851",
    appId: "1:565086724851:web:e8955ea5689d106fb08d86",
    measurementId: "G-T7C69DKLPR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

    export { auth, provider };
    export default db;
    