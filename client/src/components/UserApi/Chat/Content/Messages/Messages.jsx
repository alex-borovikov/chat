import React, {useEffect, useState, Fragment, useRef} from 'react';
import useStyles from "./Messages.styles";
import {Button, Grid, IconButton, TextareaAutosize} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete'
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Message from "./Message-item";
import {useDispatch, useSelector} from "react-redux";

import { io } from "socket.io-client";
import {
    setCleanUploadData,
    setCleanUploadFileInfo, setDisplayFileInfo,
    setUploadData,
    updateMessages
} from "../../../../../store/chatReducer";
import {uploadFile} from "../../../../../actions/uploads.actions";


function LinearProgressWithLabel(props) {
    const classes = useStyles()
    return (
        <Box display="flex" alignItems="center">
            <Box width="100px" mr={1}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box minWidth={35}>
                <Typography variant="body2" color="textSecondary" className={classes.typographyValue}>
                    {`${Math.round(props.value,)}%`}
                </Typography>
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


    const isLoad = useSelector(state => state.chat.upload.loading)
    const progress = useSelector(state => state.chat.upload.status)
    const fileInfo = useSelector(state => state.chat.upload.file)
    const displayInfo = useSelector(state => state.chat.displayInfo)


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
            file: fileInfo,
            text,
            dialogueId,
        })
        setText('')
        dispatch(setDisplayFileInfo(false))
    }
    const handleTextArea = e => e.key === 'Enter' ? handleSubmit() : null

    const handleFileUpload = event => {
        const file = event.target.files[0]
        const data = {
            lastModified: file.lastModified,
            lastModifiedDate: file.lastModifiedDate,
            size: file.size,
            type: file.type,
            webkitRelativePath: file.webkitRelativePath
        }
        dispatch(setUploadData(data))
        dispatch(uploadFile(file))
    }
    const handleDeleteIcon = () => {
        dispatch(setDisplayFileInfo(false))
        dispatch(setCleanUploadData(null))
        dispatch(setCleanUploadFileInfo({name: null, size: null}))
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
                            messagesArray.map((data, index) => {
                                return userId !== data.author ? (
                                    <Message
                                        userId={data.author}
                                        time={data.createdAt}
                                        text={data.text}
                                        recieved={true}
                                        files={data.files}
                                        key={index}
                                    />
                                ) : (
                                    <Message
                                        userId={data.author}
                                        name={profile.displayName}
                                        source={profile?.photoURL}
                                        time={data.createdAt}
                                        text={data.text}
                                        files={data.files}
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
                        <Grid >
                            <TextareaAutosize
                                onChange={e => setText(e.target.value)}
                                onKeyPress={handleTextArea}
                                value={text}
                                className={classes.textarea}
                                aria-label="minimum height"
                                rowsMin={5}
                                placeholder="Write a text"
                            />
                            <Grid className={classes.loading} style={{display: isLoad ? 'flex' : 'none'}}>
                                <Grid >
                                    <Grid container alignContent='center' justify='flex-start' className={classes.progressHeight}>
                                        <Grid item>
                                            <LinearProgressWithLabel value={progress} />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container justify='space-between' className={classes.more}>
                            <Grid item className={classes.aditional__options}>
                                <Grid container className={classes.toolbar} alignItems={'center'}>
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
                                        <input
                                            multiple={false}
                                            type="file"
                                            id='inp'
                                            className={classes.hiddenInput}
                                            onChange={handleFileUpload}
                                        />
                                    </Grid>
                                    <Grid style={{display: displayInfo ? 'block' : 'none'}} className={classes.fileWrapper} >
                                        <Grid container className={classes.file}>
                                            <Grid item className={classes.name}>{fileInfo.name}</Grid>
                                            <Grid item className={classes.size}>
                                                (<span>{(fileInfo.size / 1000000).toFixed(1)}</span><span className={classes.metrics}>mb</span>)
                                            </Grid>
                                            <Grid item className={classes.deleteIconWrapper} onClick={handleDeleteIcon}>
                                                <DeleteIcon className={classes.deleteIcon} />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Button disabled={progress > 0} variant="contained" color="primary" className={classes.button} onClick={handleSubmit}>
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