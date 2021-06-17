import React, {useEffect} from 'react';
import classes from  './Loader.module.scss'
import {PacmanLoader} from "react-spinners";
import {auth} from "../../firebase";
import {authWithGoogle} from "../../actions/auth.actions";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";

const Loader = ({text, path}) => {
    const isAuth = useSelector(state => state.user.auth)
    const dispatch = useDispatch();
    useEffect(() => {
        // On state changed is observe when token is ready
        auth.onAuthStateChanged(userCred => {
            //Always use promise to make sure you accept the token
            //Without "then" you recieve a 'null' and auth is fail
            // You must use 'if', if you dont want to take an error
            if(userCred){
                userCred.getIdToken().then(token => {
                    dispatch(authWithGoogle(token, userCred))
                })
            }
        })
    })
    return isAuth ? (
        <Redirect to={path} />
    ) : (
        <div className={classes.wrapper}>
            <PacmanLoader loading color={'#F7D755'} />
            <div className={classes.text}>{text}</div>
        </div>
    )
};

export default Loader;