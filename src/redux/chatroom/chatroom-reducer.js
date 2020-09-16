import {SET_ACTIVE_ROOM, SET_ROOMS} from "./chatroom-action-types";
import {ROOMS} from "./chatroom-data";

const INITIAL_STATE = {
    rooms: ROOMS,
    loading: false,
    error: null,
    activeRoom: null
}

const chatroomReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case SET_ACTIVE_ROOM:
            return {
                ...state,
                activeRoom: action.payload.roomId
            }

        case SET_ROOMS:
            return {
                ...state,
                rooms: action.payload.rooms
            }
        default:
            return state;
    }
}

export default chatroomReducer;