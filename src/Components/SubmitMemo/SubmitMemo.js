import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import axios from 'axois'

import PleaseLogin from '../PleaseLogin'

class SubmitMemo extends Component {

    state = {
        title: '',
        message: '',
        author: '',
        submitted: false

    }

    memoDataHandler = () => {
        // const memo = {
        //     title: this.state.title,
        //     message: this.state.message,
        //     author: this.state.author
        // }
        // axios.post('/memos', memo) 
        //     .then(res => {
        //         console.log(res)
        //         this.props.history.push('/memos')
        //     })
        }

        render() {
            return(
                <>  
                    {
                        this.props.didUserLogin ? 
                        <div className="">
                            <h2>Add a SubmitMemo</h2>
                            <form action="">
                                <label>Enter your message</label>
                                <textarea 
                                    value={this.state.memo.content}
                                    onChange={(event) => this.setState({message: event.target.value})}
                                    cols="30" 
                                    rows="10"></textarea>
                                <button onClick={this.memoDataHandler}>Add</button>
                            </form>
                        </div> :
                        <Route component={PleaseLogin} />
                    }
                </>
            )
        }
    }




export default SubmitMemo