import React, {useState} from 'react';
import {Box, Button, Grid, IconButton, TextField} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import useHeaderStyles from "../Header.styles";
import useStyles from "./Search.styles";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import clsx from "clsx";
import SearchItem from "./Search-Item";
import CloseIcon from '@material-ui/icons/Close';


const Search = () => {
    const headerClasses = useHeaderStyles();
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Box display='flex' alignItems='center'  justifyContent='space-between' className={clsx(headerClasses.borderRight,headerClasses.padding)}>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <IconButton className={classes.iconButton} onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                        <Box display='flex' flexDirection='column' className={classes.search}>
                            <Grid item className={classes.searchContainer}>
                                <TextField placeholder='Search' />
                            </Grid>
                            <Grid item className={classes.searchResultWindow}>
                                <SearchItem source='/slide/e.txt' name='Alex Tadeski' />
                            </Grid>
                        </Box>
                    </div>
                </Fade>
            </Modal>
            <Grid >
                <input type="text" className={headerClasses.input}/>
            </Grid>
            <Grid className={classes.buttonContainer}>
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <IconButton onClick={handleOpen}>
                    <AddIcon />
                </IconButton>
            </Grid>
        </Box>
    );
};

export default Search;