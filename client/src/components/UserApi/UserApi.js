import React from 'react';
import {makeStyles} from "@material-ui/core";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Settings from "./Settings/Settings";
import Chat from "./Chat/Chat";
import Navbar from "./Navbar/Navbar";

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: '70px 1fr'
    }
}))

const UserApi = () => {
    const classes = useStyles()
    return (
        <Router>
            <div className={classes.root}>
                <Navbar />
                <Switch>
                    <Route path='/user' exact component={Chat} />
                    <Route path='/user/settings' component={Settings} />
                </Switch>
            </div>
        </Router>
    );
};

export default UserApi;