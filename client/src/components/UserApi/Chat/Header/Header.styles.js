import {makeStyles} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiIconButton-root': {
            padding: '7px'
        },
        borderBottom: '1px solid #e3e3e3',
        display: 'grid',
        gridTemplateColumns: '1.5fr 3fr 1.5fr',
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: '1.5fr 3fr',
        }
    },
    input: {
        border: 'none',
        outline: 'none'
    },
    borderRight: {
        borderRight: '1px solid #e3e3e3'
    },
    padding: {
        padding: '10px'
    }
}))
export default useStyles