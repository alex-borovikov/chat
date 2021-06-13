import React from 'react';
import searchStyles from './Search.styles'
import {Avatar, Box} from "@material-ui/core";

const SearchItem = ({source, name, login}) => {
    const searchClasses = searchStyles();
    return (
        <Box display='flex' alignItems='center' className={searchClasses.rootItem}>
            <Avatar src={source} alt={name}/>
            <div className={searchClasses.searchItemInfo}>
                <p>{name}</p>
                <p>{'@' + 'Nickname'}</p>
            </div>
        </Box>
    );
};
SearchItem.defaultProps = {
    source: '/slide/e.txt',
}

export default SearchItem;