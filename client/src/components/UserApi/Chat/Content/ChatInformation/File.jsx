import React from 'react';
import useStyles from "./ChatInfo.styles";
import {Tooltip} from "@material-ui/core";

const File = ({source, fileName, fileSize, alt, fileType}) => {
    const classes = useStyles()
    return (
<<<<<<< HEAD
        <div className={classes.file}>
=======
        <div className='file'>
>>>>>>> 138c62049c466c9a59121cf131c7f674dce845b9
            <div className={classes.fileType}>
                <img className={classes.fileImage} src={source} alt={alt}/>
            </div>
            <Tooltip title={fileName}>
            <div className={classes.fileName}>{fileName}</div>
            </Tooltip>
            <div className={classes.fileSize}>{fileSize}</div>
        </div>
    );
};

export default File;