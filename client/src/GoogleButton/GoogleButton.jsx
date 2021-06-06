import React from 'react';
import {Button} from "@material-ui/core";

const GoogleButton = (props) => {
    return (
        <Button  {...props}>
            <img alt='google_logo.png' src="https://img.icons8.com/office/16/000000/google-logo.png"/>
            <span>Continue with google</span>
        </Button>
    );
};

export default GoogleButton;