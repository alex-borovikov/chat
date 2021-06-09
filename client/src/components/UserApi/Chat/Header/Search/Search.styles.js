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
    }
}))
export default useStyles