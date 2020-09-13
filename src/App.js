import React, {createContext} from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom";
import IndexPage from "./pages/home/index-page";
import SignUpPage from "./pages/authentication/sign-up-page";
import SignInPage from "./pages/authentication/sign-in-page";
import ForgotPasswordPage from "./pages/authentication/forgot-password-page";
import ChangePasswordPage from "./pages/authentication/change-password-page";
import ChatPage from "./pages/chat/chat-page";
import io from "socket.io-client";
import {SERVER_URL} from "./constants/constants";

export const SocketContext = createContext();

function App({token, currentUser, loading}) {

    const socket = io(SERVER_URL, {
        query: {
            token,
            currentUser
        }
    });

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
