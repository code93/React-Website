import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCSZ7MBDzQ4xXGVQoUjIED7GhRMIw7UYuI",
  authDomain: "code93-67192.firebaseapp.com",
  databaseURL: "https://code93-67192.firebaseio.com",
  projectId: "code93-67192",
  storageBucket: "gs://code93-67192.appspot.com/",
  messagingSenderId: "988854676856",
  appId: "1:988854676856:web:2d9784289117aee2a1ac8d",
  measurementId: "G-Z4QPP9PSW6"
  };

  firebase.initializeApp(config);

  const firebaseDB = firebase.database();
  const firebaseArticles= firebaseDB.ref('articles');
  const firebaseTeams = firebaseDB.ref('teams');
  const firebaseVideos = firebaseDB.ref('videos');

  const firebaseLooper = (snapshot) => {
    const data=[];
    snapshot.forEach((childSnapshot)=>{
        data.push({
            ...childSnapshot.val(),
            id:childSnapshot.key
        })
    });
    return data;
  }
 
  export {
    firebase,
    firebaseDB,
    firebaseArticles,
    firebaseVideos,
    firebaseTeams,
    firebaseLooper
  }