import {all, takeLatest, call} from "@redux-saga/core/effects";
import loginActions from "../actions/loginActions";
import {loginAPI} from "../../services/LoginApiService";

function* saga_login(action) {
    try {
        const response = yield call(loginAPI, action.payload)
        if (response.statusCode === 200) {
            localStorage.setItem("sessionToken", response.data.authorization)
            window.location.href = "/"
        } else {
            window.location.href = "/login"
        }
    } catch (e) {
        console.log('err', e)
    }
}

function* saga_loginFacebook(action) {
    try {
        localStorage.setItem("sessionToken", action.token)
        window.location.href = "/"
    } catch (e) {
        console.log('err', e)
    }
}

function* saga_logout() {
    try {
        localStorage.removeItem("sessionToken")
        window.location.href = "/login"
    } catch (e) {
        console.log('err', e)
    }
}

function* listen() {
    yield takeLatest(loginActions.type.LOGIN, saga_login)
    yield takeLatest(loginActions.type.LOGIN_FACEBOOK, saga_loginFacebook)
    yield takeLatest(loginActions.type.LOGOUT, saga_logout)
}

export default function* loginSaga() {
    yield all([listen()])
}