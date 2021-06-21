import React from 'react';
import Dialogues from "./Dialogues/Dialogues";
import Messages from "./Messages/Messages";
import ChatInfo from "./ChatInformation/ChatInfo";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'grid',
        gridTemplateColumns: '1.5fr 3fr 1.5fr',
        height: '100%',
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: '1.5fr 3fr',
        }
    },
}))

const Content = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Dialogues />
            <Messages />
            <ChatInfo />
        </div>
    );
};

export default Content;