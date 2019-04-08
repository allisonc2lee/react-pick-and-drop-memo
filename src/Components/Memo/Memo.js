import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const Memo = (props) => {

    const [clickedReply, setClickedReply] = useState(false)
    const [hoverMemo, setHoverMemo] = useState(false)

    return(
        <>
            <Grid item xs={4}>
                <Paper className="memoPaper" 
                        onMouseOver={() => setHoverMemo(true)} 
                        onMouseLeave={() => setHoverMemo(false)}>
                    <div 
                        key={props.id} 
                        className="memo" >
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
                </Paper>
            </Grid>
        </>
    )
}

export default Memo