import React from 'react'
import { Link } from 'react-router-dom'
import UserProfileIcon from '../UserProfileIcon/UserProfileIcon'

const Header = () => {
    return(
        <>
            <nav>
                <ul>
                    <Link to="/">
                        <h1>Pick and Drop</h1>
                    </Link>
                    <Link to="/addNewMemo">Add New</Link>
                    <Link to="/user">User</Link>
                </ul>
                <Link to="/login">
                    <UserProfileIcon />
                </Link>
            </nav>
        </>
    )
}

export default Header