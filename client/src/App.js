import React from 'react';
import './App.css'
import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from "./Auth/Login/Login";
import Register from "./Auth/Register/Register";

const App = () => {
    return (
        <Router>
            <Route path='/' exact component={Login} />
            <Route path='/api/signup' exact component={Register} />
        </Router>
    );
};

export default App;