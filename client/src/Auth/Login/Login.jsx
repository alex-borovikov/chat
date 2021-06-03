import React from 'react';
import {Box, Button, Divider, makeStyles} from "@material-ui/core";
import back from '../../assets/images/back.jpg'
import Textfield from "../../TextField/Textfield";
import './Login.scss'
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
    root: {
        background: '#86F0D3',
        padding: '100px 0',
        height: '100vh'
    },
    paper: {
        width: '90vw',
        borderRadius: '23px',
        margin: '0 auto',
        boxShadow: '1px 2px 27px -9px rgba(0,0,0,0.75)',
        background: '#fff'
    },
    element: {
        flex: '50%'
    },
    left__section:{
        backgroundImage: `url(${back})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '23px'
    },
    right__section: {
        display: 'flex',
        justifyContent: 'center',
        // padding: '10vw 0'
    } ,
    textfield:{
        outline: 'none',
        borderRadius: '5px',
        border: '1px solid #e3e3e3',
        height: '40px',
        padding: '5px 10px',
        letterSpacing: '.5px',
        width: '300px'
    },
    form: {
        width: 'fit-content',
    },
}))

const Login = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Box display={'flex'} className={classes.paper}>
                <Box className={clsx(classes.element, classes.left__section)}>

                </Box>
                <Box className={clsx(classes.element, classes.right__section)}>
                    <div className={classes.form}>
                        <div className="form__header">
                            <h2>Sign up</h2>
                        </div>
                        <form>
                            <div className="form__section">
                                <div className='form__section-item form__section-label'>
                                    <label htmlFor="emailAdress">Email adress</label>
                                </div>
                                <div className='form__section-item '>
                                    <Textfield placeholder='Enter your email' type='email' id='emailAdress' className={classes.textfield}/>
                                </div>
                            </div>
                            <div className="form__section">
                                <div className='form__section-item form__section-label'>
                                    <label htmlFor="password">Email adress</label>
                                </div>
                                <div className='form__section-item '>
                                    <Textfield placeholder='Enter password' type='password' id='password' className={classes.textfield}/>
                                </div>
                            </div>
                            <div className="form__section">
                                <Textfield type='checkbox' id='checkbox' />
                                <label htmlFor='checkbox' className='form__section-label__text'>Show password</label>
                            </div>
                            <div className="form__section">
                                <Button variant="contained" className='form__section-signup'>
                                    Sign up
                                </Button>
                            </div>
                            <div className="form__section">
                                <Divider />
                                <span>or</span>
                                <Divider />
                            </div>
                            <div className="form__section">
                                <button>Continue with google</button>
                            </div>
                        </form>
                    </div>
                </Box>
            </Box>

        </div>
    )
}

export default Login;