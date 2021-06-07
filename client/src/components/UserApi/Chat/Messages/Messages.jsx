import React from 'react';
import {Box, Grid} from "@material-ui/core";

const Messages = () => {
    return (
        <Grid>
            <header>
                <Box display='flex'>
                    <p>Chat now - its simple!</p>
                    <button>Add friend</button>
                </Box>
            </header>
        </Grid>
    );
};

export default Messages;