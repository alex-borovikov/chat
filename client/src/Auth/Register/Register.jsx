import React from 'react';
import {Button, Paper, TextField} from "@material-ui/core";
import useStyles from "./Register.styles";
import useLoginStyles from '../Login/Login.styles'
import clsx from "clsx";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import { Formik } from "formik";
import * as yup from "yup";

const Register = () => {
    const classes = useStyles()
    const classes_login = useLoginStyles()

    const registerSchema = yup.object().shape({
        name: yup.string().required(),
        surname: yup.string(),
        email: yup.string().email().typeError('Email is required field').required(),
        password: yup.string().min(6, 'Password is too short, min 6 symbols').required('No password provided'),
        confirm: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').min(6, 'Password is too short, min 6 symbols').required()
    })

    return (
        <div className={clsx(classes_login.root, classes.root)}>
            <Paper className={clsx(classes_login.paper, classes.paper)}>
                <div className={classes.header}>
                    <h1>Create new account</h1>
                </div>
                <Formik
                    initialValues={{
                        name: '',
                        surname: '',
                        email: '',
                        password: '',
                        confirm: ''
                    }}
                    onSubmit={async values => {
                        await new Promise(resolve => setTimeout(resolve, 500));
                        alert(JSON.stringify(values, null, 2));
                    }}
                    validationSchema={registerSchema}
                >
                    {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                        <div className={classes.fields}>
                            <div className={classes.fieldWrapper}>
                                <TextField
                                    id="outlined-basic"
                                    required
                                    label="Name"
                                    value={values.name}
                                    name='name'
                                    onChange={handleChange}
                                    variant="outlined"
                                />
                                {touched.name && errors.name && <p className={classes.error}>{errors.name}</p>}
                            </div>
                            <div className={classes.fieldWrapper}>
                                <TextField
                                    id="outlined-basic"
                                    label="Surname"
                                    value={values.surname}
                                    name='surname'
                                    onChange={handleChange}
                                    variant="outlined"

                                />
                                {touched.surname && errors.surname && <p className={classes.error}>{errors.surname}</p>}
                            </div>
                            <div className={classes.fieldWrapper}>
                                <TextField
                                    id="outlined-basic"
                                    required
                                    label="Email"
                                    value={values.email}
                                    name='email'
                                    onChange={handleChange}
                                    variant="outlined"
                                />
                                {touched.email && errors.email && <p className={classes.error}>{errors.email}</p>}
                            </div>
                            <div className={classes.fieldWrapper}>
                                <TextField
                                    id="outlined-basic"
                                    required
                                    label="Password"
                                    type='password'
                                    value={values.password}
                                    name='password'
                                    onChange={handleChange}
                                    variant="outlined"
                                />
                                {touched.password && errors.password && <p className={classes.error}>{errors.password}</p>}
                            </div>
                            <div className={classes.fieldWrapper}>
                                <TextField
                                    id="outlined-basic"
                                    required
                                    label="Confirm"
                                    type='password'
                                    value={values.confirm}
                                    name='confirm'
                                    onChange={handleChange}
                                    variant="outlined"
                                />
                                {touched.confirm && errors.confirm && <p className={classes.error}>{errors.confirm}</p>}
                            </div>
                            <div className={classes.button}>
                                <Button disabled={!isValid && !dirty} type='submit' onClick={handleSubmit} variant="contained" color="primary">
                                    <span>Sign up</span>
                                    <ArrowForwardIcon className={classes_login.arrow} />
                                </Button>
                            </div>
                        </div>
                    )}

                </Formik>
                <div className={classes.fields}>
                    <div className={clsx(classes_login.form__section, classes_login.form__section_parent, classes_login.nodisplay)}>
                        <span className={clsx(classes_login.form__section_divider, classes.dividerMargin)} />
                        <span>or</span>
                        <span className={classes_login.form__section_divider} />
                    </div>
                    <div className={clsx(classes_login.form__section, classes_login.form__signup, classes.btn)}>
                        <a href="/">
                            <Button variant="contained" >
                                <span>Sign in</span>
                            </Button>
                        </a>
                        <Button variant="contained" className={classes.google}>
                            <img alt='google_logo.png' src="https://img.icons8.com/office/16/000000/google-logo.png"/>
                            <span>Continue with Google</span>
                        </Button>
                    </div>
                </div>
            </Paper>

        </div>
    );
};

export default Register;