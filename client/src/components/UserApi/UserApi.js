import React from 'react';
import {makeStyles} from "@material-ui/core";
import Navbar from "./Chat/Navbar/Navbar";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Settings from "./Settings/Settings";
import Chat from "./Chat/Chat";

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
                <Switch>
                    <Route path='/user' component={Chat} />
                    <Route path='/settings' component={Settings} />
                </Switch>
            </div>
        </Router>
    );
};

export default UserApi;