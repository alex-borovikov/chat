import React, {useState} from 'react';
import {Box, Button, Checkbox} from "@material-ui/core";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import Textfield from "../../TextField/Textfield";
import clsx from "clsx";
import useStyles from "./Login.styles";
import useStylesReg from "../Register/Register.styles";

import { Formik } from "formik";
import * as yup from "yup";

const Login = () => {
    const classes = useStyles();
    const classesReg = useStylesReg();
    const [checked, setChecked] = useState(false);
    const [type, setType] = useState('password');

    const validationSchema = yup.object().shape({
        email: yup.string().email().typeError('Email is required field').required(),
        password: yup.string().required('No password provided'),
    })

    const handleChangeFlag = (event) => {
        setChecked(event.target.checked);
        type === 'password' ? setType('text') : setType('password')
    };
    return (
        <div className={classes.root}>
            <Box display={'flex'} className={classes.paper}>
                <Box className={clsx(classes.element, classes.left__section)}>
                    <div className={classes.greeting}>
                        <div className={classes.blur__effect}>
                            <div className={classes.greeting__logo}>
                                <div>Chat with</div>
                                <div>Me</div>
                            </div>
                            <div className={classes.greeting__separator} />
                            <div className={classes.greeting__main}>
                                <p>We are</p>
                                <p>Invite only right now</p>
                                <p>100+ milione people have joined our network</p>
                            </div>
                            <div className={classes.already_account}>
                                <p>Dont have an account?</p>
                                <p>
                                    <a href="/api/signup">Sign up</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </Box>
                <Box className={clsx(classes.element, classes.right__section)}>
                    <div className={classes.form}>
                        <div className={classes.form__header}>
                            <h2>Sign in</h2>
                        </div>
                        <Formik
                            onSubmit={async values => {
                                await new Promise(resolve => setTimeout(resolve, 500));
                                alert(JSON.stringify(values, null, 2));
                            }}
                            initialValues={{
                                email: '',
                                password: ''
                            }}
                            validationSchema={validationSchema}
                        >{({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) =>(
                            <form className={classes.form_control}>
                                <div className={classes.form__section}>
                                    <div className='form__section-item form__section-label'>
                                        <label htmlFor="emailAdress">Email adress</label>
                                    </div>
                                    <div className='form__section-item '>
                                        <Textfield
                                            placeholder='Enter your email'
                                            value={values.email}
                                            onChange={handleChange}
                                            type='email'
                                            id='emailAdress'
                                            className={classes.textfield}
                                            autoComplete={'on'}
                                            tabIndex='1'
                                            name='email'
                                        />
                                        {touched.email && errors.email && <p className={classesReg.error}>{errors.email}</p>}
                                    </div>
                                </div>
                                <div className={classes.form__section}>
                                    <div className='form__section-item form__section-label'>
                                        <label htmlFor="password">Password</label>
                                    </div>
                                    <div className='form__section-item '>
                                        <Textfield
                                            placeholder='Enter password'
                                            value={values.password}
                                            onChange={handleChange}
                                            type={type}
                                            id='password'
                                            className={classes.textfield}
                                            tabIndex='2'
                                            name='password'
                                        />
                                        {touched.password && errors.password && <p className={classesReg.error}>{errors.password}</p>}
                                    </div>
                                </div>
                                <div className={clsx(classes.form__section, classes.form__section_showPassword)}>
                                    <Checkbox
                                        checked={checked}
                                        onChange={handleChangeFlag}
                                        id='checkbox'
                                    />
                                    <label htmlFor='checkbox' className='form__section-label__text'>Show password</label>
                                </div>
                                <div className={clsx(classes.form__section, classes.form__sectionMargin)}>
                                    <Button disabled={!isValid && !dirty} type='submit' onClick={handleSubmit} variant="contained" className='form__section-signin'>
                                        <span>Sign in</span>
                                        <ArrowForwardIcon className={classes.arrow} />
                                    </Button>
                                </div>
                                <div className={clsx(classes.form__section, classes.form__section_parent)}>
                                    <span className={classes.form__section_divider} />
                                    <span>or</span>
                                    <span className={classes.form__section_divider} />
                                </div>
                                <div className={clsx(classes.form__section, classes.form__btn)}>
                                    <Button variant="outlined">
                                        <img alt='google_logo.png' src="https://img.icons8.com/office/16/000000/google-logo.png"/>
                                        <span>Continue with google</span>
                                    </Button>
                                </div>
                                <div className={clsx(classes.form__section, classes.form__section_parent, classes.nodisplay)}>
                                    <span className={clsx(classes.form__section_divider, classes.dividerMargin)} />
                                    <span>or</span>
                                    <span className={classes.form__section_divider} />
                                </div>
                                <div className={clsx(classes.form__section, classes.form__signup)}>
                                    <a href="/api/signup">
                                        <Button variant="contained" >
                                            <span>Sign up</span>
                                        </Button>
                                    </a>
                                </div>
                            </form>
                        ) }
                        </Formik>
                    </div>
                </Box>
            </Box>

        </div>
    )
}

export default Login;