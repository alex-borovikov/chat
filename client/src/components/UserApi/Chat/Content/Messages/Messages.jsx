import React from 'react';
import {makeStyles} from "@material-ui/core";
const useStyles = makeStyles({
    root: {
        borderRight: '1px solid #e3e3e3',
    }
})


const Messages = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            messagess
        </div>
    );
};

export default Messages;