import {makeStyles} from "@material-ui/core";
import back from "../../assets/images/123.jpg";

const useStyles = makeStyles(theme => ({
    root: {
        background: '#86F0D3',
        padding: '100px 0',
        height: '100vh'
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
        borderRadius: '23px'
    },
    right__section: {
        display: 'flex',
        justifyContent: 'center',
        // padding: '10vw 0'
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
            marginLeft: '5px'
        },
        '& .form__section-signin':{
            width: '100%',
            color: '#fff',
            background: 'linear-gradient(270deg, rgb(31, 199, 152), rgb(22, 158, 122))'
        },
    },
    form__section_parent: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        alignItems: 'center',
        alignSelf: 'center',
        textAlign: 'center'

    },
    form__sectionMargin: {
        margin: '25px 0 40px 0'
    },
    form__section_devider: {
        display: 'inline-block',
        width: '70px',
        height: '1px',
        background: '#e3e3e3',

    }
}))

export default useStyles;