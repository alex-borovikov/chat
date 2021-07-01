import React, {Fragment, useEffect, useState} from 'react';
import {Box, Divider, Grid, makeStyles} from "@material-ui/core";
import Avatar from "../../../../Avatar/Avatar";
import axios from "axios";

const useStyles = makeStyles({
    root: {
      padding: '10px',
        transition: 'background .3s ease',
        '&:hover': {
          background: '#ECF8FF',
            cursor: 'pointer'
        }
    },
    avatar: {
        marginRight: '10px'
    },
    header: {
        width: '100%'
    },
    name: {
        display: 'flex',
        fontWeight: 700,
        marginBottom: '5px'
    },
    time: {
        fontSize: '.8em',
        opacity: '.4'
    },
    shortText: {
      fontSize: '.8em',

    }

})

const DialogueItem = ({dialogue, currentUser, onClick, lastMessage}) => {
    const classes = useStyles();
    const [user, setUser] = useState(null)


    useEffect(() => {
        const friendId = dialogue.members.find(member => member !== currentUser)
        const getUser = async () => {
            const response = await axios.get('http://localhost:4000/api/user/get/' + friendId)
            setUser(response.data.user)
        }
        getUser()
    }, [currentUser, dialogue])

    return (
        <Fragment>
            <Box display='flex' className={classes.root} onClick={onClick}>
                <div className={classes.avatar}>
                    <Avatar online={user?.status} src={user?.avatar} name={user?.name} />
                </div>
                <div className={classes.header}>
                    <Grid container justify='space-between'>
                        <Grid item className={classes.name}>
                            {user?.name}
                        </Grid>
                        <Grid item className={classes.time}>
                            {'19:52'}
                        </Grid>
                    </Grid>
                    <Grid className={classes.shortText}>
                        {lastMessage}
                    </Grid>
                </div>
            </Box>
            <Divider />
        </Fragment>
    );
};

export default DialogueItem;