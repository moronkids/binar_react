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


// this.firebaseAuth.onAuthStateChanged((user) => {
//   let userSessionTimeout = null

//   if (user === null && userSessionTimeout) {
//     clearTimeout(userSessionTimeout)
//     userSessionTimeout = null
//   } else {
//     user.getIdTokenResult().then((idTokenResult) => {
//       const authTime = idTokenResult.claims.auth_time * 1000
//       const sessionDurationInMilliseconds = 60 * 60 * 1000 // 60 min
//       const expirationInMilliseconds =
//         sessionDurationInMilliseconds - (Date.now() - authTime)
//       userSessionTimeout = setTimeout(
//         () => this.firebaseAuth.signOut(),
//         expirationInMilliseconds
//       )
//     })
//   }
// })