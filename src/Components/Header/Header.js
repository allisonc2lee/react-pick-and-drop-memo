import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import UserProfileIcon from '../UserProfileIcon/UserProfileIcon'

const Header = props => {

    const [auth, setAuth] = useState(false)

    const [authNav, setAuthNav] = useState([
        {link: "/addNewMemo", content: 'Add New'},
        {link: "/user", content: 'Profile'}
    ])

    const afterLogin = authNav.map(auth => <Link to={auth.link}>{auth.content}</Link>)

    return(
        <>
            <nav>
                <ul>
                    <Link to="/">
                        <h1>Pick and Drop</h1>
                    </Link>
                    { !auth ? afterLogin : <Link to="/login">Login</Link> }
                    
                </ul>

            </nav>
        </>
    )
}

export default Header