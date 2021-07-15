import LoginPage from "../../screens/LoginPage";
import React, {useEffect} from "react";
import {Redirect} from "react-router";
import {connect} from "react-redux";
import loginActions from "../../redux/actions/loginActions";
import LoadingPage from "../loadingPage/LoadingPage";

function Oauth2Redirect(props) {
    useEffect(() => {
        props.loginFacebook(props.match.params.token)
    },[])
    return (
        localStorage.getItem("sessionToken") ? <LoadingPage /> : <LoginPage/>
    )
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        loginFacebook: (token) => {
            dispatch(loginActions.action.loginFacebook(token))
        },
    }
}

export default connect(mapDispatchToProps, mapDispatchToProps)(Oauth2Redirect)