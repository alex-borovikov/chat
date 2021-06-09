const SET_MESSAGE = 'SET_MESSAGE'

const initialState = {
    auth: false,
    user: {},
    message: ''
};

const userReducer = (state = initialState, action) => {
    switch(action.type){

        default: return state;
    }
}

export const setMessage = message => ({type: SET_MESSAGE , payload: message})



export default userReducer;
