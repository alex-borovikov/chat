import React, {useEffect} from 'react';
import './App.css'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";
import UserApi from "./components/UserApi/UserApi";
import NotFound from "./components/NotFound/404";
import MiddlePage from "./components/MiddlePage/MiddlePage";
import {useDispatch, useSelector} from "react-redux";
import {auth} from './actions/auth.actions'
import Loader from "react-spinners/BarLoader";

const App = () => {
    const message = useSelector(state => state.user.message)
    const isLoader = useSelector( state => state.user.loader)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(auth())
    })
    // return isLoader ? (
    //     <Router>
    //         <Switch>
    //             <Route path='/' exact component={Login} />
    //             <Route path='/signup' exact component={Register} />
    //             <Route path='/signup/middlepage' exact render={() => <MiddlePage message={message} />}  />
    //             <Route path='/user' component={UserApi} />
    //             <Route path='*' component={NotFound} />
    //         </Switch>
    //     </Router>
    // ) : (
    //     <Loader text='Loading...' />
    // )
    return  (
        <Router>
            <Switch>
                <Route path='/' exact component={Login} />
                {/*{isLoader ? <Route path='/' exact component={Login} /> : <Loader />}*/}
                <Route path='/signup' exact component={Register} />
                <Route path='/signup/middlepage' exact render={() => <MiddlePage message={message} />}  />
                <Route path='/user' component={UserApi} />
                <Route path='*' component={NotFound} />
            </Switch>
        </Router>
    )
};

export default App;

