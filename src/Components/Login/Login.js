import React, { Component } from 'react'
import firebase from "firebase"
import app from '../../base'
import LoginMethod from './LoginMethod'

class User extends Component{

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            
        })
    }

    authenticate = (provider) => {
        const authProvider = new firebase.auth[`${provider}AuthProvider`]()
        app.auth().signInWithPopup(authProvider)
            .then(this.authHandler)
    }
    
    render() {
        return(
            <>  
                <LoginMethod authenticate={this.authenticate}/>
            </>
        )
    }
}

export default User