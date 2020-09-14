import {SET_ACTIVE_ROOM} from "./chatroom-action-types";

const INITIAL_STATE = {
    rooms: [],
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
        default:
            return state;
    }
}

export default chatroomReducer;