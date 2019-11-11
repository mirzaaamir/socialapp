import firebase from 'firebase';
import 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyC0bW80EjWXhVEkoa3GBHWehOsH8tg9bCM",
    authDomain: "socialapp-255401.firebaseapp.com",
    databaseURL: "https://socialapp-255401.firebaseio.com",
    projectId: "socialapp-255401",
    storageBucket: "socialapp-255401.appspot.com",
    messagingSenderId: "54415095454",
    appId: "1:54415095454:web:1f7845d1e4cf0d1264ed8f",
    measurementId: "G-2EQ8FNYFT2"
}
// firebase.initializeApp(firebaseConfig);
// const firestore = firebase.firestore();
// const settings = {
//     timestampsInSnapshots: true
// } 
// firestore.settings(settings);  


// index.js:1375 You have included the Google Maps JavaScript API multiple times on this page. This may cause unexpected errors. ab y mslah hai
// or kahan kahan apply ki hai api

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;