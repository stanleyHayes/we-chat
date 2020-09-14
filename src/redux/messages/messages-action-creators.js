import {SET_ACTIVE_ROOM} from "../chatroom/chatroom-action-types";
import {ADD_MESSAGE} from "./messages-action-types";

export const setChatMessages = messages => {
    return {
        type: SET_ACTIVE_ROOM,
        payload: {messages}
    }
}

export const addMessages = message => {
    return {
        type: ADD_MESSAGE,
        payload: {message}
    }
}