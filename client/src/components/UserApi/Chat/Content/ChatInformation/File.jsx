import React from 'react';
import useStyles from "./ChatInfo.styles";
import {Tooltip} from "@material-ui/core";

const File = ({source, fileName, fileSize, alt, fileType}) => {
    const classes = useStyles()
    return (
        <div className={classes.file}>
            <div className='file'>
                <div className={classes.fileType}>
                    <img className={classes.fileImage} src={source} alt={alt}/>
                </div>
                <Tooltip title={fileName}>
                <div className={classes.fileName}>{fileName}</div>
                </Tooltip>
                <div className={classes.fileSize}>{fileSize}</div>
            </div>
        </div>
    );
};

export default File;