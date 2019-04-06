import React from 'react';
import { Link } from 'react-router-dom';

const ProfileIcon = props => {
    return(
        <div>
            {props.userDatqa ? 
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdvxYkwraOEJ_Rm2XUk_h-uwM91uFfTIkd8ky55rwgVtHWKl_Tg" alt={props.name} /> 
                : <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdvxYkwraOEJ_Rm2XUk_h-uwM91uFfTIkd8ky55rwgVtHWKl_Tg" alt="Drop and Pick" />
            }
            <p>{ props.name }</p>

        </div>
    )
}

export default ProfileIcon