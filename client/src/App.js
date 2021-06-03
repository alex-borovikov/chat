import React from 'react';
import './App.css'
import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from "./Auth/Login/Login";

const App = () => {
    return (
        <Router>
            <Route path='/' exact component={Login} />
        </Router>
    );
};

export default App;