import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core";
import DialogueItem from "./Dialogue-item";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {setMessages, setOpen, setParticipants, setCurrentDialogId} from "../../../../../store/chatReducer";

const useStyles = makeStyles({
    root: {
        borderRight: '1px solid #e3e3e3',
    }
})

const Dialogues = () => {
    const classes = useStyles()
    const [dialogues, setDialogue] = useState([]);
    const [currentDialogue, setCurrentDialogue] = useState(null);
    const userId = useSelector(state => state.user.info.id)
    const reRender = useSelector(state => state.chat.rerenderDialogs)
    const dispatch = useDispatch();

    useEffect(() => {
        const getDialogues = async () => {
            try{
                const response = await axios.get('http://localhost:4000/api/dialogue/get/' + userId)
                setDialogue(response.data.dialogue)

            }
            catch(err){
                console.log(err.response?.data?.message)
            }
        }
        getDialogues()
    }, [userId, reRender])

    useEffect(() => {
        const getMessages = async () => {
            try{
                const response = await axios.get('http://localhost:4000/api/message/get/' + currentDialogue?._id)
                dispatch(setMessages(response.data.messages))
                if(currentDialogue?.members) {
                    dispatch(setParticipants(currentDialogue.members))
                }
            }
            catch(err){
                console.log(err)
            }
        }
        getMessages()
    })

    return (
        <div className={classes.root}>
            {dialogues.map((dialogue, index) => {
                return <DialogueItem
                            key={index}
                            dialogue={dialogue}
                            currentUser={userId}
                            onClick={() => {
                                setCurrentDialogue(dialogue)
                                dispatch(setOpen(true))
                                dispatch(setCurrentDialogId(dialogue._id))
                            }}
                        />
            })}
        </div>
    );
};

export default Dialogues;