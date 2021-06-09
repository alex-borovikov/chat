import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        overflow: 'hidden'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: 700
    },
    accordionContent: {
        background: '#D9E7F4',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)'
    },
    fileType: {
        background: '#fff',
        width: 'fit-content',
        padding: '8px 7px' ,
    } ,
    fileImage: {
        width: '35px',
        cursor: 'pointer'
    },
    fileName: {
        fontSize: '.8em',
        marginTop: '5px',
        color: '#3d9efd',
        cursor: 'pointer',
        maxWidth: '50px',
        overflow: 'hidden'
    },
    fileSize: {
        fontSize: '.8em',
        marginTop: '1px'
    }
}));
export default useStyles;