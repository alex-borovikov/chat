import {makeStyles} from "@material-ui/core";
import back from "../../assets/images/fon.jpg";

const useStyles = makeStyles(theme => ({
    root: {
        background: '#86F0D3',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    paper: {
        width: '90vw',
        borderRadius: '23px',
        margin: '0 auto',
        boxShadow: '1px 2px 27px -9px rgba(0,0,0,0.75)',
        background: '#fff'
    },
    element: {
        flex: '50%'
    },
    left__section:{
        backgroundImage: `url(${back})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '23px',
        display: 'grid',
        placeItems: 'center'
    },
    right__section: {
        display: 'flex',
        justifyContent: 'center',
        padding: '5vw 0'
    } ,
    textfield:{
        outline: 'none',
        borderRadius: '5px',
        border: '1px solid #e3e3e3',
        height: '40px',
        padding: '5px 10px',
        letterSpacing: '.5px',
        width: '300px'
    },
    form: {
        width: 'fit-content',
    },
    form_control: {
        display: 'flex',
        flexDirection: 'column'
    },
    form__header: {
        fontSize: '1.8em',
        marginBottom: '30px'
    },
    form__section: {
        marginBottom: '10px',
        '& .form__section-item':{
            fontSize: '1em'
        },
        '& .form__section-label':{
            fontWeight: 700,
            marginBottom: '4px'
        },
        '& .form__section-label__text':{
            fontSize: '.95em',
            marginLeft: '-5px'
        },
        '& .form__section-signin':{
            width: '100%',
            color: '#fff',
            background: 'linear-gradient(270deg, rgb(31, 199, 152), rgb(22, 158, 122))'
        },
        '& .PrivateSwitchBase-root-20': {
            padding: '0'
        }
    },
    form__section_parent: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        alignItems: 'center',
        alignSelf: 'center',
        textAlign: 'center',
        marginBottom: '0',
        '& > span': {
            color: '#e3e3e3'
        }

    },
    form__sectionMargin: {
        margin: '25px 0 40px 0',
        '& button.form__section-signin > span > span:first-child': {
            marginRight: '5px'
        }
    },
    form__section_divider: {
        display: 'inline-block',
        width: '70px',
        height: '1px',
        background: '#e3e3e3',

    },
    form__btn: {
        marginTop: '40px',
        '& button': {
            width: '100%',
            background: '#fff',
            '& span': {
                transform: 'translateY(1px)',
            },
            '& img': {
                marginRight: '10px'
            },
        },
    },
    arrow: {
        fontSize: '1.1em'
    },
    form__section_showPassword: {
        display: 'flex',
        alignItems: 'center',
        '& .MuiCheckbox-colorSecondary.Mui-checked': {
            color: '#86F0D3'
        },
        '& .PrivateSwitchBase-root-38': {
            padding: '0',
            marginRight: '8px'
        }
    },
    greeting: {
        width: '70%',
        height: '80%',
    },
    blur__effect: {
        height: '100%',
        width: '100%',
        borderRadius: '13px',
        backgroundColor: 'rgba(0,0,0, .25)',
        backdropFilter: 'blur(12px)',
        color: '#fff',
        padding: '30px 23px',
        display: 'flex',
        flexDirection: 'column'
    },
    greeting__logo: {
        backdropFilter: 'blur(1px)',
        width: 'fit-content',
        padding: '5px 10px',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        fontWeight: '600',
        '& div:nth-child(2)': {
            textAlign: 'center'
        },
        marginBottom: '40px'
    },
    greeting__separator: {
        width: '50px',
        height: '2px',
        background: '#10b8be'
    },
    greeting__main: {
        flex: '1 1 auto',
        marginTop: '40px',
        '& p': {
          marginBottom: '8px'
        },
        '& p:first-child': {
            fontSize: '1.2em'
        },
        '& p:nth-child(2)': {
            fontSize: '2em'
        },
        '& p:nth-child(3)': {
            fontSize: '1em'
        }
    },
    already_account: {
        fontWeight: 600,
        fontSize: '1.4em',
        '& p > a:hover': {
            textDecoration: 'underline'
        }
    },
    form__signup: {
        '& > a': {
            color: 'black',
            fontSize: '1.2em'
        },
        '& > a > button': {
            width: '100%',
            background: '#fff'
        },
        display: 'none'
    },
    nodisplay: {
        display: 'none'
    },
    [theme.breakpoints.up('xl')]: {
        textfield: {
            width: '400px'
        }
    },
    [theme.breakpoints.down('md')]: {
        paper: {
            width: '80vw'
        },
        left__section: {
            display: 'none'
        },
        textfield: {
            width: '60vw'
        },
        form__btn:{
            marginTop: '10px'
        },
        form__sectionMargin: {
            marginBottom: '10px',
            marginTop: '0'
        },
        form__signup: {
            display: 'block',
            textAlign: 'center',
            marginTop: '7px',
            fontWeight: 600
        },
        nodisplay: {
            display: 'grid'
        }
    }
}))

export default useStyles;