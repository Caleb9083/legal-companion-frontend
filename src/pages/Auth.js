import React from "react";
import "./styles/LoginPage.css";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";

const Auth = () => {
    return (
        <div className="login_container">
            <LoginPage />
            <SignUpPage />
        </div>
    );
};

export default Auth;
