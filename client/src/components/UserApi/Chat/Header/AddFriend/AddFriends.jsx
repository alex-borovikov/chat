import React from 'react';
import useStyles from "../Header.styles";
import useOwnStyles from "./AddFriends.styles";
import clsx from "clsx";
import {Box, Button} from "@material-ui/core";

const AddFriends = () => {
    const headerClasses = useStyles();
    const classes = useOwnStyles()
    return (
        <Box display='flex' justifyContent='space-between' alignItems='center' className={clsx(headerClasses.borderRight, headerClasses.padding)}>
            <p className={classes.p}>Chat with me - is simple!</p>
            <Button variant="contained" color="primary" className={classes.button}>
                Add friends
            </Button>
        </Box>
    );
};

export default AddFriends;