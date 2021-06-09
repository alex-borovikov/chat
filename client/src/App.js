import React from 'react';
import './App.css'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";
import UserApi from "./components/UserApi/UserApi";
import NotFound from "./components/NotFound/404";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/signup' component={Register} />
                <Route path='/user' component={UserApi} />
                <Route path='*' component={NotFound} />
            </Switch>
        </Router>
    );
};

export default App;