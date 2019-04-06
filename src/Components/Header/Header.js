import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import firebase from 'firebase'

const Header = props => {

    const [auth, setAuth] = useState(false)

    const [authNav, setAuthNav] = useState([
        {link: "/addNewMemo", content: 'Add New'},
        {link: "/user", content: 'Profile'}
    ])

    useState(() => {
        firebase.auth().onAuthStateChanged(() => {
            setAuth(true)
        })
    })

    const afterLogin = authNav.map(auth => <Link to={auth.link}>{auth.content}</Link>)

    return(
        <>
            <nav>
                <ul>
                    <Link to="/">
                        <h1>Pick and Drop</h1>
                    </Link>
                    { auth ? afterLogin : <Link to="/user">Login</Link> }
                </ul>

            </nav>
        </>
    )
}

export default Header