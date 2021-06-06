import React from 'react';
import {Box, Divider, makeStyles} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import {IconButton} from "@material-ui/core";
import useStyles from "./Chat.styles";
import Dialogs from "./Dialogs/Dialogs";
import clsx from "clsx";




const Chat = () => {
    const classes = useStyles()
    return (
        <Box display={'flex'} className={classes.root}>
            <aside className={classes.sidebar}>
                <div className={clsx(classes.search, classes.padding)}>
                    <input type='text' className={classes.input} placeholder={'Search'} />
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <IconButton>
                        <AddIcon />
                    </IconButton>
                </div>
                <div className='dialogs'>
                    <Dialogs />
                    <Divider />
                    <Dialogs />
                    <Divider />
                    <Dialogs />
                    <Divider />
                </div>
            </aside>
            <div>chat</div>
        </Box>
    );
};

export default Chat;