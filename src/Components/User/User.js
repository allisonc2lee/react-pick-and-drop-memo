import React, { Component } from 'react'
import firebase from "firebase"
import axios from 'axios'

import Grid from '@material-ui/core/Grid';

import app from '../../base'
import MemoGrid from '../MemosGrid/MemoGrid'
import UserProfile from '../UserProfile/UserProfile'

class User extends Component{

    constructor(props) {
        super(props);
        this.state = {
            memos: {},
            didAuth: false,
            userId: null,
            userName: "",
            userIcon: null,
            updated: false
        }
        this.deleteMemo = this.deleteMemo.bind(this); 
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
    }


    loadUserMemo() {
        axios.get('/memos.json')
        .then(response => {
            let arr = {...response.data}
            this.setState({
                memos: arr
            })
        })
    }

    deleteMemo(key, index) {
       // https://programmingwithmosh.com/javascript/axios-in-react-bring-your-data-to-the-front/
        let updatedMemos = {...this.state.memos}
        let memosItem = Object.keys(updatedMemos).map((Arr, index) => {
            let memoItem = [...Array( updatedMemos[Arr] )] 
        })

        axios.delete(`/memos/${key}.json`)
            .then(res => {
                console.log(res)
                this.setState({ updated: true })
                if(this.state.updated) {
                    console.log(index)
                    this.loadUserMemo()
                }
            })

        
        
        
        // let memoUser = props.notes
        // let myMemoId

        // memoUser.map((myMemo) => {
        //     myMemoId = myMemo.uid
        //     return myMemoId
        // })
        
        // if(props.userId === myMemoId) {
        //     axios.delete(`/memos/${props.datakey}.json`)
        // }

        // memoUser.splice(0, 1);
        // console.log(memoUser)
    }


    render() {

        const isLoggedIn = this.state.didAuth
        let logined

        if(isLoggedIn) {
            logined = 
                        <UserProfile 
                            userData={this.state.didAuth}
                            name={this.state.userName} 
                            userIcon={this.state.userIcon}  
                        />
        } else {
            logined = null
        }

        let userData = <p>Failed to load User Data</p>

        if(this.state.memos) {
            userData = Object.keys(this.state.memos).map((memo) => {

                let key = memo

                let userArr = [...Array( this.state.memos[memo] )]

                return userArr.map(memo => {
                    if(memo.uid === this.state.userId) {                        
                        return <MemoGrid 
                                    notes={userArr} 
                                    url={this.props.match.path}
                                    key={new Date().valueOf()} 
                                    datakey={ key }
                                    userId={this.state.userId}
                                    onUserPage={ true }
                                    memos={userArr}
                                    deleteMemo={(e) => this.deleteMemo(key)}
                                    />
                    }
                })
            })
        }
        

        return(
            <>  
                <Grid container spacing={16}>
                    { logined }
                    <Grid container item xs={12} spacing={24}>
                        { userData }
                    </Grid>
                </Grid>
            </>
        )
    }
}

export default User