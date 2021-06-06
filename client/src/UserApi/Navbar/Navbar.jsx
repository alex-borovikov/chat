import React from 'react';
import {makeStyles} from "@material-ui/core";
import ForumIcon from '@material-ui/icons/Forum';
import SettingsIcon from '@material-ui/icons/Settings';
import {NavLink} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        background: '#4B83F0',
    },
    header: {
        background: '#2762D4',
        '& a': {
            display: 'inline-block',
            width: '100%',
            fontWeight: 800,
            fontSize: '1.3em',
            textAlign: 'center',
            padding: '15px 0',
            color: '#fff',
        }
    },
    icon: {
        color: '#fff'
    },
    routerElement: {
        textAlign: 'center',
        padding: '15px 0',
        transition: 'background .3s ease',
        '&:hover': {
            background: '#62D862'
        }
    }
}))

const Navbar = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <NavLink to="/api/user/chat">Chat</NavLink>
            </div>
            <div className={classes.nav}>
                <nav>
                    <NavLink to='/api/user/chat'>
                        <div className={classes.routerElement}>
                            <ForumIcon className={classes.icon} />
                        </div>
                    </NavLink>
                    <NavLink to='/api/user/settings'>
                        <div className={classes.routerElement}>
                            <SettingsIcon className={classes.icon} />
                        </div>
                    </NavLink>
                </nav>
            </div>
            <div></div>
        </div>
    );
};

export default Navbar;