import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyDzvFkqc1RgEQM1yWHvxL0YgNpflCj8PwY",
    authDomain: "twitter-clonne.firebaseapp.com",
    projectId: "twitter-clonne",
    storageBucket: "twitter-clonne.appspot.com",
    messagingSenderId: "367114636991",
    appId: "1:367114636991:web:8a7ad06ec89228df8fc00a"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()
  export {auth, provider}
  export default db;