import React, {useState} from 'react';
import {Box, Button, Grid, IconButton} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import useHeaderStyles from "../Header.styles";
import useStyles from "./Search.styles";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import clsx from "clsx";


const Search = () => {
    const headerClasses = useHeaderStyles();
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

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
                        <Grid>
                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid>
                            <Button className={classes.buttonAdd} variant="contained" color="primary">
                                Add
                            </Button>
                        </Grid>
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