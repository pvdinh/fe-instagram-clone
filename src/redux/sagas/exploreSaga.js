import {all, takeEvery, call, put,takeLatest} from "@redux-saga/core/effects";
import exploreActions from "../actions/exploreActions";
import {getExplorePosts} from "../../services/ExploreApiServices";

function *getExplorePosts_saga(action) {
    try {
        const response = yield call(getExplorePosts,action.payload)
        if(response.statusCode === 200){
            yield put({type:exploreActions.type.GET_EXPLORE_POSTS_SUCCESS,data:response.data})
        }
    }catch (e) {
        console.log("err",e)
    }
}
function *fetchExplorePosts_saga(action) {
    try {
        const response = yield call(getExplorePosts,action.payload)
        if(response.statusCode === 200){
            yield put({type:exploreActions.type.FETCH_EXPLORE_POSTS_SUCCESS,data:response.data})
        }
    }catch (e) {
        console.log("err",e)
    }
}

function *listen() {
    yield takeEvery(exploreActions.type.GET_EXPLORE_POSTS,getExplorePosts_saga)
    yield takeEvery(exploreActions.type.FETCH_EXPLORE_POSTS,fetchExplorePosts_saga)
}
function *exploreSaga() {
    yield all([listen()])
}
export default exploreSaga