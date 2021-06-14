const SET_MESSAGE = 'SET_MESSAGE'
const SET_USER = 'SET_USER'
const SET_AUTH = 'SET_AUTH'

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
        case(SET_USER):
            return {
                ...state,
                auth: true,
                info: action.payload.user,
                message: action.payload.message
            }
        default: return state;
    }
}

export const setMessage = message => ({type: SET_MESSAGE , payload: message})
export const setAuth = user => ({type: SET_AUTH , payload: {auth: user.auth, user: user.info}})
export const setUser = payload => ({type: SET_USER, payload: payload})


export default userReducer;



