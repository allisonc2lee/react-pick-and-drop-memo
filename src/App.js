import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Homepage from './Container/Home'
import SubmitMemo from './Components/SubmitMemo/SubmitMemo'
import User from './Components/User/User'
import Memo from './Components/Memo/Memo'
import Header from './Components/Header/Header'
import Login from './Components/Login/Login'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="memo/:id" component={Memo} />
          <Route path="/addNewMemo" component={SubmitMemo} />
          <Route path="/user" component={User} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Homepage} />
          <Route render={() => <p>Page not found</p>} />
        </Switch>
      </div>
    );
  }
}

export default App;
