const OPEN_DIALOGUE = 'OPEN_DIALOGUE'
const SET_MESSAGES = 'SET_MESSAGES'
const SET_RERENDER = 'SET_RERENDER'
const SET_PARTICIPANTS = 'SET_PARTICIPANTS'
const SET_CURRENT_DIALOG = 'SET_CURRENT_DIALOG'
const UPDATE_MESSAGES = 'UPDATE_MESSAGES'

const initialState = {
    isDialogueOpen: false,
    messages: [],
    rerenderDialogs: false,
    participants: [],
    currentDialog: null,
    lastMessage: '',
    upload: {
        loading: false
    }
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
        case(UPDATE_MESSAGES): {
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }
        }
        case(SET_RERENDER): {
            return {
                ...state,
                rerenderDialogs: action.payload
            }
        }
        case(SET_PARTICIPANTS): {
            return {
                ...state,
                participants: action.payload
            }
        }
        case(SET_CURRENT_DIALOG): {
            return {
                ...state,
                currentDialog: action.payload
            }
        }


        default: return state;
    }
}

export const setOpen = boolean => ({type: OPEN_DIALOGUE, payload: boolean})
export const setCurrentDialogId = id => ({type: SET_CURRENT_DIALOG, payload: id})
export const setMessages = array => ({type: SET_MESSAGES, payload: array})
export const updateMessages = object => ({type: UPDATE_MESSAGES, payload: object})
export const setReRender = boolean => ({type: SET_RERENDER, payload: boolean})
export const setParticipants = array => ({type: SET_PARTICIPANTS, payload: array}) // Used for sockets

export default chatReducer;