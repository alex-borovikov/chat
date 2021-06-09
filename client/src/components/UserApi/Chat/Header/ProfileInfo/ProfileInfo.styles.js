import {makeStyles} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    root: {
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    },
    name: {
        marginLeft: '10px'
    } ,
    span: {
        fontWeight: 700,
        letterSpacing: '.3px',
        fontFamily: 'Roboto'
    }
}))

export default useStyles