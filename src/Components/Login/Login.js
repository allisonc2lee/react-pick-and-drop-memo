import React from 'react'

const Login = (props) => {
    return (
        <nav>
            <h2>Login In Information</h2>
            <p>Sign in to manage your store's inventory</p>
            <button className="github" onClick={() => props.authenticate("Github")}>
                Log In With GitHub
            </button>
            <button className="twitter" onClick={() => props.authenticate("Twitter")}>
                Log In With Twitter
            </button>
            <button className="facebook" onClick={() => props.authenticate("Facebook")}>
                Log In With Facebook
            </button>
        </nav>
    )
}

export default Login