import {all, takeEvery, call, put} from "@redux-saga/core/effects";
import postActions from "../actions/postActions";
import {
    beginSavePost, changePrivacyPost,
    checkSavedPost,
    commentPost,
    deletePost,
    endSavePost,
    getAllPostInformationFollowing,
    getCommentPost,
    getPostInformationFromPId,
    getTop1Comment,
    getTop1Like,
    getTop1Popular,
    getTop1Save,
    getUserAccountSettingLikedPost,
    likePost,
    postImageToCloudinary,
    postNewPost,
    unLikePost
} from "../../services/PostApiService";
import {getUserProfile} from "../../services/ProfileApiService";

function* saga_getAllPostOfFollowing(action) {
    try {
        const response = yield call(getAllPostInformationFollowing,action.payload)
        yield put({type:postActions.type.GET_ALL_POST_OF_FOLLOWING_SUCCESS,data:response.data})
    } catch (e) {
        console.log("err", e)
    }
}
function* saga_fetchAllPostOfFollowing(action) {
    try {
        const response = yield call(getAllPostInformationFollowing,{page:0,size:9+(9*action.currentPage)})
        yield put({type:postActions.type.FETCH_ALL_POST_OF_FOLLOWING_SUCCESS,data:response.data})
    } catch (e) {
        console.log("err", e)
    }
}
function* saga_unLikePost(action) {
    try {
        const res = yield call(unLikePost,action.id)
        const response = yield call(getAllPostInformationFollowing,{page:0,size:9+(9*action.currentPage)})
        yield put({type:postActions.type.FETCH_ALL_POST_OF_FOLLOWING_SUCCESS,data:response.data})
    } catch (e) {
        console.log("err", e)
    }
}
function* saga_likePost(action) {
    try {
        const res = yield call(likePost,action.id)
        const response = yield call(getAllPostInformationFollowing,{page:0,size:9+(9*action.currentPage)})
        yield put({type:postActions.type.FETCH_ALL_POST_OF_FOLLOWING_SUCCESS,data:response.data})
    } catch (e) {
        console.log("err", e)
    }
}
function* saga_unlikePostInPostDetail(action) {
    try {
        const res = yield call(unLikePost,action.id)
    } catch (e) {
        console.log("err", e)
    }
}
function* saga_likePostInPostDetail(action) {
    try {
        const res = yield call(likePost,action.id)
    } catch (e) {
        console.log("err", e)
    }
}
function *saga_commentPost(action) {
    try{
        const response = yield call(commentPost,action.payload.data)
        yield action.callback(response.data)
    }catch (e) {
        console.log("err",e)
    }
}
function *saga_getCommentPost(action) {
    try{
        const response = yield call(getCommentPost,action.id)
        yield action.callback(response.data)
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
        yield action.callback(response.data)
    }catch (e) {
        console.log("err",e)
    }
}
function *saga_getPostInformationFromPId(action) {
    try{
        const response = yield call(getPostInformationFromPId,action.id)
         yield action.callback(response.data)
    }catch (e) {
        console.log("err",e)
    }
}
function *saga_deletePost(action) {
    try{
        const res= yield call(deletePost,action.id)
        const response = yield call(getAllPostInformationFollowing)
        yield put({type:postActions.type.GET_ALL_POST_OF_FOLLOWING_SUCCESS,data:response.data})
    }catch (e) {
        console.log("err",e)
    }
}

function *saga_checkSavedPost(action) {
    try{
        const res= yield call(checkSavedPost,action.id)
        yield action.callback(res.data)
    }catch (e) {
        console.log("err",e)
    }
}
function *saga_beginSavePost(action) {
    try{
        const res= yield call(beginSavePost,action.id)
        if(res.statusCode === 200){
            yield action.callback(res.data)
        }
    }catch (e) {
        console.log("err",e)
    }
}
function *saga_endSavePost(action) {
    try{
        const res= yield call(endSavePost,action.id)
        if(res.statusCode === 200) {
            yield action.callback(res.data)
        }
    }catch (e) {
        console.log("err",e)
    }
}

function *saga_getUserAccountSettingLikedPost(action) {
    try{
        const res= yield call(getUserAccountSettingLikedPost,{pId:action.id,page:action.payload.page,size:action.payload.size})
        yield put({type:postActions.type.GET_USER_ACCOUNT_SETTING_LIKED_POST_SUCCESS,data:res.data})
    }catch (e) {
        console.log("err",e)
    }
}

function *saga_getTop1Save(action) {
    try{
        const res= yield call(getTop1Save)
        if(res.statusCode === 200) {
            yield action.callback(res.data)
        }
    }catch (e) {
        console.log("err",e)
    }
}

function *saga_getTop1Like(action) {
    try{
        const res= yield call(getTop1Like)
        if(res.statusCode === 200) {
            yield action.callback(res.data)
        }
    }catch (e) {
        console.log("err",e)
    }
}

function *saga_getTop1Comment(action) {
    try{
        const res= yield call(getTop1Comment)
        if(res.statusCode === 200) {
            yield action.callback(res.data)
        }
    }catch (e) {
        console.log("err",e)
    }
}

function *saga_getTop1Popular(action) {
    try{
        const res= yield call(getTop1Popular)
        if(res.statusCode === 200) {
            yield action.callback(res.data)
        }
    }catch (e) {
        console.log("err",e)
    }
}

function *saga_changePrivacyPost(action) {
    try{
        const res= yield call(changePrivacyPost,action.payload.data)
        if(res.statusCode === 200) {
            yield action.callback(res.data)
        }
    }catch (e) {
        console.log("err",e)
    }
}

function* listen() {
    yield takeEvery(postActions.type.GET_ALL_POST_OF_FOLLOWING, saga_getAllPostOfFollowing)
    yield takeEvery(postActions.type.FETCH_ALL_POST_OF_FOLLOWING, saga_fetchAllPostOfFollowing)
    yield takeEvery(postActions.type.LIKE_POST, saga_likePost)
    yield takeEvery(postActions.type.LIKE_POST_IN_POST_DETAIL, saga_likePostInPostDetail)
    yield takeEvery(postActions.type.UNLIKE_POST_IN_POST_DETAIL, saga_unlikePostInPostDetail)
    yield takeEvery(postActions.type.UNLIKE_POST, saga_unLikePost)
    yield takeEvery(postActions.type.COMMENT_POST, saga_commentPost)
    yield takeEvery(postActions.type.GET_COMMENT_POST, saga_getCommentPost)
    yield takeEvery(postActions.type.POST_NEW_POST, saga_postNewPost)
    yield takeEvery(postActions.type.POST_IMAGE_TO_CLOUDINARY, saga_postImageToCloudinary)
    yield takeEvery(postActions.type.GET_POST_INFORMATION_FROM_P_ID, saga_getPostInformationFromPId)
    yield takeEvery(postActions.type.DELETE_POST, saga_deletePost)
    yield takeEvery(postActions.type.CHECK_SAVED_POST, saga_checkSavedPost)
    yield takeEvery(postActions.type.BEGIN_SAVE_POST, saga_beginSavePost)
    yield takeEvery(postActions.type.END_SAVE_POST, saga_endSavePost)
    yield takeEvery(postActions.type.GET_USER_ACCOUNT_SETTING_LIKED_POST, saga_getUserAccountSettingLikedPost)
    yield takeEvery(postActions.type.GET_TOP_1_LIKE, saga_getTop1Like)
    yield takeEvery(postActions.type.GET_TOP_1_COMMENT, saga_getTop1Comment)
    yield takeEvery(postActions.type.GET_TOP_1_POPULAR, saga_getTop1Popular)
    yield takeEvery(postActions.type.GET_TOP_1_SAVE, saga_getTop1Save)
    yield takeEvery(postActions.type.CHANGE_PRIVACY_POST, saga_changePrivacyPost)
}

function* postSaga() {
    yield all([listen()])
}

export default postSaga