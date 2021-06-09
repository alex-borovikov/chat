import React from 'react';
import {Button, Paper, TextField} from "@material-ui/core";
import useStyles from "./Register.styles";
import useLoginStyles from '../Login/Login.styles'
import clsx from "clsx";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ERRORS from '../../../configs/Forms.config'

import { Formik } from "formik";
import * as yup from "yup";
import GoogleButton from "../../GoogleButton/GoogleButton";
import {useDispatch} from "react-redux";
import {register} from '../../../actions/auth.actions'

const Register = () => {
    const classes = useStyles()
    const classes_login = useLoginStyles()

    const dispatch = useDispatch();

    const registerSchema = yup.object().shape({
        name: yup.string().required(),
        surname: yup.string(),
        email: yup.string().email().typeError(ERRORS.EMAIL_INVALID).required(),
        password: yup.string().min(6, ERRORS.PASSWORD_TO_SHORT).required(ERRORS.PASSWORD_REQUIRED),
        confirm: yup.string().oneOf([yup.ref('password'), null], ERRORS.PASSWORD_MUST_MATCH).min(6, ERRORS.PASSWORD_TO_SHORT).required()
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
                    onSubmit={values => {
                        dispatch(register(values.name, values.surname, values.email, values.password))
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
                                    id="outlined-basic_surname"
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
                                    id="outlined-basic_email"
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
                                    id="outlined-basic_pass"
                                    required
                                    label="Password"
                                    type='password'
                                    value={values.password}
                                    name='password'
                                    onChange={handleChange}
                                    variant="outlined"
                                />
                                {touched.password && errors.password &&
                                <p className={classes.error}>{errors.password}</p>}
                            </div>
                            <div className={classes.fieldWrapper}>
                                <TextField
                                    id="outlined-basic_confirm"
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
                                <Button disabled={!isValid && !dirty} type='submit' onClick={handleSubmit}
                                        variant="contained" color="primary">
                                    <span>Sign up</span>
                                    <ArrowForwardIcon className={classes_login.arrow}/>
                                </Button>
                            </div>
                        </div>
                    )}

                </Formik>
                <div className={classes.fields}>
                    <div
                        className={clsx(classes_login.form__section, classes_login.form__section_parent, classes_login.nodisplay)}>
                        <span className={clsx(classes_login.form__section_divider, classes.dividerMargin)}/>
                        <span>or</span>
                        <span className={classes_login.form__section_divider}/>
                    </div>
                    <div className={clsx(classes_login.form__section, classes_login.form__signup, classes.btn)}>
                        <a href="/">
                            <Button variant="contained">
                                <span>Sign in</span>
                            </Button>
                        </a>
                        <GoogleButton variant="contained" className={classes.google}/>
                    </div>
                </div>
            </Paper>

        </div>
    );
};

export default Register;