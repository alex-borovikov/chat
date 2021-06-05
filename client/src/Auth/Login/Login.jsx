import React from 'react';
import {Box, Button, Divider, makeStyles} from "@material-ui/core";

import Textfield from "../../TextField/Textfield";
import clsx from "clsx";
import useStyles from "./Login.style";

const Login = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Box display={'flex'} className={classes.paper}>
                <Box className={clsx(classes.element, classes.left__section)}>

                </Box>
                <Box className={clsx(classes.element, classes.right__section)}>
                    <div className={classes.form}>
                        <div className={classes.form__header}>
                            <h2>Sign in</h2>
                        </div>
                        <form className={classes.form_control}>
                            <div className={classes.form__section}>
                                <div className='form__section-item form__section-label'>
                                    <label htmlFor="emailAdress">Email adress</label>
                                </div>
                                <div className='form__section-item '>
                                    <Textfield placeholder='Enter your email' type='email' id='emailAdress' className={classes.textfield}/>
                                </div>
                            </div>
                            <div className={classes.form__section}>
                                <div className='form__section-item form__section-label'>
                                    <label htmlFor="password">Email adress</label>
                                </div>
                                <div className='form__section-item '>
                                    <Textfield placeholder='Enter password' type='password' id='password' className={classes.textfield}/>
                                </div>
                            </div>
                            <div className={classes.form__section}>
                                <Textfield type='checkbox' id='checkbox' />
                                <label htmlFor='checkbox' className='form__section-label__text'>Show password</label>
                            </div>
                            <div className={clsx(classes.form__section, classes.form__sectionMargin)}>
                                <Button variant="contained" className='form__section-signin'>
                                    Sign up
                                </Button>
                            </div>
                            <div className={clsx(classes.form__section, classes.form__section_parent)}>
                                <span className={classes.form__section_devider} />
                                <span>or</span>
                                <span className={classes.form__section_devider} />
                            </div>
                            <div className={classes.form__section}>
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