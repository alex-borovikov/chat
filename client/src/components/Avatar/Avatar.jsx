import React from 'react';
import {Badge, withStyles,} from "@material-ui/core";
import AvatarIcon from '@material-ui/core/Avatar';

const StyledBadgeOnline = withStyles((theme) => ({
    badge: {
        backgroundColor:'#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    },

}))(Badge);

const StyledBadgeOffline = withStyles((theme) => ({
    badge: {
        backgroundColor: 'red',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    },

}))(Badge);

const Avatar = ({online, src, name}) => {
    if(online){
        return (
            <StyledBadgeOnline
                overlap="circle"
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                variant="dot"
            >
                <AvatarIcon alt={name} src={src} />
            </StyledBadgeOnline>
        );
    }else {
        return (
            <StyledBadgeOffline
                overlap="circle"
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                variant="dot"
            >
                <AvatarIcon alt={name} src={src} />
            </StyledBadgeOffline>
        )
    }

};

export default Avatar;