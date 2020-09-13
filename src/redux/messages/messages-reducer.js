import {MESSAGES} from "./messages-data";

const INITIAL_STATE = {
    messages: MESSAGES,
    loading: false,
    error: null
}

const messagesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){

        default:
            return state;
    }
}

export default messagesReducer;