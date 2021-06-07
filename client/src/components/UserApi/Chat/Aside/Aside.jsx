import React, {useState} from 'react';
import {Box, Button, Modal} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import {IconButton} from "@material-ui/core";
import useStyles from "./Aside.styles";
import Dialogs from "./Dialogs/Dialogs";
import clsx from "clsx";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Messages from "../Messages/Messages";




const Aside = () => {
    const classes = useStyles();
    const [value, setValue] = useState('');
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleChange = (event) => setValue(event.target.value);

    return (
        <Box display={'flex'} className={classes.root}>
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
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Select friend</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={value}
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Linus</MenuItem>
                                <MenuItem value={20}>Kail</MenuItem>
                                <MenuItem value={30}>Mark</MenuItem>
                            </Select>
                            <Button className={classes.buttonModal} variant="contained" color="primary">
                                Add
                            </Button>
                        </FormControl>
                    </div>
                </Fade>
            </Modal>
            <aside className={classes.sidebar}>
                <div className={clsx(classes.search, classes.padding)}>
                    <input type='text' className={classes.input} placeholder={'Search'} />
                    <Box>
                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                        <IconButton onClick={handleOpen}>
                            <AddIcon />
                        </IconButton>
                    </Box>
                </div>
                <div className='dialogs'>
                    <Dialogs status={false} />
                    <Dialogs />
                    <Dialogs />
                    <Dialogs />
                    <Dialogs />
                    <Dialogs />
                </div>
            </aside>
        </Box>
    );
};

export default Aside;