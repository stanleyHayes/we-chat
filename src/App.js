import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import IndexPage from "./pages/home/index-page";
import SignUpPage from "./pages/authentication/sign-up-page";
import SignInPage from "./pages/authentication/sign-in-page";
import ForgotPasswordPage from "./pages/authentication/forgot-password-page";
import ChangePasswordPage from "./pages/authentication/change-password-page";
import ChatPage from "./pages/chat/chat-page";

function App() {
    return (
        <BrowserRouter>
            <Switch>
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
            </Switch>
        </BrowserRouter>
    );
}

export default App;
