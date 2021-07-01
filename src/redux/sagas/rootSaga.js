import loginSaga from "./loginSaga";
import {all} from "@redux-saga/core/effects";
import homeSaga from "./homeSaga";

export default function* rootSaga() {
    yield all([loginSaga(), homeSaga(),])
}