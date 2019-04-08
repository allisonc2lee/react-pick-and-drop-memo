import React, { useState } from 'react';
import axios from 'axios'
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
      color: theme.palette.text.primary,
    },
    icon: {
      margin: theme.spacing.unit,
      fontSize: 32,
      cursor: 'pointer'
    },
  });

const MemoGrid = (props) => {

    const { classes } = props;

    const [clickedReply, setClickedReply] = useState(false)
    const [hoverMemo, setHoverMemo] = useState(false)
    const [message, setMessage] = useState('')
    const [onUserPage, setOnUserPage] = useState(false)
    

    function deleteMemo(event) {

                axios.delete(`/memos/${props.datakey}.json`)
                    .then(res=> {
                        console.log(res)
                })


    }

    const memoList = props.notes.map(memo => {
        return(
                <Grid item xs={6} sm={4} key={memo.id} datakey={memo.dataKey}>
                    <Card className="memoPaper" 
                            onMouseOver={() => setHoverMemo(true)} 
                            onMouseLeave={() => {
                                setHoverMemo(false)
                                setClickedReply(!setClickedReply)
                            }}>
                        <div 
                            className="memo" >
                            <h3>{memo.author}</h3>
                            <p>{memo.message}</p>
                            { onUserPage ? <DeleteIcon className={classes.icon} onClick={deleteMemo} /> : null }
                            <IconButton aria-label="Add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                        </div>
                    </Card>
                </Grid>
        )
    })

    return(
        <>      
            { memoList }
        </>
    )
}

MemoGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MemoGrid)

