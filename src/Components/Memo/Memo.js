import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const Memo = (props) => {

    const [clickedReply, setClickedReply] = useState(false)
    const [hoverMemo, setHoverMemo] = useState(false)
    const [message, setMessage] = useState('')
    const [replied, setReplied] = useState(false)


    return(
        <>
            <Grid item xs={4}>
                <Paper className="memoPaper" 
                        onMouseOver={() => setHoverMemo(true)} 
                        onMouseLeave={() => {
                            setHoverMemo(false)
                            setClickedReply(!setClickedReply)
                        }}>
                    <div 
                        key={props.id} 
                        className="memo" >
                        <h3>{props.name}</h3>
                        <p>{props.message}</p>
                        { hoverMemo ? <Button 
                                        variant="outlined" 
                                        onClick={() => {setClickedReply(!clickedReply)}}
                                        >
                        { 
                            !clickedReply ? 'REPLY' : 'SEND'
                        }
                        </Button> : null}
                        { clickedReply ? 
                            <form>
                                <textarea name="" id="" cols="30" rows="10" onChange={(e) => setMessage(e.target.value)}></textarea>
                            </form> 
                        : null }
                    </div>
                </Paper>
            </Grid>
        </>
    )
}

export default Memo