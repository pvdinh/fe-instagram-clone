import {all, takeLatest, call,put} from "@redux-saga/core/effects";
import loginActions from "../actions/loginActions";
import {
    loginAPI,
    registerAPI, validateEmail,
    validatePhone,
    validatePhoneOrEmail,
    validateUsername
} from "../../services/LoginApiService";

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

function* saga_register(action) {
    try {
        const response = yield call(registerAPI, action.payload.data)
        if (response.statusCode === 200) {
            window.location.href = "/login"
        } else {
            window.location.href = "/signup"
        }
    } catch (e) {
        console.log('err', e)
    }
}
function* saga_validatePhone(action) {
    try {
        const response = yield call(validatePhone, action.s)
        yield put({type:loginActions.type.VALIDATE_PHONE_SUCCESS,message:response.data})
    } catch (e) {
        console.log('err', e)
    }
}
function* saga_validateEmail(action) {
    try {
        const response = yield call(validateEmail, action.s)
        yield put({type:loginActions.type.VALIDATE_EMAIL_SUCCESS,message:response.data})
    } catch (e) {
        console.log('err', e)
    }
}


function* saga_validateUsername(action) {
    try {
        const response = yield call(validateUsername, action.s)
        yield put({type:loginActions.type.VALIDATE_USERNAME_SUCCESS,message:response.data})
    } catch (e) {
        console.log('err', e)
    }
}

function* listen() {
    yield takeLatest(loginActions.type.LOGIN, saga_login)
    yield takeLatest(loginActions.type.REGISTER, saga_register)
    yield takeLatest(loginActions.type.LOGIN_FACEBOOK, saga_loginFacebook)
    yield takeLatest(loginActions.type.LOGOUT, saga_logout)
    yield takeLatest(loginActions.type.VALIDATE_PHONE, saga_validatePhone)
    yield takeLatest(loginActions.type.VALIDATE_EMAIL, saga_validateEmail)
    yield takeLatest(loginActions.type.VALIDATE_USERNAME, saga_validateUsername)
}

export default function* loginSaga() {
    yield all([listen()])
}