const SET_MESSAGE = 'SET_MESSAGE'
const SET_USER = 'SET_USER'
const SET_AUTH = 'SET_AUTH'
const SET_LOADER = 'SET_LOADER'

const initialState = {
    auth: false,
    info: {},
    message: '',
    loader: false

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
                auth: action.payload,
                loader: false
            }
        case(SET_USER):
            return {
                ...state,
                auth: true,
                info: action.payload.user,
                message: action.payload.message,
                loader: true
            }
        default: return state;
    }
}

export const setMessage = message => ({type: SET_MESSAGE , payload: message})
export const setAuth = boolean => ({type: SET_AUTH , payload: boolean}) //Using only for logout
export const setUser = payload => ({type: SET_USER, payload: payload})
export const setLoader = boolean => ({type: SET_LOADER, payload: boolean}) // Using only for loader


export default userReducer;



