const OPEN_DIALOGUE = 'OPEN_DIALOGUE'
const SET_MESSAGES = 'SET_MESSAGES'
const SET_RERENDER = 'SET_RERENDER'
const SET_PARTICIPANTS = 'SET_PARTICIPANTS'
const SET_CURRENT_DIALOG = 'SET_CURRENT_DIALOG'
const UPDATE_MESSAGES = 'UPDATE_MESSAGES'
const SET_UPLOAD_LOADING = 'SET_UPLOAD_LOADING'
const SET_UPLOAD_STATUS = 'SET_UPLOAD_STATUS'
const SET_UPLOAD_DATA = 'SET_UPLOAD_DATA'
const SET_CLEAN_UPLOAD_DATA = 'SET_CLEAN_UPLOAD_DATA'
const SET_UPLOAD_FILE_INFO = 'SET_UPLOAD_FILE_INFO'
const SET_CLEAN_UPLOAD_FILE_INFO = 'SET_CLEAN_UPLOAD_FILE_INFO'
const SET_DISPLAY_FILE_INFO = 'SET_DISPLAY_FILE_INFO'

const initialState = {
    isDialogueOpen: false,
    messages: [],
    rerenderDialogs: false,
    participants: [],
    currentDialog: null,
    lastMessage: '',
    upload: {
        loading: false,
        status: 0,
        file: {
            name: null,
            size: null,
            path: null,
            id: null
        },
        data: null,
        displayInfo: false
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
        case(SET_UPLOAD_LOADING): {
            return {
                ...state,
                upload: {
                    ...state.upload,
                    loading: action.payload
                }

            }
        }
        case(SET_UPLOAD_STATUS): {
            return {
                ...state,
                upload: {
                    ...state.upload,
                    status: action.payload
                }
            }
        }
        case(SET_UPLOAD_FILE_INFO): {
            return {
                ...state,
                upload: {
                    ...state.upload,
                    file: action.payload
                }
            }
        }
        case(SET_UPLOAD_DATA): {
            return {
                ...state,
                upload: {
                    ...state.upload,
                    data: {
                        ...action.payload
                    }
                }
            }
        }
        case(SET_CLEAN_UPLOAD_DATA): {
            return {
                ...state,
                upload: {
                    ...state.upload,
                    data: action.payload
                }
            }
        }
        case(SET_CLEAN_UPLOAD_FILE_INFO): {
            return {
                ...state,
                upload: {
                    ...state.upload,
                    file: action.payload
                }
            }
        }
        case(SET_DISPLAY_FILE_INFO): {
            return {
                ...state,
                displayInfo: action.payload
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

export const setUploadLoading = boolean => ({type: SET_UPLOAD_LOADING, payload: boolean})
export const setUploadStatus = percent => ({type: SET_UPLOAD_STATUS, payload: percent})
export const setUploadData = object => ({type: SET_UPLOAD_DATA, payload: object})
export const setCleanUploadData = payload => ({type: SET_CLEAN_UPLOAD_DATA, payload: payload})
export const setUploadFileInfo = object => ({type: SET_UPLOAD_FILE_INFO, payload: object})
export const setCleanUploadFileInfo = object => ({type: SET_CLEAN_UPLOAD_FILE_INFO, payload: object})
export const setDisplayFileInfo = boolean => ({type: SET_DISPLAY_FILE_INFO, payload: boolean})

export default chatReducer;