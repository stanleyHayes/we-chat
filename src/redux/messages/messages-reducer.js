import {MESSAGES} from "./messages-data";
import {ADD_MESSAGE, SET_CHAT_MESSAGES} from "./messages-action-types";

const INITIAL_STATE = {
    messages: [],
    loading: false,
    error: null
}

const messagesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case SET_CHAT_MESSAGES:
            return {
                ...state,
                messages: action.payload.messages
            }

        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.payload.message]
            }
        default:
            return state;
    }
}

export default messagesReducer;