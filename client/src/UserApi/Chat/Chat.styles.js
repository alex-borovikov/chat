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
    },
    input: {
        border: 'none',
        outline: 'none',
        letterSpacing: '.5px'
    },
    padding: {
        padding: '10px'
    }
}))

export default useStyles;