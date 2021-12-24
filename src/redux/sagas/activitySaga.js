import {all, takeEvery, call, put,takeLatest} from "@redux-saga/core/effects";
import activityActions from "../actions/activityActions";
import {getAllActivity, updateStatusActivity} from "../../services/ActivityService";

function *getAllActivity_saga(action) {
    try {
         const response = yield call(getAllActivity,action.payload)
        if(response.statusCode === 200){
            yield put({type:activityActions.type.GET_ALL_ACTIVITY_SUCCESS,data:response.data})
        }
    }catch (e) {
        console.log("err",e)
    }
}


function *updateStatusActivity_saga(action) {
    try {
         const response = yield call(updateStatusActivity,action.data)
        if(response.statusCode === 200){
            yield action.callback(response.data)
        }
    }catch (e) {
        console.log("err",e)
    }
}

function* listen() {
    yield takeEvery(activityActions.type.GET_ALL_ACTIVITY,getAllActivity_saga)
    yield takeEvery(activityActions.type.UPDATE_STATUS_ACTIVITY,updateStatusActivity_saga)
}

function *activitySaga() {
    yield all([listen()])
}
export default activitySaga