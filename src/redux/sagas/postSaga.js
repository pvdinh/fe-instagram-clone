import {all, takeEvery, call, put} from "@redux-saga/core/effects";
import postActions from "../actions/postActions";
import {
    commentPost,
    getAllPostInformationFollowing,
    getCommentPost,
    likePost, postImageToCloudinary, postNewPost,
    unLikePost
} from "../../services/PostApiService";

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
function *saga_commentPost(action) {
    try{
        const response = yield call(commentPost,action.payload.data)
        action.callback(response.data)
    }catch (e) {
        console.log("err",e)
    }
}
function *saga_getCommentPost(action) {
    try{
        const response = yield call(getCommentPost,action.id)
        action.callback(response.data)
    }catch (e) {
        console.log("err",e)
    }
}
function *saga_postNewPost(action) {
    try{
        const res = yield call(postNewPost,action.payload.data)
        const response = yield call(getAllPostInformationFollowing)
        yield put({type:postActions.type.GET_ALL_POST_OF_FOLLOWING_SUCCESS,data:response.data})
    }catch (e) {
        console.log("err",e)
    }
}
function *saga_postImageToCloudinary(action) {
    try{
        const response = yield call(postImageToCloudinary,action.payload.data)
        action.callback(response.data)
    }catch (e) {
        console.log("err",e)
    }
}

function* listen() {
    yield takeEvery(postActions.type.GET_ALL_POST_OF_FOLLOWING, saga_getAllPostOfFollowing)
    yield takeEvery(postActions.type.LIKE_POST, saga_likePost)
    yield takeEvery(postActions.type.UNLIKE_POST, saga_unLikePost)
    yield takeEvery(postActions.type.COMMENT_POST, saga_commentPost)
    yield takeEvery(postActions.type.GET_COMMENT_POST, saga_getCommentPost)
    yield takeEvery(postActions.type.POST_NEW_POST, saga_postNewPost)
    yield takeEvery(postActions.type.POST_IMAGE_TO_CLOUDINARY, saga_postImageToCloudinary)
}

function* postSaga() {
    yield all([listen()])
}

export default postSaga