import {USER} from "./auth-data";

const INITIAL_STATE = {
    currentUser: USER,
    loading: false,
    error: null,
}

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        default:
            return state;
    }
}

export default authReducer;