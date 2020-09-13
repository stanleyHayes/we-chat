import {JOIN_ROOM_FAILURE, JOIN_ROOM_REQUEST, JOIN_ROOM_SUCCESS, SET_ACTIVE_ROOM} from "./chatroom-action-types";

export const setActiveRoom = roomId => {
    return {
        type: SET_ACTIVE_ROOM,
        payload: {roomId}
    }
}
