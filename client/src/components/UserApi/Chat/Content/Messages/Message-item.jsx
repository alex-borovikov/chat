import React from 'react';
import {Avatar, Grid} from "@material-ui/core";
import useStyles from "./Messages.styles";
import clsx from "clsx";

const Message = ({name, source, time, text, recieved}) => {
    const classes = useStyles();
    if(recieved) {
        return (
            <Grid container className={classes.gridParent}>
                <Grid item className={classes.avatarWrapper}>
                    <Avatar src={source}/>
                </Grid>
                <Grid className={classes.leftCloud}>
                    <Grid item className={clsx(classes.textBox, classes.textBoxLeft)}>
                        {text}
                    </Grid>
                    <Grid container className={classes.messageDetails} alignItems='center' justify='flex-start'>
                        <Grid item>
                            {name}
                        </Grid>
                        <Grid item className={classes.dotSeparator} />
                        <Grid item>
                            {time}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    } else {
        return <Grid container className={clsx(classes.gridParent,classes.reverse)}>
            <Grid item className={classes.avatarWrapper}>
                <Avatar src={source} />
            </Grid>
            <Grid className={classes.rightCloud}>
                <Grid item className={clsx(classes.textBox, classes.textBoxRight)}>
                    {text}
                </Grid>
                <Grid container className={classes.messageDetails} alignItems='center' justify='flex-end'>
                    <Grid item>
                        {name}
                    </Grid>
                    <Grid item className={classes.dotSeparator} />
                    <Grid item>
                        {time}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    }
};

export default Message;