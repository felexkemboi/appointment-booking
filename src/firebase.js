import firebase from 'firebase';



var config = {
    apiKey: "AIzaSyBON5aCwA5jtjRMR326nLfSfEWwQqFppYE",
    authDomain: "appointment-1a173.firebaseapp.com",
    databaseURL: "https://appointment-1a173-default-rtdb.firebaseio.com",
    projectId: "appointment-1a173",
    storageBucket: "appointment-1a173.appspot.com",
    messagingSenderId: "1070183188969",
    appId: "1:1070183188969:web:fb73c6f9dc5df44ad5e378",
    measurementId: "G-0J5XXYV0L0"
  };

firebase.initializeApp(config);

//const db = firebase.firestore()
//const auth = firebase.auth()

// collection references
//const usersCollection = db.collection('users')
//const appointmentsCollection = db.collection('appointments')

// export {
//   db,
//   auth,
//   usersCollection,
//   appointmentsCollection,
// }

export default firebase;
