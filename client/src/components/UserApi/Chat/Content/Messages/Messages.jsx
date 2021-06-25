import React, {useEffect, useState, Fragment} from 'react';
import useStyles from "./Messages.styles";
import {Button, Grid, IconButton, TextareaAutosize} from "@material-ui/core";
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import Message from "./Message-item";
import {useSelector} from "react-redux";

import { io } from "socket.io-client";

let socket;


const Messages = () => {
    const classes = useStyles()
    const [text, setText] = useState('');
    const [message, setMessages] = useState('');
    const isDialogueOpen = useSelector(state => state.chat.isDialogueOpen)
    const profile = useSelector(state => state.user.info)
    const messagesArray = useSelector(state => state.chat.messages)
    const userId = useSelector(state => state.user.info.id)

    //Sockets
    const url = 'http://localhost:4000/'

    useEffect(() => {
        socket = io(url)

        socket.on('CONNECT:GREETING', message => {
            setMessages(message)
        })
        socket.emit('CLIENT:SEND_MESSAGE', {
            user: profile,
            text: 'Hello world!'
        })

        return () => {
            socket.emit('disconnected')
            socket.off()
        }
    }, [url])

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
                                <Button variant="contained" color="primary" className={classes.button}>
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