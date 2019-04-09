import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import firebase from 'firebase'

import Homepage from './Container/Home'
import SubmitMemo from './Components/SubmitMemo/SubmitMemo'
import User from './Components/User/User'

import Header from './Components/Header/Header'
import Login from './Components/Login/Login'

class App extends Component {
  state = {
    login: false,
    userId: ''
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        console.log(user)
        this.setState({
          login: true,
          userId: user.uid
        })
      }
    })
  }

  SignOutUser = async() => {
    console.log('logging out')
    await firebase.auth().signOut()
    this.setState({
      login: false
    })
  }

  render() {
    return (
      <div className="App">
        <Header SignOutUser={this.SignOutUser} login={this.state.login}/>
        {this.state.login ?         
          <Switch>
              <Route path="/addNewMemo" component={SubmitMemo} />
              <Route path="/user" component={User} />
              <Route path="/login" component={Login} />
              <Route path="/" component={Homepage} />
              <Route render={() => <p>Page not found</p>} />
            </Switch>
         : 
          <Route component={Login} />
        }
      </div>
    );
  }
}

export default App;
