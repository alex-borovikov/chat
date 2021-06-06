import React from 'react';
import {Avatar, makeStyles} from "@material-ui/core";
import style from '../Chat.styles'
import clsx from "clsx";


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        transition: 'background .3s ease',
        '&:hover': {
            background: '#ECF8FF',
            cursor: 'pointer'
        }
    },
    dialog: {
        marginLeft: '8px',
        width: '100%'
    },
    header: {
        display: 'flex',
        justifyContent: "space-between"
    },
    shortMessage: {
        fontSize: '.8em',
        marginTop: '5px',
        letterSpacing: '.1px'
    },
    name: {
        fontSize: '.96em',
        fontWeight: 700,
        letterSpacing: '.5px',
        fontFamily: 'Roboto'
    },
    time: {
        fontSize: '.8em',
        opacity: '.4'
    }
}))

const Dialogs = () => {
    const classes = useStyles();
    const classesStyles = style();
    return (
        <div className={clsx(classes.root, classesStyles.padding)}>
            <Avatar />
            <div className={classes.dialog}>
                <div className={classes.header}>
                    <p className={classes.name}>Walter Whitman</p>
                    <p className={classes.time}>19:52</p>
                </div>
                <p className={classes.shortMessage}>Text lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet</p>
            </div>
        </div>
    );
};

export default Dialogs;