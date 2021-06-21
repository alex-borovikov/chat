import React from 'react';
import searchStyles from './Search.styles'
import {Avatar, Box} from "@material-ui/core";

const SearchItem = ({source, name, login, onClick}) => {
    const searchClasses = searchStyles();
    const check = login ? login : 'undefined'
    return (
        <Box display='flex' alignItems='center' className={searchClasses.rootItem} onClick={onClick}>
            <Avatar src={source} alt={name}/>
            <div className={searchClasses.searchItemInfo}>
                <p>{name}</p>
                <p>{'@' + check}</p>
            </div>
        </Box>
    );
};
SearchItem.defaultProps = {
    source: '/slide/e.txt',
}

export default SearchItem;