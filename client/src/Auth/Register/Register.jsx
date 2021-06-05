import React, {useState} from 'react';
import {Button, Paper, TextField} from "@material-ui/core";
import useStyles from "./Register.styles";
import useLoginStyles from '../Login/Login.styles'
import clsx from "clsx";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const Register = () => {
    const classes = useStyles()
    const classes_login = useLoginStyles()

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    return (
        <div className={classes_login.root}>
            <Paper className={clsx(classes_login.paper, classes.paper)}>
                <div className={classes.header}>
                    <h1>Create new account</h1>
                </div>
                <div className={classes.fields}>
                    <div className={classes.fieldWrapper}>
                        <TextField id="outlined-basic" required label="Name" value={name} onChange={e => setName(e.target.value)} variant="outlined" />
                    </div>
                    <div className={classes.fieldWrapper}>
                        <TextField id="outlined-basic" label="Surname" value={surname} onChange={e => setSurname(e.target.value)} variant="outlined" />
                    </div>
                    <div className={classes.fieldWrapper}>
                        <TextField id="outlined-basic" required label="Email" value={email} onChange={e => setEmail(e.target.value)} variant="outlined" />
                    </div>
                    <div className={classes.fieldWrapper}>
                        <TextField id="outlined-basic" required label="Password" type='password' value={password} onChange={e => setPassword(e.target.value)} variant="outlined" />
                    </div>
                    <div className={classes.fieldWrapper}>
                        <TextField id="outlined-basic" required label="Confirm" type='password' value={confirm} onChange={e => setConfirm(e.target.value)} variant="outlined" />
                    </div>
                    <div className={classes.button}>
                        <Button variant="contained" color="primary">
                            <span>Sign up</span>
                            <ArrowForwardIcon className={classes_login.arrow} />
                        </Button>
                    </div>
                    <div className={clsx(classes_login.form__section, classes_login.form__section_parent, classes_login.nodisplay)}>
                        <span className={classes_login.form__section_divider} />
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