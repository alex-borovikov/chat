import React, {useEffect, useState, Fragment, useRef} from 'react';
import useStyles from "./Messages.styles";
import {Button, Grid, IconButton, TextareaAutosize} from "@material-ui/core";
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Message from "./Message-item";
import {useDispatch, useSelector} from "react-redux";

import { io } from "socket.io-client";
import {updateMessages} from "../../../../../store/chatReducer";


function LinearProgressWithLabel(props) {
    return (
        <Box display="flex" alignItems="center">
            <Box width="100px" mr={1}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box minWidth={35}>
                <Typography variant="body2" color="textSecondary">{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}


const Messages = () => {
    const classes = useStyles()
    const [text, setText] = useState('');
    const isDialogueOpen = useSelector(state => state.chat.isDialogueOpen)
    const profile = useSelector(state => state.user.info)
    const messagesArray = useSelector(state => state.chat.messages)
    const userId = useSelector(state => state.user.info.id)
    const members = useSelector(state => state.chat.participants)
    const dialogueId = useSelector(state => state.chat.currentDialog)
    const friendId = members.find(elem => elem !== userId)
    const dispatch = useDispatch();

    const [progress, setProgress] = useState(0);
    const isLoad = useSelector(state => state.chat.upload.loading)




    //the socket variable will be lost after rerender the component, so we need to preserve socket into useRef hook
    let socket = useRef();

    //Set socket once. Instead the socket will be connected many times
    useEffect(() => {
        socket.current = io('ws://localhost:4000/')

        socket.current.emit('addUser', profile.id)

        socket.current.on('getMessage', data => {
            dispatch(updateMessages(data))
        })

    }, [profile, messagesArray]) // Set binding to dependencies(profile&messageArray), if 'deps' is not exist we dont use the sockets


    const handleSubmit = () => {
        // This event is emit after the message is submiting by form
        socket.current.emit('sendMessage', {
            senderId: userId,
            receiver: friendId,
            text,
            dialogueId
        })
        setText('')
    }
    const handleTextArea = e => {
        if(e.key === 'Enter'){
            handleSubmit()
        }
    }

    return (
        <div className={classes.root}>
            {!isDialogueOpen ? (
                <div className={classes.noDialogueText}>
                    <p>Choose the dialogue</p>
                </div>
            ) : (
                <Fragment>
                    <div className={classes.messages} >
                        { messagesArray.length > 0 ? (
                            messagesArray.map((m, index) => {
                                return userId !== m.author ? (
                                    <Message
                                        userId={m.author}
                                        time={m.createdAt}
                                        text={m.text}
                                        recieved={true}
                                        key={index}
                                    />
                                ) : (
                                    <Message
                                        userId={m.author}
                                        name={profile.displayName}
                                        source={profile?.photoURL}
                                        time={m.createdAt}
                                        text={m.text}
                                        recieved={false}
                                        key={index}
                                    />
                                )
                            })
                        ) : (
                            <div>Write a message!</div>
                        )
                        }
                    </div>
                    <div className={classes.addMessageArea}>
                        <Grid>
                            <TextareaAutosize onChange={e => setText(e.target.value)} onKeyPress={handleTextArea} value={text} className={classes.textarea} aria-label="minimum height" rowsMin={5} placeholder="Write a text" />
                        </Grid>
                        <Grid container justify='space-between' className={classes.more}>
                            <Grid item className={classes.aditional__options}>
                                <Grid container className={classes.toolbar} alignContent='center'>
                                    <Grid item>
                                        <IconButton className={classes.emoji}>
                                            <InsertEmoticonIcon className={classes.attachfile} />
                                        </IconButton>
                                    </Grid>
                                    <Grid item >
                                        <IconButton>
                                            <label htmlFor="inp" className={classes.label}>
                                                <AttachFileIcon className={classes.attachfile}  />
                                            </label>
                                        </IconButton>
                                        <input type="file" id='inp' className={classes.hiddenInput}/>
                                    </Grid>
                                    <Grid item style={{display: isLoad ? 'block' : 'none'}}>
                                        <Grid container alignContent='center' justify='center' className={classes.progressHeight}>
                                            <Grid item>
                                                <LinearProgressWithLabel value={progress} />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" color="primary" className={classes.button} onClick={handleSubmit}>
                                    Send
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Fragment>
                )
            }

        </div>
    );
};

export default Messages;