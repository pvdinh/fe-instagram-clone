import loginSaga from "./loginSaga";
import {all} from "@redux-saga/core/effects";
import homeSaga from "./homeSaga";
import postSaga from "./postSaga";
import messageSaga from "./messageSaga";
import profileSaga from "./profileSaga";

export default function* rootSaga() {
    yield all([loginSaga(), homeSaga(),postSaga(),messageSaga(),profileSaga(),])
}