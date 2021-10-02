import {all, takeEvery, call, put,takeLatest} from "@redux-saga/core/effects";
import StoryAction from "../actions/StoryAction";
import {beginStory, getAllStoryFollowing} from "../../services/StoryApiService";

function *getAllStoryFollowing_saga(action) {
    try {
        const response = yield call(getAllStoryFollowing)
        yield put({type:StoryAction.type.GET_ALL_STORY_FOLLOWING_SUCCESS,data:response.data})
        yield action.callback(response.data)
    }catch (e) {
        console.log("err",e)
    }
}
function *beginStory_saga(action) {
    try {
        const response = yield call(beginStory,action.data)
    }catch (e) {
        console.log("err",e)
    }
}
function *endStory_saga(action) {
    try {

    }catch (e) {
        console.log("err",e)
    }
}

function *setCurrentDisplayStory_saga(action) {
    try {
        yield put({type:StoryAction.type.SET_CURRENT_DISPLAY_STORY_SUCCESS,data:action.data})
    }catch (e) {
        console.log("err",e)
    }
}

function *listen() {
    yield takeLatest(StoryAction.type.GET_ALL_STORY_FOLLOWING,getAllStoryFollowing_saga)
    yield takeEvery(StoryAction.type.BEGIN_STORY,beginStory_saga)
    yield takeEvery(StoryAction.type.END_STORY,endStory_saga)
    yield takeEvery(StoryAction.type.SET_CURRENT_DISPLAY_STORY,setCurrentDisplayStory_saga)
}
function *storySaga() {
    yield all([listen()])
}
export default storySaga