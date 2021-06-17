import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core";
import {PacmanLoader} from 'react-spinners'

const useStyles = makeStyles({
    root: {
        background: '#86F0D3',
        width: '100vw',
        height: '100vh',
        display: 'grid',
        placeItems: 'center'
    },
    spinner: {
        '& > span': {
            display: 'inline-block',
            transform: 'translate(-50%, -50%)'
        }
    },
    message: {
        color: '#fff',
        textAlign: 'center',
        '& > p > a': {
            display: 'inline-flex',
            textDecoration: 'underline',
            fontSize: '1.6em',
            marginTop: '20px'
        }
    }
})

const MiddlePage = (props) => {
    const classes = useStyles()
    const [display, setDisplay] = useState('none')
    const [spinner, setSpinner] = useState('block')

    useEffect(() => {
        const showSpinner = setTimeout(() => {
            setDisplay('block')
            setSpinner('none')
        }, 3000)

        return () => clearTimeout(showSpinner)
    }, [])
    return (
        <div className={classes.root}>
            <div style={{display: display}} className={classes.message}>
                <h1>{props.message}</h1>
                <p>
                    <a href="/">Back to main page</a>
                </p>
            </div>
            <div style={{display: spinner}} className={classes.spinner}>
                <PacmanLoader loading color={'#F7D755'} />
            </div>
        </div>
    );
};

export default MiddlePage;