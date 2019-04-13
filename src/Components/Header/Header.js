import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import firebase from 'firebase'
import PropTypes from 'prop-types'
import Typography from "@material-ui/core/Typography";
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import AccountCircle from '@material-ui/icons/AccountCircle'
import { withStyles } from '@material-ui/core/styles'


const styles = theme => ({
    root: {
        width: "100%"
    },
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    },
    title: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
        display: "block"
        }
    },
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: {
        display: "flex"
        }
    }
});

const Header = props => {

    const [auth, setAuth] = useState(false)
    const [achorEl, setAchorEl] = useState(null)

    useState(() => {
        firebase.auth().onAuthStateChanged(() => {
            setAuth(true)
        })
    })

    function profileOpenHandler(event) {
        setAchorEl(event.currentTarget)
    }

    function profileCloseHandler(event) {
        setAchorEl(null)
    }

    const isMenuOpen = Boolean(achorEl);


    let logOut = props.login

    let showLogOutButton

    if(!logOut) {
        showLogOutButton = <li className="link__item"><Link to="/user"></Link></li>
    } else {
        showLogOutButton = <>
            <IconButton
                aria-owns={isMenuOpen ? "material-appbar" : undefined} 
                aria-haspopup="true" 
                onClick={profileOpenHandler}>
                <AccountCircle />
            </IconButton>
            <Menu
                anchorEl={achorEl}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                open={isMenuOpen}
                onClose={profileCloseHandler}
            >
                <MenuItem onClick={profileCloseHandler}>
                    <li className="link_item"><Link to='/user'>Profile</Link></li>
                </MenuItem>
                <MenuItem onClick={profileCloseHandler}>
                     <li className="link_item"><a href="#" onClick={props.SignOutUser}>Log Out</a></li>
                </MenuItem>
            </Menu>
        </>
    }
    return(
            <div className="header">
                <AppBar className="header-container">
                    <Toolbar className="header-container_list">
                            <Typography className="list--link">
                                <Link to="/">
                                    Pick and Drop
                                </Link>
                            </Typography>
                            <Typography className="list--link">
                                <Link to="/addNewMemo">
                                    Add New
                                </Link>
                            </Typography>
                            { showLogOutButton }        
                    </Toolbar>
                </AppBar>
            </div>
    )
}

Header.propTypes = {
    classes: PropTypes.object.isRequired
  };

export default withStyles(styles)(Header)