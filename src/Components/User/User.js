import React, { Component } from 'react'
import firebase from "firebase"
import app from '../../base'
import MemoGrid from '../MemosGrid/MemoGrid'
import UserProfile from '../UserProfile/UserProfile'

class User extends Component{
    state = {
        myMemo: [
            {id: 11, name: 'User Bobby', message: "Memo on the User page 1"},
            {id: 12, name: 'User Bobby', message: "Memo on the User page 2"},
            {id: 13, name: 'User Bobby', message: "Memo on the User page 3"},
        ]
    }

    authHandler = async(authData) => {
        console.log(authData)
    }

    authenticate = (provider) => {
        const authProvider = new firebase.auth[`${provider}AuthProvider`]()
        app.auth().signInWithPopup(authProvider)
            .then(this.authHandler)
    }
    
    render() {
        return(
            <>  
                <UserProfile />
                <MemoGrid notes={this.state.myMemo} url={this.props.match.path}/>
            </>
        )
    }
}

export default User