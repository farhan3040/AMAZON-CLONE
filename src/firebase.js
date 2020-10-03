import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCOQt9A5zfTdvU9eCc2wCcBCP58GHpvMig",
  authDomain: "clone-9edbf.firebaseapp.com",
  databaseURL: "https://clone-9edbf.firebaseio.com",
  projectId: "clone-9edbf",
  storageBucket: "clone-9edbf.appspot.com",
  messagingSenderId: "344586436154",
  appId: "1:344586436154:web:c99cbb92598c004ec83f03",
  measurementId: "G-RHQZZKRD85"
});

const auth = firebase.auth();

export { auth };
