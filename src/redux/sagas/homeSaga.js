import {all, takeEvery, call, put} from "@redux-saga/core/effects";
import homeActions from "../actions/homeActions";
import {
    beginFollowing,
    endFollowing, getHistorySearchUser,
    getSuggestionsToFollow,
    getUserAccountProfile, removeFollowing, saveUserHistory
} from "../../services/HomeApiService";
import profileAction from "../actions/profileAction";

function* saga_getUserAccountProfile(action) {
    try {
        const response = yield call(getUserAccountProfile)
        yield put({type: homeActions.type.GET_USER_ACCOUNT_PROFILE_SUCCESS, data: response.data})
        yield action.callback(response.data)
    } catch (e) {
        console.log('err', e)
    }
}
function* saga_getSuggestionsToFollow() {
    try {
        const response = yield call(getSuggestionsToFollow)
        yield put({type: homeActions.type.GET_SUGGESTIONS_TO_FOLLOW_SUCCESS, data: response.data})
    } catch (e) {
        console.log('err', e)
    }
}
function* saga_beginFollowing(action) {
    try {
        const response = yield call(beginFollowing,action.id)
    } catch (e) {
        console.log('err', e)
    }
}
function* saga_endFollowing(action) {
    try {
        const response = yield call(endFollowing,action.id)
    } catch (e) {
        console.log('err', e)
    }
}
function* saga_removeFollowing(action) {
    try {
        const response = yield call(removeFollowing,action.id)
        yield put({type:homeActions.type.REMOVE_FOLLOWING_SUCCESS})
    } catch (e) {
        console.log('err', e)
    }
}

function* saga_getHistorySearchUser(action) {
    try {
        const response = yield call(getHistorySearchUser)
        yield put({type: homeActions.type.GET_HISTORY_SEARCH_USER_SUCCESS, data: response.data})
    } catch (e) {
        console.log('err', e)
    }
}

function* saga_saveUserHistory(action) {
    try {
        const response = yield call(saveUserHistory,action.payload.data)
    } catch (e) {
        console.log('err', e)
    }
}

function* listen() {
    yield takeEvery(homeActions.type.GET_USER_ACCOUNT_PROFILE, saga_getUserAccountProfile)
    yield takeEvery(homeActions.type.GET_SUGGESTIONS_TO_FOLLOW, saga_getSuggestionsToFollow)
    yield takeEvery(homeActions.type.BEGIN_FOLLOWING, saga_beginFollowing)
    yield takeEvery(homeActions.type.END_FOLLOWING, saga_endFollowing)
    yield takeEvery(homeActions.type.REMOVE_FOLLOWING, saga_removeFollowing)
    yield takeEvery(homeActions.type.GET_HISTORY_SEARCH_USER, saga_getHistorySearchUser)
    yield takeEvery(homeActions.type.SAVE_USER_HISTORY, saga_saveUserHistory)
}

export default function* homeSaga() {
    yield all([listen()])
}