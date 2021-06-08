import React,{Fragment} from 'react';
import {Box, Divider, Grid, makeStyles} from "@material-ui/core";
import Avatar from "../../../../Avatar/Avatar";

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

const DialogItem = ({name, source, time, lastMessage, status}) => {
    const classes = useStyles();
    return (
        <Fragment>
            <Box display='flex' className={classes.root}>
                <div className={classes.avatar}>
                    <Avatar online={status} src={source} name={name} />
                </div>
                <div className={classes.header}>
                    <Grid container justify='space-between'>
                        <Grid item className={classes.name}>
                            {name}
                        </Grid>
                        <Grid item className={classes.time}>
                            {time}
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

export default DialogItem;