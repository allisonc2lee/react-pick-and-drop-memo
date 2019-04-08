import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    bigAvatar: {
      margin: 10,
      width: 200,
      height: 200,
    },
};

const ProfileIcon = props => {
    const { classes } = props;
    return(
        <Grid container justify="center" alignItems="center" className="userprofile" direction="column">         
            {props.userData ? 
                <Avatar  className={classes.bigAvatar} src={props.userIcon} alt={props.name} /> 
                : <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdvxYkwraOEJ_Rm2XUk_h-uwM91uFfTIkd8ky55rwgVtHWKl_Tg" alt="Drop and Pick" />
            }
            <p class="userprofile--container_name">{ props.name }</p>
        </Grid>
    )
}

ProfileIcon.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileIcon);