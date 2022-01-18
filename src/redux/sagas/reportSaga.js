import {all, takeEvery, call, put,takeLatest} from "@redux-saga/core/effects";
import reportActions from "../actions/reportActions";
import {reportPost} from "../../services/ReportService";

function *reportPost_saga(action) {
    try {
        const  response = yield call(reportPost,action.data)
        yield action.callback(response)
    }catch (e) {
        console.log("err",e)
    }
}

function *listen() {
    yield takeEvery(reportActions.type.REPORT_POST,reportPost_saga)
}
function *reportSaga() {
    yield all([listen()])
}
export default reportSaga