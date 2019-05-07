import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCC05Wp2ZLjTwq3K_46ZQCvdFlMc4-RiIY",
    authDomain: "fitindiamission-8d35e.firebaseapp.com",
    databaseURL: "https://fitindiamission-8d35e.firebaseio.com",
    projectId: "fitindiamission-8d35e",
    storageBucket: "fitindiamission-8d35e.appspot.com",
    messagingSenderId: "975428497398",
    appId: "1:975428497398:web:f86aeda74fd90f05"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  
  const storage = firebase.storage();
  const storageRef = storage.ref();
  const imagesRef = storageRef.child('images');
  const fileName = 'p1.png';
  const spaceRef = imagesRef.child(fileName);
  const path = spaceRef.fullPath;


  firebase.database().ref().set('it works'`path`);
