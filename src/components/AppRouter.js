import {Route, BrowserRouter as Router, Switch, Redirect} from "react-router-dom";
import React from "react";
import LoginPage from "../screens/LoginPage";
import HomePage from "../screens/HomePage";
import ProtectedRoute from "./ProtectedRoute";
import Layout from "./layout/Layout";
import Oauth2Redirect from "./oauth2Redirect/Oath2Redirect";

function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route path={"/login"} exact render={()=>{
                    return localStorage.getItem("sessionToken") ? <Redirect to={"/"} /> : <LoginPage />
                }}></Route>
                <Route path={"/oauth2/redirect/:token"} exact render={(props)=>{
                    return <Oauth2Redirect {...props} />
                }}></Route>
                <Route>
                    <Layout>
                        <Switch>
                            <ProtectedRoute path={"/"} exact render={()=>{return <HomePage />}}></ProtectedRoute>
                        </Switch>
                    </Layout>
                </Route>
            </Switch>
        </Router>
    )
}
export default AppRouter