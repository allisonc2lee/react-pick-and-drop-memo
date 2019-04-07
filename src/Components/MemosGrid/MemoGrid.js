import React, {useState, useEffect} from 'react';
import Memo from '../Memo/Memo'

const MemoGrid = (props) => {

    const memoList = props.notes.map(memo => {
        return(
            <Memo 
                key={memo.id}
                name={memo.author}
                message={memo.message}
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