import {makeStyles} from "@material-ui/core";


const useStyles = makeStyles({
    root: {

    },
    button : {
        background: '#9CE275',
        '&:hover': {
            background: '#86cd5f',
        }
    },
    p: {
        fontWeight: 700,
        letterSpacing: '.5px',
        color: '#5E93FC'
    }

})
export default useStyles