import React from 'react';
import Dialogs from "./Dialogs/Dialogs";
import Messages from "./Messages/Messages";
import ChatInfo from "./ChatInformation/ChatInfo";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        display: 'grid',
        gridTemplateColumns: '1.5fr 3fr 1.5fr',
        height: '100%'
    }
})

const Content = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Dialogs />
            <Messages />
            <ChatInfo />
        </div>
    );
};

export default Content;