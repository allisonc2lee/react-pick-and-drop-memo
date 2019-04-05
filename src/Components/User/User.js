import React, { Component } from 'react'
import firebase from "firebase"
import app from '../../base'
import Login from '../Login/Login'
import MemoGrid from '../MemosGrid/MemoGrid'
import UserProfile from '../UserProfile/UserProfile'

class User extends Component{
    state = {
        myMemo: [
            {id: 11, name: 'User Bobby', message: "Memo on the User page 1"},
            {id: 12, name: 'User Bobby', message: "Memo on the User page 2"},
            {id: 13, name: 'User Bobby', message: "Memo on the User page 3"},
        ],
        didAuth: false
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

        const isLoggedIn = this.state.didAuth
        let logined

        if(isLoggedIn) {
            logined = <div>
                        <UserProfile />
                        <MemoGrid notes={this.state.myMemo} url={this.props.match.path}/>
                    </div>
        } else {
            logined = <Login authenticate={this.authenticate}/>
        }

        // const afterAuth = <div></div>

        return(
            <>  
                { logined }
            </>
        )
    }
}

export default User