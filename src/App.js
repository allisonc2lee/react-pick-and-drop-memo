import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';

import Homepage from './Container/Home'
import SubmitMemo from './Components/SubmitMemo/SubmitMemo'
import User from './Components/User/User'
import Header from './Components/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" component={Homepage} exact/>
          <Route path="/addNewMemo" component={SubmitMemo} />
          <Route path="/user" component={User} />
        </Switch>
      </div>
    );
  }
}

export default App;
