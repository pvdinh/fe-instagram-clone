import {Route, BrowserRouter as Router, Switch, Redirect} from "react-router-dom";
import React from "react";
import LoginPage from "../screens/LoginPage";
import HomePage from "../screens/HomePage";
import ProtectedRoute from "./ProtectedRoute";
import Layout from "./layout/Layout";

function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route path={"/login"} exact render={()=>{
                    return localStorage.getItem("sessionToken") ? <Redirect to={"/"} /> : <LoginPage />
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