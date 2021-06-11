const SET_MESSAGE = 'SET_MESSAGE'
const SET_GOOGLE_AUTH = 'SET_GOOGLE_AUTH'

const initialState = {
    auth: false,
    info: {},
    message: '404 - Error',

};

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case (SET_MESSAGE):
            return {
                ...state,
                message: action.payload
            }
        case(SET_GOOGLE_AUTH):
            return {
                ...state,
                message: 'Вы авторизировались!',
                auth: action.payload.auth,
                info: action.payload.user
            }
        default: return state;
    }
}

export const setMessage = message => ({type: SET_MESSAGE , payload: message})
export const setGoogleAuth = user => ({type: SET_GOOGLE_AUTH , payload: {auth: user.auth, user: user.info}})


export default userReducer;


