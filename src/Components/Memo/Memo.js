import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

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
                        { hoverMemo ? <Button variant="outlined" onClick={() => {setClickedReply(true)}}>Reply</Button> : null}
                        { clickedReply ? 
                            <form>
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                                <Button>Send</Button>
                            </form> 
                        : null }
                    </div>
                </Paper>
            </Grid>
        </>
    )
}

export default Memo