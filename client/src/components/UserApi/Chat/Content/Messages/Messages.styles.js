import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        borderRight: '1px solid #e3e3e3',
        background: '#EFF3F8',
        '& .MuiIconButton-root': {
            padding: '7px',
        },
        display: 'flex',
        flexDirection: 'column',
        maxHeight: 'calc(100% - 62px)',
        padding: '20px',
        '& .MuiAvatar-root': {
            width: '35px',
            height: '35px'
        },
    },
    messages: {
        flexGrow: 1,
        overflowY: 'scroll',
        maxHeight: 'calc(100vh - 262px)',
        height: '500px',
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    },
    addMessageArea: {
        background: '#fff',
        borderRadius: '7px',
        width: '100%',
    } ,
    textarea: {
        width: '100%',
        resize: 'none',
        border: 'none',
        padding: '10px',
        outline: 'none',
        borderRadius: '7px',
        '&::placeholder': {
            opacity: '.4'
        }
    },
    button: {
        borderRadius: '20px',
        background: '#5E93FC',
        '&:hover': {
            background: '#2762D4'
        }
    },
    attachfile: {
        fontSize: '18px'
    },
    more: {
        padding: '10px'
    },
    textContainer: {

    },
    leftCloud: {
        position: 'relative',
        marginLeft: '5px',
        '&::before': {
            content: '""',
            position: 'absolute',
            top: '0',
            left: '0px',
            background: 'transparent',
            transform: 'translateX(-100%)',
            borderTop: '0px solid transparent',
            borderRight: '16px solid #DDE5EE',
            borderBottom: '12px solid transparent',
        }
    },
    rightCloud: {
        position: 'relative',
        marginRight: '5px',
        '&::after': {
            content: '""',
            position: 'absolute',
            top: '0',
            right: '0px',
            background: 'transparent',
            transform: 'translateX(100%)',
            borderTop: '0px solid transparent',
            borderLeft: '16px solid #DDE5EE',
            borderBottom: '12px solid transparent',
        }
    },
    textBox: {
        background: '#DDE5EE',
        padding: '10px',
        borderRadius: '5px',
        width: 'fit-content',
        textAlign: 'justify'


    },
    textBoxLeft: {
        borderTopLeftRadius: '0px',
        marginRight: 'auto'
    },
    textBoxRight: {
        borderTopRightRadius: '0px',
        marginLeft: 'auto'
    },
    gridParent: {
        flexWrap: 'nowrap',
        marginBottom: '15px'
    },
    reverse: {
        flexDirection: 'row-reverse'
    },
    avatarWrapper: {
        transform: 'translateY(3px)'
    },
    messageDetails: {
        '& > div': {
            fontSize: '.75em',
            marginTop: '3px',
            opacity: '.4',
        },
    },
    dotSeparator: {
        background: '#000',
        opacity: '.4',
        borderRadius: '50%',
        width: '3px',
        height: '3px',
        margin: '0 5px'
    },
    noDialogueText: {
        padding: '10px 0',
        fontSize: '2em',
        opacity: '.2',
        textAlign: 'center',
        cursor: 'default'
    },
    hiddenInput: {
        display: 'none'
    },
    label: {
        display: 'inline-block',
        width: '1em',
        height: '1em',
        cursor: 'pointer'
    },
    emoji: {
        transform: 'translateY(5px)'
    },
    progressHeight: {
        height: '100%'
    }
})
export default useStyles;