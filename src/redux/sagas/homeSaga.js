import {all, takeEvery, call, put} from "@redux-saga/core/effects";
import homeActions from "../actions/homeActions";
import {
    beginFollowing,
    endFollowing,
    getSuggestionsToFollow,
    getUserAccountProfile
} from "../../services/HomeApiService";

function* saga_getUserAccountProfile() {
    try {
        const response = yield call(getUserAccountProfile)
        yield put({type: homeActions.type.GET_USER_ACCOUNT_PROFILE_SUCCESS, data: response.data})
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

function* listen() {
    yield takeEvery(homeActions.type.GET_USER_ACCOUNT_PROFILE, saga_getUserAccountProfile)
    yield takeEvery(homeActions.type.GET_SUGGESTIONS_TO_FOLLOW, saga_getSuggestionsToFollow)
    yield takeEvery(homeActions.type.BEGIN_FOLLOWING, saga_beginFollowing)
    yield takeEvery(homeActions.type.END_FOLLOWING, saga_endFollowing)
}

export default function* homeSaga() {
    yield all([listen()])
}