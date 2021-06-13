import {makeStyles} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        height: '60vh',
        width: '30vw',
        position: 'relative'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 300,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    buttonAdd: {
        width: '100%',
        background: '#4B83F0',
        '&:hover': {
            background: '#2762D4'
        }
    },
    buttonContainer: {
        display: 'flex',
        flexWrap: 'nowrap'
    },
    search: {
        height: '100%',
        marginTop: '10px'
    },
    searchContainer: {
        width: '100%',
        '& div': {
            width: '100%'
        }
    },
    searchResultWindow: {
        marginTop: '15px',
        flexGrow: '1'
    },
    rootItem: {
        padding: '10px',
        transition: 'background .3s ease',
        '&:hover': {
            background: '#ECF8FF',
            cursor: 'pointer'
        }

    },
    searchItemInfo: {
        marginLeft: '10px',
        fontWeight: 600,
        '& p:last-child': {
            marginTop: '3px',
            fontSize: '.8em',
            color: '#169FE6'
        }
    },
    iconButton: {
        padding: '5px',
        position: 'absolute',
        right: '5px',
        top: '5px',
    }

}))
export default useStyles