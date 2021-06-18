import React, {useEffect} from 'react';
import classes from  './Loader.module.scss'
import {PacmanLoader} from "react-spinners";

const Loader = ({text}) => {
    return (
        <div className={classes.wrapper}>
            <PacmanLoader loading color={'#F7D755'} />
            <div className={classes.text}>{text}</div>
        </div>
    )
};

Loader.defaultProps = {
    text: 'Loading...'
}

export default Loader;