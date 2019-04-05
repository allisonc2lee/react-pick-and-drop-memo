import React, { useState } from 'react'

const Memo = (props) => {

    const [clickedReply, setClickedReply] = useState(false)
    const [hoverMemo, setHoverMemo] = useState(false)

    return(
        <>
            <div className="memo" onMouseOver={() => setHoverMemo(true)} onMouseLeave={() => setHoverMemo(false)}>
                <h3>{props.name}</h3>
                <p>{props.message}</p>
                { hoverMemo ? <button onClick={() => {setClickedReply(true)}}>Reply</button> : null}
                { clickedReply ? 
                    <form>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                        <button type="submit">Send</button>
                    </form> 
                : null }
                </div>
        </>
    )
}

export default Memo