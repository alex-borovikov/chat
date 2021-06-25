const OPEN_DIALOGUE = 'OPEN_DIALOGUE'
const SET_MESSAGES = 'SET_MESSAGES'
const SET_RERENDER = 'SET_RERENDER'

const initialState = {
    isDialogueOpen: false,
    messages: null,
    rerenderDialogs: false
}

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case(OPEN_DIALOGUE): {
            return {
                ...state,
                isDialogueOpen: action.payload
            }
        }
        case(SET_MESSAGES): {
            return {
                ...state,
                messages: action.payload
            }
        }
        case(SET_RERENDER): {
            return {
                ...state,
                rerenderDialogs: action.payload
            }
        }
        default: return state;
    }
}

export const setOpen = boolean => ({type: OPEN_DIALOGUE, payload: boolean})
export const setMessages = array => ({type: SET_MESSAGES, payload: array})
export const setReRender = boolean => ({type: SET_RERENDER, payload: boolean})

export default chatReducer;