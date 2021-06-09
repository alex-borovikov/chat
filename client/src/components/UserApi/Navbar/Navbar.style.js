import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        background: '#4B83F0',
    },
    header: {
        background: '#2762D4',
        '& a': {
            display: 'inline-block',
            width: '100%',
            fontWeight: 800,
            fontSize: '1.3em',
            textAlign: 'center',
            padding: '15px 0',
            color: '#fff',
        }
    },
    icon: {
        color: '#fff'
    },
    routerElement: {
        textAlign: 'center',
        padding: '15px 0',
        transition: 'background .3s ease',
        '&:hover': {
            background: '#62D862'
        }
    }
}))

export default useStyles;