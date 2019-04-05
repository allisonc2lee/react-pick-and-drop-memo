import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './css/style.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios'
axios.defaults.baseURL = 'https://my-json-server.typicode.com/chingchinglcc/fake-json-placeholder';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
