import Rebase from 're-base'
import firebase from 'firebase'

const app = firebase.initializeApp({
    apiKey: "AIzaSyDe0jANNR6x5x5uKmPZwjxP5dOEkhS6nAM",
    authDomain: "react-drop-and-pick.firebaseapp.com",
    databaseURL: "https://react-drop-and-pick.firebaseio.com",
    projectId: "react-drop-and-pick",
    storageBucket: "react-drop-and-pick.appspot.com",
    messagingSenderId: "150315107360"
})

export default app

