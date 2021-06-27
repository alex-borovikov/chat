import React, {useEffect, useState, Fragment, useRef} from 'react';
import useStyles from "./Messages.styles";
import {Button, Grid, IconButton, TextareaAutosize} from "@material-ui/core";
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import Message from "./Message-item";
import {useDispatch, useSelector} from "react-redux";

import { io } from "socket.io-client";
import {updateMessages} from "../../../../../store/chatReducer";

let socket;


const Messages = () => {
    const classes = useStyles()
    const [text, setText] = useState('');
    const [message, setMessages] = useState('');
    const isDialogueOpen = useSelector(state => state.chat.isDialogueOpen)
    const profile = useSelector(state => state.user.info)
    const messagesArray = useSelector(state => state.chat.messages)
    const userId = useSelector(state => state.user.info.id)
    const members = useSelector(state => state.chat.participants)
    const dialogueId = useSelector(state => state.chat.currentDialog)
    const friendId = members.find(elem => elem !== userId)
    const dispatch = useDispatch();


    //the socket variable will be lost after rerender the component, so we need to preserve socket into useRef hook
    let socket = useRef();

    //Set socket once. Instead the socket will be connected many times
    useEffect(() => {
        socket.current = io('ws://localhost:4000/')

        socket.current.emit('addUser', profile.id)

        socket.current.on('getUsers', users => console.log('members:::', users))

        socket.current.on('getMessage', data => {
            let message = {
                author: data.from,
                text: data.message
            }
            dispatch(updateMessages(message))

        })
    }, [])



    const handleSubmit = () => {
        socket.current.emit('sendMessage', {
            senderId: userId,
            receiver: friendId,
            text,
            dialogueId
        })
    }

    return (
        <div className={classes.root}>
            {!isDialogueOpen ? (
                <div className={classes.noDialogueText}>
                    <p>Choose the dialogue</p>
                </div>
            ) : (
                <Fragment>
                    <div className={classes.messages}>
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
                            <TextareaAutosize onChange={e => setText(e.target.value)} value={text} className={classes.textarea} aria-label="minimum height" rowsMin={5} placeholder="Write a text" />
                        </Grid>
                        <Grid container justify='space-between' className={classes.more}>
                            <Grid item className={classes.aditional__options}>
                                <div className={classes.emoji}>
                                    <IconButton>
                                        <InsertEmoticonIcon className={classes.attachfile} />
                                    </IconButton>
                                    <IconButton>
                                        <AttachFileIcon className={classes.attachfile} />
                                    </IconButton>
                                </div>
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