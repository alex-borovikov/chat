import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        transition: 'background .3s ease',
        '&:hover': {
            background: '#ECF8FF',
            cursor: 'pointer'
        }
    },
    dialog: {
        marginLeft: '8px',
        width: '100%'
    },
    header: {
        display: 'flex',
        justifyContent: "space-between"
    },
    shortMessage: {
        fontSize: '.8em',
        marginTop: '5px',
        letterSpacing: '.1px'
    },
    name: {
        fontSize: '.96em',
        fontWeight: 700,
        letterSpacing: '.5px',
        fontFamily: 'Roboto'
    },
    time: {
        fontSize: '.8em',
        opacity: '.4'
    }
}))
export default useStyles;