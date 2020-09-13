import {combineReducers} from "redux";
import chatroomReducer from "./chatroom/chatroom-reducer";
import authReducer from "./auth/auth-reducer";
import messagesReducer from "./messages/messages-reducer";

const rootReducer = combineReducers({
    rooms: chatroomReducer,
    auth: authReducer,
    messages: messagesReducer
});

export default rootReducer;