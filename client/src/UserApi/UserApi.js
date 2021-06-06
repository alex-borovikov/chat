import React from 'react';
import {makeStyles} from "@material-ui/core";
import Navbar from "./Navbar/Navbar";
import {Route, BrowserRouter as Router} from "react-router-dom";
import Chat from "./Chat/Chat";
import Settings from "./Settings/Settings";

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: '70px 1.5fr 3fr 1.5fr'
    }
}))

const UserApi = () => {
    const classes = useStyles()
    return (
        <Router>
            <div className={classes.root}>
                <Navbar />
                <Route path='/api/user/chat' component={Chat} />
                <Route path='/api/user/settings' component={Settings} />
            </div>
        </Router>
    );
};

export default UserApi;