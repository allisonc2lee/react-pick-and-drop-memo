import React, { useState } from 'react';
import axios from 'axios'
import Memo from '../Memo/Memo'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const MemoGrid = (props) => {

    const [clickedReply, setClickedReply] = useState(false)
    const [hoverMemo, setHoverMemo] = useState(false)
    const [message, setMessage] = useState('')
    const [memos, setMemos] = useState({})
    const [ selected, setSelected ] = useState([])

    const memoList = props.notes.map(memo => {
        return(
                <Grid item xs={4} key={memo.id}>
                    <Paper className="memoPaper" 
                            onMouseOver={() => setHoverMemo(true)} 
                            onMouseLeave={() => {
                                setHoverMemo(false)
                                setClickedReply(!setClickedReply)
                            }}>
                        <div 
                            className="memo" >
                            <h3>{memo.author}</h3>
                            <p>{memo.message}</p>
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
                                    <Button variant="outlined" onClick={props.replyMemo}>submit</Button>
                                </form> 
                            : null }
                        </div>
                    </Paper>
                </Grid>
        )
    })

    return(
        <>      
            { memoList }
        </>
    )
}

export default MemoGrid

