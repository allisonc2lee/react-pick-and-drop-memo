import React, { Component } from 'react'
import firebase from "firebase"
import axios from 'axios'

import app from '../../base'
import MemoGrid from '../MemosGrid/MemoGrid'
import UserProfile from '../UserProfile/UserProfile'

class User extends Component{
    state = {
        myMemo: [
            {id: 11, name: 'User Bobby', message: "Memo on the User page 1"},
            {id: 12, name: 'User Bobby', message: "Memo on the User page 2"},
            {id: 13, name: 'User Bobby', message: "Memo on the User page 3"},
        ],
        didAuth: false,
        userId: null,
        userName: "",
        userIcon: null,
        testing: []
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {

            let displayName

            if(user) {
                if(!user.displayName) {
                    displayName = user.email
                } else {
                    displayName = user.displayName
                }

                this.setState({
                    didAuth: true,
                    userId: user.uid,
                    userName: displayName,
                    userIcon: user.photoURL
                })

                this.loadMemoData()
            }
            console.log(user)
        })
    }

    authenticate = (provider) => {
        const authProvider = new firebase.auth[`${provider}AuthProvider`]()
        app.auth().signInWithPopup(authProvider)
            .then(this.authHandler)
    }

    loadMemoData() {
        axios.get(`/memos.json`)
            .then(res => {
                console.log(res.data)
                this.setState({
                    testing: res.data
                })
            })
            .catch(error => console.log(error))
    }


    render() {

        const isLoggedIn = this.state.didAuth
        let logined

        if(isLoggedIn) {
            logined = <div>
                        <UserProfile 
                            userData={this.state.didAuth}
                            name={this.state.userName} 
                            userIcon={this.state.userIcon}  
                        />
                        <MemoGrid notes={this.state.myMemo} url={this.props.match.path}/>
                    </div>
        } else {
            logined = null
        }

        return(
            <>  
                { logined }
            </>
        )
    }
}

export default User