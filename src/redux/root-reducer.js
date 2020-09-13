import {combineReducers} from "redux";
import chatroomReducer from "./chatroom/chatroom-reducer";

const rootReducer = combineReducers({
    rooms: chatroomReducer
});

export default rootReducer;