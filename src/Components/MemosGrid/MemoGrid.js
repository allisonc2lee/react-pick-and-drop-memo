import React, { useState, useEffect } from 'react';
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

    const [newMemoList, setNewMemoList] = useState({})
    const [deleted, setDeleted] = useState(false)

    const { classes } = props;    

    useEffect(() => {
        setNewMemoList(props.memos)
    }, [])

    function deleteMemo(index) {
        
        

        let memoUser = props.notes
        let myMemoId

        memoUser.map((myMemo) => {
            myMemoId = myMemo.uid
            return myMemoId
        })
        
        if(props.userId === myMemoId) {
            axios.delete(`/memos/${props.datakey}.json`)
        }

        memoUser.splice(0, 1);
        console.log(memoUser)
    }


    const memoList = props.notes.map(memo => {
        return(
                <Grid item xs={6} sm={4} key={memo.id} datakey={memo.datakey}>
                    <Card className="memoPaper">
                        <div 
                            className="memo" >
                            <h3>{memo.author}</h3>
                            <p>{memo.message}</p>
                            { props.onUserPage ? <DeleteIcon className={classes.icon} onClick={deleteMemo} /> : null }
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

