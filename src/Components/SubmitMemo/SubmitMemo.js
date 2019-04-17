import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

import firebase from 'firebase';
import axios from '../../axios';

import Home from '../../Container/Home';

class SubmitMemo extends Component {
  state = {
    title: '',
    message: '',
    author: '',
    memoId: '',
    uid: '',
    goHome: false
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      let displayName;

      if (user) {
        if (!user.displayName) {
          displayName = user.email;
        } else {
          displayName = user.displayName;
        }

        this.setState({
          author: displayName,
          uid: user.uid
        });
      }
    });
  }

  memoDataHandler = event => {
    const { uid, title, message, author } = this.state;

    event.preventDefault();

    const memo = {
      id: new Date().valueOf(),
      uid: uid,
      title: title,
      message: message,
      author: author
    };

    axios
      .post('/memos.json', memo)
      .then(res => {
        console.log(res);
        // this.props.history.push('/memos')
      })
      .catch(error => console.log(error));

    this.refs.memoform.reset();
  };
  render() {
    return (
      <>
        <div className="">
          <h2>Add a SubmitMemo</h2>
          <form action="" ref="memoform">
            <label>Enter your message</label>
            <textarea
              ref="message"
              onChange={event => this.setState({ message: event.target.value })}
              cols="30"
              rows="10"
            />
            <button onClick={this.memoDataHandler.bind(this)} type="submit">
              Add
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default SubmitMemo;
