import {all, takeEvery, call, put} from "@redux-saga/core/effects";
import postActions from "../actions/postActions";
import {getAllPostInformationFollowing, likePost, unLikePost} from "../../services/PostApiService";

function* saga_getAllPostOfFollowing() {
    try {
        const response = yield call(getAllPostInformationFollowing)
        yield put({type:postActions.type.GET_ALL_POST_OF_FOLLOWING_SUCCESS,data:response.data})
    } catch (e) {
        console.log("err", e)
    }
}
function* saga_unLikePost(action) {
    try {
        const res = yield call(unLikePost,action.id)
        const response = yield call(getAllPostInformationFollowing)
        yield put({type:postActions.type.GET_ALL_POST_OF_FOLLOWING_SUCCESS,data:response.data})
    } catch (e) {
        console.log("err", e)
    }
}
function* saga_likePost(action) {
    try {
        const res = yield call(likePost,action.id)
        const response = yield call(getAllPostInformationFollowing)
        yield put({type:postActions.type.GET_ALL_POST_OF_FOLLOWING_SUCCESS,data:response.data})
    } catch (e) {
        console.log("err", e)
    }
}

function* listen() {
    yield takeEvery(postActions.type.GET_ALL_POST_OF_FOLLOWING, saga_getAllPostOfFollowing)
    yield takeEvery(postActions.type.LIKE_POST, saga_likePost)
    yield takeEvery(postActions.type.UNLIKE_POST, saga_unLikePost)
}

function* postSaga() {
    yield all([listen()])
}

export default postSaga