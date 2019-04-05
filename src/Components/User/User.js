import React, { Component } from 'react'
import firebase from "firebase"
import app from '../../base'
import MemoGrid from '../MemosGrid/MemoGrid'
import Login from '../Login/Login'

class User extends Component{
    state = {
        myMemo: []
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
                {this.props.didUserLogin ? 
                    <div className="">
                        <h2>My Account</h2>
                        <div>User Icon</div>
                        <MemoGrid notes={this.state.myMemos} url={this.props.match.path}/>
                    </div>
                :
                    <div>
                        <Login authenticate={this.authenticate} />
                    </div> 
                }
            </>
        )
    }
}

export default User