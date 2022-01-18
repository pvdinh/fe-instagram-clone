import {all, takeEvery, call, put,takeLatest} from "@redux-saga/core/effects";
import feedbackActions from "../actions/feedbackActions";
import {sendFeedback} from "../../services/FeedbackService";

function *sendFeedback_saga(action) {
    try {
        const response = yield call(sendFeedback,action.data)
        yield action.callback(response)
    }catch (e) {
        console.log("err",e)
    }
}

function *listen() {
    yield takeEvery(feedbackActions.type.SEND_FEEDBACK,sendFeedback_saga)
}
function *feedbackSaga() {
    yield all([listen()])
}
export default feedbackSaga