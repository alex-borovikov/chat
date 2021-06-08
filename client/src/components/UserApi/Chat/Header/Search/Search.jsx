import React from 'react';
import {Box, IconButton} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import useStyles from "../Header.styles";
import clsx from "clsx";

const Search = () => {
    const headerClasses = useStyles();
    return (
        <Box display='flex' alignItems='center' justifyContent='space-between' className={clsx(headerClasses.borderRight,headerClasses.padding)}>
            <div >
                <input type="text" className={headerClasses.input}/>
            </div>
            <div >
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <IconButton>
                    <AddIcon />
                </IconButton>
            </div>
        </Box>
    );
};

export default Search;