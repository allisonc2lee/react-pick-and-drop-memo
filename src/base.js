import Rebase from 're-base'
import firebase from 'firebase'

const API_KEY = process.env.FIREBASE_API

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDe0jANNR6x5x5uKmPZwjxP5dOEkhS6nA",
    authDomain: "react-drop-and-pick.firebaseapp.com",
    databaseURL: "https://react-drop-and-pick.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base;