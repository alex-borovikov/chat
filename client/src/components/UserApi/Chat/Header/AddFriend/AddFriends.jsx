import React from 'react';
import useStyles from "../Header.styles";
import useOwnStyles from "./AddFriends.styles";
import clsx from "clsx";
import {Box} from "@material-ui/core";
import DefaultButton from "../../../../DefaultButton/DefaultButton";

const AddFriends = () => {
    const headerClasses = useStyles();
    const classes = useOwnStyles()

    return (
        <Box display='flex' justifyContent='space-between' alignItems='center' className={clsx(headerClasses.borderRight, headerClasses.padding)}>
            <p className={classes.p}>Chat with me - is simple!</p>
            <DefaultButton text='Add friends' />
        </Box>
    );
};

export default AddFriends;