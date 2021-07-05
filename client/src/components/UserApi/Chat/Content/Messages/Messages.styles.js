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
        position: 'relative'
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
        transform: 'translateY(1px)'
    },
    progressHeight: {
        height: '100%'
    },
    name: {
        color: 'blue',
        marginRight: '5px',
        fontSize: '.85em'
    },
    metrics: {
        display: 'inline-block',
        marginLeft: '5px',

    },
    size: {
        fontSize: '.85em',
        color: '#b8b7b7'
    },
    file: {
        alignItems: 'center',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    fileWrapper: {
        marginLeft: '5px',
    },
    deleteIconWrapper: {
        marginLeft: '5px'
    },
    deleteIcon: {
        fontSize: '1.2em',
        transition: 'color .3s',
        '&:hover': {
            color: 'red'
        }
    },
    loading: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0,0,0, .6)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '1'
    },
    typographyValue: {
        color: '#fff'
    }
})
export default useStyles;