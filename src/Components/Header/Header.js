import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import firebase from 'firebase'
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { withStyles } from '@material-ui/core/styles';


const Header = props => {

    const [auth, setAuth] = useState(false)

    const [authNav, setAuthNav] = useState([
        {name: 'submit-page',link: "/addNewMemo", content: 'Add New'},
        {name: 'user-page',link: "/user", content: 'Profile'}
    ])

    useState(() => {
        firebase.auth().onAuthStateChanged(() => {
            setAuth(true)
        })
    })

    const afterLogin = authNav.map(auth => <li key={auth.name}><Link to={auth.link}>{auth.content}</Link></li>)

    let logOut = props.login
    let showLogOutButton

    if(!logOut) {
        showLogOutButton = <li><Link to="/user">Login</Link></li>
    } else {
        showLogOutButton = <>
            {afterLogin}
            <li><a href="#" onClick={props.SignOutUser}>Log Out</a></li>
        </>
    }

    return(
        <>
            <nav>
                <ul>
                    <Link to="/">
                        <h1>Pick and Drop</h1>
                    </Link>
                    { showLogOutButton }                
                </ul>
            </nav>
        </>
    )
}

export default Header