import {Redirect, Route} from "react-router";
import React from "react";
import HomePage from "../screens/HomePage";
import {verifyToken} from "./AuthVerify";

const ProtectedRoute = (props) => {
    return (
        verifyToken(localStorage.getItem("sessionToken")) ? <Route {...props}/> : <Redirect to={"/login"}/>
    )
}
export default ProtectedRoute