import React from 'react';
import {Button, makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        background: '#9CE275',
        color: '#fff',
        '&:hover': {
            background: '#86cd5f'
        },
        whiteSpace: 'nowrap'
    }
})

const DefaultButton = ({text, onClick}) => {
    const classes = useStyles();
    return (
        <Button onClick={onClick} variant="contained" className={classes.root}>{text}</Button>
    );
};

export default DefaultButton;