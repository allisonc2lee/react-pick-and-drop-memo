import React from 'react'

const LoginMethod = (props) => {
    return (
        <nav>
            <h2>Please Login</h2>
            <p>Sign in to Pick and Drop a memoy</p>
            <button className="github" onClick={() => props.authenticate("Github")}>
                Log In With GitHub
            </button>
            <button className="twitter" onClick={() => props.authenticate("Twitter")}>
                Log In With Twitter
            </button>
        </nav>
    )
}

export default LoginMethod