import React, { useState } from 'react';
import Memo from '../Memo/Memo'
import Grid from '@material-ui/core/Grid';

const MemoGrid = (props) => {

    const [ selected, setSelected ] = useState([])

    function replyMemo () {
        setSelected(props.notes)
        console.log(props.notes)
        // console.log(props.notes)
    }

    const memoList = props.notes.map(memo => {
        return(
            <Memo 
                key={memo.id}
                name={memo.author}
                message={memo.message}
                uid={memo.uid}
                replyMemo={replyMemo}
            />
        )
    })

    return(
        <>      
            { memoList }
        </>
    )
}

export default MemoGrid