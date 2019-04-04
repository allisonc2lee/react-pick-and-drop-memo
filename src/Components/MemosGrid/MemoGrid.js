import React, {useEffect} from 'react';
import { Route, Link } from 'react-router-dom'
import Memo from '../Memo/Memo'

const MemoGrid = (props) => {

    useEffect(() => {
        console.log(props.test)
    })

    const memoList = props.memos.map(memo => {
        return(
            <Link to="/id1" key={memo.id}>
                <li>
                    {memo.title}
                </li>
            </Link>
        )
    })

    return(
        <>
            <h2>MemoGrid Component</h2>
            <ul>
                { memoList }
            </ul>
            {/* <Route path={props.match.url + '/' + props.id } component={Memo}/>  */}
        </>
    )
}

export default MemoGrid