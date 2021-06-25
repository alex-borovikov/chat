import React, {useState} from 'react';
import {Box, Grid, IconButton, TextField} from "@material-ui/core";
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
import { searchUser } from "../../../../../actions/search.action";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {setReRender} from "../../../../../store/chatReducer";


const Search = () => {
    const headerClasses = useHeaderStyles();
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState(false);
    const [resultArray, setResult] = useState(false);
    const userId = useSelector(state => state.user.info.id)
    const reRender = useSelector(state => state.chat.rerenderDialogs)
    const dispatch = useDispatch();

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        setResult(false)
    };
    const handleInputChange = async(e) => {
        const response = await searchUser(e.target.value)
        setMessage(response.message)
        setResult([...response.result])
    }

    const handlerSearch = (author, partner) => {
        try{
            const createDialogue = async () => {
                const response = await axios.post('http://localhost:4000/api/dialogue/create', {
                    author,
                    partner
                })
                if(!response.data.status){
                    console.log(response.data.message)
                    return
                }
                setOpen(false);
                //Check the flag and set new state
                dispatch(setReRender(!reRender))

            }
            createDialogue()
        }
        catch(err){
            console.log({err})
        }
    }

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
                                <TextField onChange={e => handleInputChange(e)} placeholder='Search' />
                            </Grid>
                            <Grid item className={classes.searchResultWindow}>
                                {resultArray.length > 0 ? resultArray.map((elem, index) => {
                                    return <SearchItem
                                                key={index}
                                                source={elem.avatar}
                                                login={elem.login}
                                                name={`${elem.name} ${elem.surname}`}
                                                onClick={() => {
                                                    handlerSearch( userId , elem._id )
                                                }}
                                            />
                                }) : (
                                    <p>{message}</p>
                                )
                                }

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