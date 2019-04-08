import React, { Component } from 'react'
import firebase from "firebase"
import axios from 'axios'

import app from '../../base'
import MemoGrid from '../MemosGrid/MemoGrid'
import UserProfile from '../UserProfile/UserProfile'

class User extends Component{
    state = {
        // myMemo: [
        //     {id: 11, name: 'User Bobby', message: "Memo on the User page 1"},
        //     {id: 12, name: 'User Bobby', message: "Memo on the User page 2"},
        //     {id: 13, name: 'User Bobby', message: "Memo on the User page 3"},
        // ],
        memos: {},
        didAuth: false,
        userId: null,
        userName: "",
        userIcon: null,
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

                this.loadUserMemo()
            }
        })
    }

    authenticate = (provider) => {
        const authProvider = new firebase.auth[`${provider}AuthProvider`]()
        app.auth().signInWithPopup(authProvider)
            .then(this.authHandler)
    }


    loadUserMemo() {
        axios.get('/memos.json')
        .then(response => {
            let arr = {...response.data}
            this.setState({
                memos: arr
            })
            console.log(this.state.memos)
        })

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
                        {/* <MemoGrid notes={this.state.myMemo} url={this.props.match.path}/> */}
                    </div>
        } else {
            logined = null
        }

        let userData = <p>Failed to load User Data</p>

        if(this.state.memos) {
            userData = Object.keys(this.state.memos).map((memo) => {

                let userArr = [...Array( this.state.memos[memo] )]

                return userArr.map(memo => {
                    if(memo.uid === this.state.userId) {
                        return <li>{memo.message}</li>
                    }
                })
            })
        }
        



        // if(this.state.memos !== false) {
        //     loadData = Object.keys(this.state.memos).map((key) => {
        //         let arr = [...Array(this.state.memos[key])]
        //         let memoKey
        //         if( key.charAt( 0 ) === '-' ) {
        //             memoKey = key.slice( 1 );
        //             return <MemoGrid  notes={arr} url={this.props.match.path} key={memoKey}/>
        //         } else {
        //             return <MemoGrid  notes={arr} url={this.props.match.path} key={key} />
        //         }
                
        //     })
        // }

        return(
            <>  { logined }
                { userData }
            </>
        )
    }
}

export default User