import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import React from "react";
import LoginPage from "../screens/LoginPage";
import HomePage from "../screens/HomePage";

function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route path={"/login"} exact render={()=>{return <LoginPage />}}></Route>
                <Route path={""} exact render={()=>{return <HomePage />}}></Route>
            </Switch>
        </Router>
    )
}
export default AppRouter