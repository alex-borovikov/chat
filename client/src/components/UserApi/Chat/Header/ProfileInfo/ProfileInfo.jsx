import React from 'react';
import {Avatar, Box} from "@material-ui/core";
import headerStyles from '../Header.styles'
import useStyles from "./ProfileInfo.styles";
import clsx from "clsx";
import DefaultButton from "../../../../DefaultButton/DefaultButton";
import {auth} from "../../../../../firebase";
import {useDispatch} from "react-redux";
import {setAuth, setLoader} from '../../../../../store/userReducer'


const ProfileInfo = ({name, source}) => {
    const headerClasses = headerStyles();
    const classes = useStyles();
    const dispatch = useDispatch();
    const handleSignOut = () => {
        try{
            //Disable loader in login page
            localStorage.removeItem('userAuth')
            dispatch(setLoader(false))
            // END Disable loader in login page

            if(localStorage.getItem('token')) localStorage.removeItem('token')
            auth.signOut().then(() => {
                dispatch(setAuth(false) )
            })
        }
        catch(err){
            console.log(err)
        }
    }
    return (
        <Box display='flex' alignItems='center' justifyContent='space-between' className={clsx(headerClasses.padding, classes.root)}>
            <Box display='flex' alignItems='center'>
                <Avatar alt={name} src={source} />
                <div className={classes.name}>
                    <span className={classes.span}>{name}</span>
                </div>
            </Box>
            <Box>
                <DefaultButton onClick={handleSignOut} text='Sign out' />
            </Box>
        </Box>
    );
};
ProfileInfo.defaultProps = {
    name: 'Name Surname',
    source: '/static/images/avatar/1.jpg'
}

export default ProfileInfo;