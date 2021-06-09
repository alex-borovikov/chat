import React from 'react';
import ForumIcon from '@material-ui/icons/Forum';
import SettingsIcon from '@material-ui/icons/Settings';
import {NavLink} from "react-router-dom";
import useStyles from "./Navbar.style";




const Navbar = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <NavLink to="/user">Chat</NavLink>
            </div>
            <div className={classes.nav}>
                <nav>
                    <NavLink to='/user'>
                        <div className={classes.routerElement}>
                            <ForumIcon className={classes.icon} />
                        </div>
                    </NavLink>
                    <NavLink to='/user/settings'>
                        <div className={classes.routerElement}>
                            <SettingsIcon className={classes.icon} />
                        </div>
                    </NavLink>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;