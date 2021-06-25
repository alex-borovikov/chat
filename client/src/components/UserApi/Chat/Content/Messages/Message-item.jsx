import React, {useEffect, useState} from 'react';
import {Avatar, Grid} from "@material-ui/core";
import useStyles from "./Messages.styles";
import clsx from "clsx";
import {format} from 'timeago.js'
import axios from "axios";

const Message = ({name, source, userId, time, text, recieved}) => {
    const classes = useStyles();
    const [friendInfo, setfriendInfo] = useState({});

    useEffect(() => {
        const getUser = async () => {
            if(userId){
                try{
                    const response = await axios.get('http://localhost:4000/api/user/get/' + userId);
                    setfriendInfo(response.data.user)
                }
                catch(err){
                    console.log(err)
                }
            }
        }
        getUser()
    }, [userId])

    return recieved ? (
        <Grid container className={classes.gridParent} >
            <Grid item className={classes.avatarWrapper}>
                <Avatar src={friendInfo.avatar}/>
            </Grid>
            <Grid className={classes.leftCloud}>
                <Grid item className={clsx(classes.textBox, classes.textBoxLeft)}>
                    {text}
                </Grid>
                <Grid container className={classes.messageDetails} alignItems='center' justify='flex-start'>
                    <Grid item>
                        {friendInfo.name}
                    </Grid>
                    <Grid item className={classes.dotSeparator} />
                    <Grid item>
                        {format(time)}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    ) : (
         <Grid container className={clsx(classes.gridParent,classes.reverse)} >
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
                        {format(time)}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )

};

export default Message;