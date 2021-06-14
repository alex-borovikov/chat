const SET_MESSAGE = 'SET_MESSAGE'
const SET_USER = 'SET_USER'
const SET_AUTH = 'SET_AUTH'

const initialState = {
    auth: false,
    info: {},
    message: '404 - Error',
    loader: false,

};

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case (SET_MESSAGE):
            return {
                ...state,
                message: action.payload
            }
        case(SET_AUTH):
            return {
                ...state,
                message: 'Вы авторизировались!',
                auth: action.payload.auth,
                info: action.payload.user,
                loader: false
            }
        case(SET_USER):
            return {
                ...state,
                auth: true,
                info: action.payload.user,
                message: action.payload.message,
                loader: false
            }
        default: return state;
    }
}

export const setMessage = message => ({type: SET_MESSAGE , payload: message})
export const setAuth = boolean => ({type: SET_AUTH , payload: boolean})
export const setUser = payload => ({type: SET_USER, payload: payload})


export default userReducer;



