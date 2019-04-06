import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import firebase from 'firebase'

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
        showLogOutButton = null
    } else {
        showLogOutButton = <li><a href="#" onClick={props.SignOutUser}>Log Out</a></li>
    }

    return(
        <>
            <nav>
                <ul>
                    <Link to="/">
                        <h1>Pick and Drop</h1>
                    </Link>
                    { auth ? afterLogin  : <Link to="/user">Login</Link> }
                    { showLogOutButton }
                </ul>

            </nav>
        </>
    )
}

export default Header