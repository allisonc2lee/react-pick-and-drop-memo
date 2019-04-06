import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import firebase from 'firebase'
import axios from '../../axios'
import { Redirect } from 'react-router-dom'

class SubmitMemo extends Component {

    state = {
        title: '',
        message: '',
        author: '',
        submitted: false
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {

            let displayName

            if(user) {
                if(!user.displayName) {
                    displayName = user.email
                } else {
                    displayName = user.displayName
                }

                this.setState({
                    author: displayName
                })
            }


        })
    }

    memoDataHandler = (event) => {
        event.preventDefault()
        const memo = {
            title: this.state.title,
            message: this.state.message,
            author: this.state.author
        }
        // const { params } = this.props.match
        
        axios.post('/memos.json', memo) 
            .then(res => {
                console.log(res)
                this.props.history.push('/memos')
            })
            .catch(error => console.log(error))

        this.setState({
            submitted: true
        })

    }

        render() {
            return(
                <>  
                    <div className="">
                        <h2>Add a SubmitMemo</h2>
                        <form action="">
                            <label>Enter your message</label>
                            <textarea 
                                onChange={(event) => this.setState({message: event.target.value})}
                                cols="30" 
                                rows="10"></textarea>
                            <button onClick={this.memoDataHandler}>Add</button>
                        </form>
                    </div> 
                    {this.state.submitted ? <Redirect to='/' /> : null}
                </>
            )
        }
    }




export default SubmitMemo