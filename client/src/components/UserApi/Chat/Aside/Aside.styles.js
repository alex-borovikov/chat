import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiIconButton-root': {
            padding: '7px'
        },
        maxWidth: '100%'
    },
    sidebar: {
        borderRight: '1px solid #e3e3e3',

    },
    search: {
        borderBottom: '1px solid #e3e3e3',
        display: 'flex',
        justifyContent: 'space-between'
    },
    input: {
        border: 'none',
        outline: 'none',
        letterSpacing: '.5px'
    },
    padding: {
        padding: '10px'
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 320,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    buttonModal: {
        marginTop: '20px',
        backgroundColor: '#4B83F0',
        '&:hover': {
            backgroundColor: '#2762D4',
        }
    }
}))

export default useStyles;