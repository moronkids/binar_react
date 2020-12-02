import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDf1UKp9ukAx2RsAj9m5g-pwiv0Av3Qvps",
    authDomain: "todolist-f9f5a.firebaseapp.com",
    databaseURL: "https://todolist-f9f5a.firebaseio.com",
    projectId: "todolist-f9f5a",
    storageBucket: "todolist-f9f5a.appspot.com",
    messagingSenderId: "863267519977",
    appId: "1:863267519977:web:e163919460df4923dd1f78",
    measurementId: "G-WHK2KM9JP8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();