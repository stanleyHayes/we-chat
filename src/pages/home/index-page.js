import React, {useEffect} from "react";
import {Redirect, useHistory} from "react-router-dom";
import {connect, useDispatch} from "react-redux";
import {TOKEN_KEY} from "../../constants/constants";
import {getLoggedInUser} from "../../redux/auth/auth-action-creator";

const IndexPage = ({currentUser, loading}) => {

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        let token = localStorage.getItem(TOKEN_KEY);
        console.log(token)
        if(!token){
            return <Redirect to="/auth/login"/>
        }
        dispatch(getLoggedInUser(history, token));
    }, [dispatch, history]);

    return null;
}

const mapStateToProps = state => {
    return {
        currentUser: state.auth.currentUser,
        loading: state.auth.loading,
        token: state.auth.token
    }
}

export default connect(mapStateToProps)(IndexPage) ;