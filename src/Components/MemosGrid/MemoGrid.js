import React, {useState, useEffect} from 'react';
import Memo from '../Memo/Memo'

const MemoGrid = (props) => {

    const memoList = props.notes.map(memo => {
        return(
            <Memo 
                key={memo.id}
                name={memo.name}
                message={memo.title}
            />
        )
    })

    return(
        <>
            <h2>MemoGrid Component</h2>
            <ul>
                { memoList }
            </ul> 
            
        </>
    )
}

export default MemoGrid