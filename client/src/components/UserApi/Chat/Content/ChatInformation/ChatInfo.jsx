import React from 'react';
import {makeStyles} from "@material-ui/core";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import filetype from '../../../../../assets/images/fileTypes/word.svg'
import filetype2 from '../../../../../assets/images/fileTypes/excel.svg'
import File from "./File";
import useStyles from "./ChatInfo.styles";



const ChatInfo = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>Project Files</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionContent}>
                   <File source={filetype} fileName='Document.txt' fileType='txt' fileSize='365 kb' />
                   <File source={filetype2} fileName='Document.excel' fileType='txt' fileSize='365 kb' />
<<<<<<< HEAD
                   <File source={filetype2} fileName='Document.excel' fileType='txt' fileSize='365 kb' />
                   <File source={filetype2} fileName='Document.excel' fileType='txt' fileSize='365 kb' />
                   <File source={filetype2} fileName='Document.excel' fileType='txt' fileSize='365 kb' />
=======
>>>>>>> 138c62049c466c9a59121cf131c7f674dce845b9
                </AccordionDetails>
            </Accordion>

        </div>
    );
};

export default ChatInfo;