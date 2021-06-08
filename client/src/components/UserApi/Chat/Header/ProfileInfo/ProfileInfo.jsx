import React from 'react';
import {Avatar, Box} from "@material-ui/core";
import headerStyles from '../Header.styles'
import useStyles from "./ProfileInfo.styles";

const ProfileInfo = ({name, source}) => {
    const headerClasses = headerStyles();
    const classes = useStyles();
    return (
        <Box display='flex'  alignItems='center' className={headerClasses.padding}>
            <Avatar alt={name} src={source} />
            <div className={classes.name}>
                <span className={classes.span}>Name Surname</span>
            </div>
        </Box>
    );
};
ProfileInfo.defaultProps = {
    name: 'Name Surname',
    source: '/static/images/avatar/1.jpg'
}

export default ProfileInfo;