import React, {useState, useEffect} from 'react'
import axios from 'axois'
import { Route } from 'react-router-dom'

import PleaseLogin from '../PleaseLogin'
import MemoGrid from '../MemosGrid/MemoGrid'

const User = (props) => {

    const [ myMemos, setMyMemos ] = useState([])

    // useEffect(() => {
    //     axios.get('/usersData')
    //         .then(
    //             res => {
    //                 setMyMemos(res)
    //             }
    //         )
    //         .catch(
    //             error => {
    //                 return <Route render={() => <p>Something seem wrong on our end!</p>} />
    //             }
    //         )
    // })

    return(
        <>  
            {props.didUserLogin ? 
                <div className="">
                    <h2>My Account</h2>
                    <div>User Icon</div>
                    <MemoGrid notes={myMemos} url={props.match.path}/>
                </div>
            :
            <Route component={PleaseLogin} />
            }
        </>
    )
}

export default User