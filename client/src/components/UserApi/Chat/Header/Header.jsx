import React from 'react';
import useStyles from "./Header.styles";
import Search from "./Search/Search";
import AddFriends from "./AddFriend/AddFriends";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
           <Search />
           <AddFriends />
           <ProfileInfo />
        </div>
    );
};

export default Header;