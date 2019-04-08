import React from 'react';
import Memo from '../Memo/Memo'

const MemoGrid = (props) => {

    const memoList = props.notes.map(memo => {
        return(
            <Memo 
                key={memo.id}
                name={memo.author}
                message={memo.message}
                uid={memo.uid}
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