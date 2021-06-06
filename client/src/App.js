import React from 'react';
import './App.css'
import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from "./Auth/Login/Login";
import Register from "./Auth/Register/Register";
import UserApi from "./UserApi/UserApi";

const App = () => {
    return (
        <Router>
            <Route path='/' exact component={Login} />
            <Route path='/api/signup' component={Register} />
            <Route path='/api/user' component={UserApi} />
        </Router>
    );
};

export default App;