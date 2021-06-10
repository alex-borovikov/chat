import React from 'react';
import './App.css'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";
import UserApi from "./components/UserApi/UserApi";
import NotFound from "./components/NotFound/404";
import MiddlePage from "./components/MiddlePage/MiddlePage";
import {useSelector} from "react-redux";

const App = () => {
    const message = useSelector(state => state.user.message)
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/signup' exact component={Register} />
                <Route path='/signup/middlepage' exact render={() => <MiddlePage message={message} />}  />
                <Route path='/user' component={UserApi} />
                <Route path='*' component={NotFound} />
            </Switch>
        </Router>
    );
};

export default App;