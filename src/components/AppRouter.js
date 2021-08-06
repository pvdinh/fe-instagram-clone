import {Route, BrowserRouter as Router, Switch, Redirect} from "react-router-dom";
import React from "react";
import LoginPage from "../screens/LoginPage";
import HomePage from "../screens/HomePage";
import ProtectedRoute from "./ProtectedRoute";
import Layout from "./layout/Layout";
import Oauth2Redirect from "./oauth2Redirect/Oath2Redirect";
import SignupPage from "../screens/SignupPage";
import MessagePage from "../screens/MessagePage";
import ProfilePage from "../screens/ProfilePage";
import ErrorPage from "./errorPage/ErrorPage";
import PostDetailPage from "../screens/PostDetailPage";

function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route path={"/login"} exact render={()=>{
                    return localStorage.getItem("sessionToken") ? <Redirect to={"/"} /> : <LoginPage />
                }}></Route>
                <Route path={"/signup"} exact render={()=>{
                    return localStorage.getItem("sessionToken") ? <Redirect to={"/"} /> : <SignupPage />
                }}></Route>
                <Route path={"/oauth2/redirect/:token"} exact render={(props)=>{
                    return <Oauth2Redirect {...props} />
                }}></Route>
                <Route>
                    <Layout>
                        <Switch>
                            <ProtectedRoute path={"/"} exact render={()=>{return <HomePage />}}></ProtectedRoute>
                            <ProtectedRoute path={"/message"} exact render={()=>{return <MessagePage />}}></ProtectedRoute>
                            <ProtectedRoute path={"/error"} exact render={()=>{return <ErrorPage />}}></ProtectedRoute>
                            <ProtectedRoute path={"/p/:pId"} exact render={()=>{return <PostDetailPage />}}></ProtectedRoute>
                            <ProtectedRoute path={"/:username"} exact render={(props)=>{return <ProfilePage {...props} />}}></ProtectedRoute>
                        </Switch>
                    </Layout>
                </Route>
            </Switch>
        </Router>
    )
}
export default AppRouter