import React from 'react';
import useStyles from "./Header.styles";
import Search from "./Search/Search";
import AddFriends from "./AddFriend/AddFriends";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {useSelector} from "react-redux";

const Header = () => {
    const classes = useStyles();
    const profile = useSelector(state => state.user.info)
    return (
        <div className={classes.root}>
           <Search />
           <AddFriends />
           <ProfileInfo name={profile?.displayName} source={profile?.photoURL} />
        </div>
    );
};

export default Header;