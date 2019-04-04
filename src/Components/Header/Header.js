import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    return(
        <>
            
            <ul>
                <Link to="/">
                    <h1>Pick and Drop</h1>
                </Link>
                <Link to="/addNewMemo">Add New</Link>
                <Link to="/user">User</Link>
            </ul>
        </>
    )
}

export default Header