import {all, takeEvery, call, put,takeLatest} from "@redux-saga/core/effects";
import comment from "../actions/comment";
import {
    getAllReplyComment,
    getListIdUserLikedComment,
    getUserAccountSettingLikedCommentPost,
    likeComment, likeReplyComment,
    unLikeComment, unLikeReplyComment
} from "../../services/CommentService";

function *getListIdUserLikedComment_saga(action) {
    try {
         const response = yield call(getListIdUserLikedComment,action.id)
        if(response.statusCode === 200){
            yield action.callback(response.data)
        }
    }catch (e) {
        console.log("err",e)
    }
}
function *getAllReplyComment_saga(action) {
    try {
         const response = yield call(getAllReplyComment,action.id)
        if(response.statusCode === 200){
            yield action.callback(response.data)
        }
    }catch (e) {
        console.log("err",e)
    }
}
function* saga_unLikeComment(action) {
    try {
        const res = yield call(unLikeComment,action.id)
        yield action.callback(res)
    } catch (e) {
        console.log("err", e)
    }
}
function* saga_likeComment(action) {
    try {
        const res = yield call(likeComment,action.id)
        yield action.callback(res)
    } catch (e) {
        console.log("err", e)
    }
}
function* saga_unLikeReplyComment(action) {
    try {
        const res = yield call(unLikeReplyComment,action.id)
        yield action.callback(res)
    } catch (e) {
        console.log("err", e)
    }
}
function* saga_likeReplyComment(action) {
    try {
        console.log(action,"XXXXXXXXXXXXXXXXXXXXXXX")
        const res = yield call(likeReplyComment,action.id)
        yield action.callback(res)
    } catch (e) {
        console.log("err", e)
    }
}

function *saga_getUserAccountSettingLikedCommentPost(action) {
    try{
        const res= yield call(getUserAccountSettingLikedCommentPost,{idComment:action.id,page:action.payload.page,size:action.payload.size})
        yield put({type:comment.type.GET_USER_ACCOUNT_SETTING_LIKED_COMMENT_POST_SUCCESS,data:res.data})
    }catch (e) {
        console.log("err",e)
    }
}

function* listen() {
    yield takeEvery(comment.type.GET_LIST_ID_USER_LIKED_COMMENT,getListIdUserLikedComment_saga)
    yield takeEvery(comment.type.GET_ALL_REPLY_COMMENT,getAllReplyComment_saga)
    yield takeEvery(comment.type.LIKE_COMMENT, saga_likeComment)
    yield takeEvery(comment.type.UNLIKE_COMMENT, saga_unLikeComment)
    yield takeEvery(comment.type.LIKE_REPLY_COMMENT, saga_likeReplyComment)
    yield takeEvery(comment.type.UNLIKE_REPLY_COMMENT, saga_unLikeReplyComment)
    yield takeEvery(comment.type.GET_USER_ACCOUNT_SETTING_LIKED_COMMENT_POST, saga_getUserAccountSettingLikedCommentPost)
}

function *commentSaga() {
    yield all([listen()])
}
export default commentSaga