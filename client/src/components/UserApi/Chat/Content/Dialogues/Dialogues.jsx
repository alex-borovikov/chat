import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core";
import DialogueItem from "./Dialogue-item";
import {useSelector} from "react-redux";
import axios from "axios";

const useStyles = makeStyles({
    root: {
        borderRight: '1px solid #e3e3e3',
    }
})

const Dialogues = () => {
    const classes = useStyles()
    const [dialogues, setDialogue] = useState([]);
    const userId = useSelector(state => state.user.info.id)

    useEffect(() => {
        const req = async () => {
            try{
                const response = await axios.get('http://localhost:4000/api/dialogue/get/' + userId)
                setDialogue(response.data.dialogue)
            }
            catch(err){
                console.log(err.response?.data?.message)
            }
        }
        req()
    }, [userId])

    return (
        <div className={classes.root}>
            {dialogues.map((dialogue, index) => {
                return <DialogueItem
                            key={index}
                            dialogue={dialogue}
                            currentUser={userId}
                        />
            })}
        </div>
    );
};

export default Dialogues;