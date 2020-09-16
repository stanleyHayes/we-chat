import {SET_ACTIVE_ROOM, SET_ROOMS} from "./chatroom-action-types";

export const setActiveRoom = roomId => {
    return {
        type: SET_ACTIVE_ROOM,
        payload: {roomId}
    }
}

export const setRooms = rooms => {
    return {
        type: SET_ROOMS,
        payload: {rooms}
    }
}
