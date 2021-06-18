import React from 'react';
import {makeStyles} from "@material-ui/core";
import {Route, BrowserRouter as Router, Switch, Redirect} from "react-router-dom";
import Settings from "./Settings/Settings";
import Chat from "./Chat/Chat";
import Navbar from "./Navbar/Navbar";
import {useSelector} from "react-redux";
import Loader from "../Loader/Loader";

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: '70px 1fr',
    }
}))

const UserApi = () => {
    const classes = useStyles()
    const isAuth = useSelector(state => state.user.auth)
    return isAuth ? (
        <Router>
            <div className={classes.root}>
                <Navbar />
                <Switch>
                    <Route path='/user' exact component={Chat} />
                    <Route path='/user/settings' exact component={Settings} />
                </Switch>
            </div>
        </Router>
    ) : (
        // <Loader path='/user' text='Loading..' />
        <Redirect to='/' />
    )
};

export default UserApi;