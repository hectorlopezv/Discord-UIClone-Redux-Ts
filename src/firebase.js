import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyCuNWFRPJefjg5KUqUGq1OGR1UOQi2JJJw",
    authDomain: "discordclone-34505.firebaseapp.com",
    databaseURL: "https://discordclone-34505-default-rtdb.firebaseio.com",
    projectId: "discordclone-34505",
    storageBucket: "discordclone-34505.appspot.com",
    messagingSenderId: "1061942616291",
    appId: "1:1061942616291:web:b36bf94913fcf58c27a5d6"
  };

//Setting upp fireStore and authetnication with google
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db =  firebaseApp.firestore();
  const auth = firebaseApp.auth();
  //providers
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;