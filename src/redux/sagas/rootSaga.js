import loginSaga from "./loginSaga";
import {all} from "@redux-saga/core/effects";
import homeSaga from "./homeSaga";
import postSaga from "./postSaga";

export default function* rootSaga() {
    yield all([loginSaga(), homeSaga(),postSaga(),])
}