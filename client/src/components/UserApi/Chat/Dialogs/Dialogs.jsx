import React from 'react';
import {Divider, makeStyles} from "@material-ui/core";
import style from '../Chat.styles'
import clsx from "clsx";
import Avatar from "../../../Avatar/Avatar";
import useStyles from "./Dialogs.styles";




const Dialogs = () => {
    const classes = useStyles();
    const classesStyles = style();
    return (
        <React.Fragment>
            <div className={clsx(classes.root, classesStyles.padding)}>
                <Avatar online={false} src='/static/images/avatar/1.jpg' name='Rocky Balboa'  />
                <div className={classes.dialog}>
                    <div className={classes.header}>
                        <p className={classes.name}>Walter Whitman</p>
                        <p className={classes.time}>19:52</p>
                    </div>
                    <p className={classes.shortMessage}>{'Text lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet'.slice(0,50).concat('...')}</p>
                </div>
            </div>
            <Divider />
        </React.Fragment>
    );
};

export default Dialogs;