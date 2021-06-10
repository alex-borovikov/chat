const SET_MESSAGE = 'SET_MESSAGE'

const initialState = {
    auth: false,
    user: {},
    message: '404 - Error',

};

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case (SET_MESSAGE):
            return {
                ...state,
                message: action.payload
            }
        default: return state;
    }
}

export const setMessage = message => ({type: SET_MESSAGE , payload: message})


export default userReducer;


