import firebase from 'firebase'
require('@firebase/firestore')


var firebaseConfig = {
    apiKey: "AIzaSyBSb5inAkNNjHzzehP5kQr3cPY9CafcqqQ",
    authDomain: "story-hub-2.firebaseapp.com",
    databaseURL: "https://story-hub-2-default-rtdb.firebaseio.com",
    projectId: "story-hub-2",
    storageBucket: "story-hub-2.appspot.com",
    messagingSenderId: "958764293442",
    appId: "1:958764293442:web:7cb16f63a302e01cae7cdb",
    measurementId: "G-Q40HZRM0RL"
  };




  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()
  