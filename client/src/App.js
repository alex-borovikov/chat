import React from 'react';
import './App.css'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";
import UserApi from "./components/UserApi/UserApi";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/signup' component={Register} />
                <Route path='/user' component={UserApi} />
            </Switch>
        </Router>
    );
};

export default App;