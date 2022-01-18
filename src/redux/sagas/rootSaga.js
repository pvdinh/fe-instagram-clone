import loginSaga from "./loginSaga";
import {all} from "@redux-saga/core/effects";
import homeSaga from "./homeSaga";
import postSaga from "./postSaga";
import messageSaga from "./messageSaga";
import profileSaga from "./profileSaga";
import storySaga from "./storySaga";
import exploreSaga from "./exploreSaga";
import activitySaga from "./activitySaga";
import reportSaga from "./reportSaga";
import feedbackSaga from "./feedbackSaga";

export default function* rootSaga() {
    yield all([loginSaga(), homeSaga(), postSaga(), messageSaga(), profileSaga(), storySaga(), exploreSaga(), activitySaga(), reportSaga(), feedbackSaga()])
}