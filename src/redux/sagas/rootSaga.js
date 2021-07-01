import loginSaga from "./loginSaga";
import {all} from "@redux-saga/core/effects";

export default function* rootSaga() {
    yield all([loginSaga()])
}