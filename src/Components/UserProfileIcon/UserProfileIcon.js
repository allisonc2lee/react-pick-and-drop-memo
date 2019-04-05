import React from 'react'
import { Link } from 'react-router-dom'

const ProfileIcon = (props) => {
    return(
        <div>
            {props.userDatqa ? 
                <img src="#" alt={props.name} /> 
                : <img src="#" alt="Drop and Pick" />
            }
            <div className="dropdown">
                <ul>
                    { props.didLogin ? 
                    <li className="dropdown__item">Log Out</li> 
                    : <Link to="/login">Login</Link>
                    }
                </ul>
            </div>
        </div>
    )
}

export default ProfileIcon