import React from 'react';
import Header from "./Header/Header";
import Content from "./Content/Content";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        overflowY: 'hidden'
    }
})


const Chat = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header />
            <Content />
        </div>
    )
};

export default Chat;