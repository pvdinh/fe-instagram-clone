import {all, takeEvery, call, put} from "@redux-saga/core/effects";
import postActions from "../actions/postActions";
import {getAllPostInformationFollowing} from "../../services/PostApiService";

function* saga_getAllPostOfFollowing() {
    try {
        const response = yield call(getAllPostInformationFollowing)
        yield put({type:postActions.type.GET_ALL_POST_OF_FOLLOWING_SUCCESS,data:response.data})
    } catch (e) {
        console.log("err", e)
    }
}

function* listen() {
    yield takeEvery(postActions.type.GET_ALL_POST_OF_FOLLOWING, saga_getAllPostOfFollowing)
}

function* postSaga() {
    yield all([listen()])
}

export default postSaga