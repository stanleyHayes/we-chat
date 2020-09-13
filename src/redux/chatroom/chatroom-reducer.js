import {ROOMS} from "./chatroom-data";

const INITIAL_STATE = {
    rooms: ROOMS,
    loading: false,
    error: null,
    activeRoom: null
}

const chatroomReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        default:
            return state;
    }
}

export default chatroomReducer;