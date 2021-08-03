import {all, takeEvery, call, put} from "@redux-saga/core/effects";
import {getUserProfile} from "../../services/ProfileApiService";
import profileAction from "../actions/profileAction";

function *getUserProfile_saga(action) {
    try{
        const response= yield call(getUserProfile,action.username)
        yield action.callback(response.data)
        if(response.statusCode === 200){
            yield put({type:profileAction.type.GET_USER_PROFILE_SUCCESS,data:response.data})
        }
    }catch (e) {
        console.log("err",e)
    }
}
function *listen() {
    yield takeEvery(profileAction.type.GET_USER_PROFILE,getUserProfile_saga)
}
function* profileSaga() {
    yield all([listen()])
}
export default profileSaga