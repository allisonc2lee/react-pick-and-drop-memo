import React, { useState, useEffect } from 'react';
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

    const memoList = props.notes.map(memo => {
        return(
                <Grid item xs={6} sm={4} key={memo.id} datakey={memo.datakey}>
                    <Card className="memoPaper">
                        <div 
                            className="memo" >
                            <h3>{memo.author}</h3>
                            <p>{memo.message}</p>
                            { props.onUserPage ? <DeleteIcon className={classes.icon} onClick={props.deleteMemo} /> : null }
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

