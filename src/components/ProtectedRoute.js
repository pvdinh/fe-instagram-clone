import {Redirect, Route} from "react-router";
import React from "react";
import HomePage from "../screens/HomePage";

const ProtectedRoute = (props) => {
    return (
        localStorage.getItem("sessionToken") ? <Route {...props}/> : <Redirect to={"/login"}/>
    )
}
export default ProtectedRoute