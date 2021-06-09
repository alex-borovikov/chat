import React from 'react';
import {makeStyles} from "@material-ui/core";
import DialogItem from "./Dialog-item";

const useStyles = makeStyles({
    root: {
        borderRight: '1px solid #e3e3e3',
    }
})

const Dialogs = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <DialogItem
                name='Alex Tadeski'
                source='/slide/e.txt'
                time='19:52'
                lastMessage='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, tempora.'
                status={true}
            />
            <DialogItem
                name='Walter Whitman'
                source='/slide/e.txt'
                time='19:52'
                lastMessage='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, tempora.'
                status={false}
            />
            <DialogItem
                name='Fedor Dostoevski'
                source='/slide/e.txt'
                time='19:52'
                lastMessage='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, tempora.'
                status={false}
            />
        </div>
    );
};

export default Dialogs;