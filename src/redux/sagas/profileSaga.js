import {all, takeEvery, call, put} from "@redux-saga/core/effects";
import {editUserAccountSetting, getPrivateInformation, getUserProfile} from "../../services/ProfileApiService";
import profileAction from "../actions/profileAction";

function *getUserProfile_saga(action) {
    try{
        const response= yield call(getUserProfile,action.username)
        yield action.callback(response.data)
        if(response.statusCode === 200){
            yield put({type:profileAction.type.GET_USER_PROFILE_SUCCESS,data:response.data})
        }
        else {
            action.history.replace("/error")
        }
    }catch (e) {
        action.history.replace("/error")
        console.log("err",e)
    }
}
function *editUserAccountSetting_saga(action) {
    try{
        const response= yield call(editUserAccountSetting,action.data)
        yield action.callback(response.message)
        if(response.message == "Username changed. Please login again"){
            localStorage.removeItem("sessionToken")
            let timeOut = setTimeout(()=>{
                window.location.href="/login"
            },2000)
        }
    }catch (e) {
        console.log("err",e)
    }
}

function *getPrivateInformation_saga(action) {
    try{
        const response= yield call(getPrivateInformation)
        yield action.callback(response.data)
    }catch (e) {
        console.log("err",e)
    }
}
function *listen() {
    yield takeEvery(profileAction.type.GET_USER_PROFILE,getUserProfile_saga)
    yield takeEvery(profileAction.type.EDIT_USER_ACCOUNT_SETTING,editUserAccountSetting_saga)
    yield takeEvery(profileAction.type.GET_PRIVATE_INFORMATION,getPrivateInformation_saga)
}
function* profileSaga() {
    yield all([listen()])
}
export default profileSaga