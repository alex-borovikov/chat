import {makeStyles} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    root: {
        background: '#86F0D3',
        height: 'auto'
    },
    paper: {
        width: '50vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px 30px'
    },
    header: {
        marginBottom: '30px'
    },
    fields: {
        width: '100%',
    },
    fieldWrapper: {
        marginBottom: '20px',
        width: '100%',
        '& div': {
            width: '100%'
        },
        '& input:focus ~ fieldset': {
            borderColor: '#86F0D3 !important'
        },
        '& .MuiFormLabel-root': {
            color: '#CCDBDA !important'
        }
    },
    button: {
        '& > button': {
            width: '100%',
            background: 'linear-gradient(270deg, rgb(31, 199, 152), rgb(22, 158, 122))'
        },
        '& > button > span > span': {
            marginRight: '5px'
        },
        marginBottom: '10px'
    },
    dividerMargin: {
        margin: '0 0 0 auto'
    },
    btn: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridColumnGap: '10px',
        '& > a': {
            width: '100%'
        },
        '& button, & a > button': {
            width: '100%',
            background: '#fff',
        }
    } ,
    google: {
        '& img': {
            marginRight: '5px'
        },
        '& span': {
            transform: 'translateY(1px)'
        }
    },
    [theme.breakpoints.down('md')]: {
        root: {
            padding: '30px 0'
        },
        paper: {
            width: '90vw'
        },
        btn: {
            gridTemplateColumns: '1fr',
            gridRowGap: '15px'
        }
    }
}))
export default useStyles;