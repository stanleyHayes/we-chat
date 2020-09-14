import React, {createContext, useEffect} from 'react';
import './App.css';
import {Switch, Route, Redirect, useHistory} from "react-router-dom";
import IndexPage from "./pages/home/index-page";
import SignUpPage from "./pages/authentication/sign-up-page";
import SignInPage from "./pages/authentication/sign-in-page";
import ForgotPasswordPage from "./pages/authentication/forgot-password-page";
import ChangePasswordPage from "./pages/authentication/change-password-page";
import ChatPage from "./pages/chat/chat-page";
import io from "socket.io-client";
import {SERVER_URL, TOKEN_KEY} from "./constants/constants";
import {useDispatch} from "react-redux";
import {getLoggedInUser} from "./redux/auth/auth-action-creator";

export const SocketContext = createContext();

function App() {

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        let token = localStorage.getItem(TOKEN_KEY);
        if(!token){
            return <Redirect to="/auth/login"/>
        }
        dispatch(getLoggedInUser(history, token));
    }, [dispatch, history]);

    const socket = io(SERVER_URL);

    return (
        <Switch>
            <SocketContext.Provider value={socket}>
                <Route path="/" exact={true}>
                    <IndexPage/>
                </Route>
                <Route path="/auth/register" exact={true}>
                    <SignUpPage/>
                </Route>
                <Route path="/auth/login" exact={true}>
                    <SignInPage/>
                </Route>
                <Route path="/auth/forgot-password" exact={true}>
                    <ForgotPasswordPage/>
                </Route>
                <Route path="/auth/change-password" exact={true}>
                    <ChangePasswordPage/>
                </Route>
                <Route path="/chat" exact={true}>
                    <ChatPage/>
                </Route>
            </SocketContext.Provider>
        </Switch>
    );
}


export default App;
