import React from 'react';
import {Divider, makeStyles} from "@material-ui/core";
import style from '../Chat.styles'
import clsx from "clsx";
import Avatar from "../../../Avatar/Avatar";
import useStyles from "./Dialogs.styles";




const Dialogs = ({status, src, name, time, shortMessage}) => {
    const classes = useStyles();
    const classesStyles = style();
    return (
        <React.Fragment>
            <div className={clsx(classes.root, classesStyles.padding)}>
                <Avatar online={false} src={src} name={name} />
                <div className={classes.dialog}>
                    <div className={classes.header}>
                        <p className={classes.name}>{name}</p>
                        <p className={classes.time}>{time}</p>
                    </div>
                    <p className={classes.shortMessage}>{shortMessage.slice(0,50).concat('...')}</p>
                </div>
            </div>
            <Divider />
        </React.Fragment>
    );
};

Dialogs.defaultProps = {
    status: false,
    src: '/static/images/avatar/1.jpg',
    name: 'Walter Whitman',
    time: '19:52',
    shortMessage: 'Text lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet'
}

export default Dialogs;