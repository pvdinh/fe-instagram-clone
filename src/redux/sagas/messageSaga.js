import {all, call, put, takeEvery} from "@redux-saga/core/effects";
import messageActions from "../actions/messageActions";
import {
    findAllBySender,
    findAllBySenderAndReceiver,
    findReceiverByUsername,
    postMessage
} from "../../services/MessageApiService";


function* findAllBySender_saga(action) {
    try {
        const response = yield call(findAllBySender)
        yield put({type:messageActions.type.FIND_ALL_MESSAGE_BY_SENDER_SUCCESS,data:response.data})
    } catch (e) {
        console.log('err', e)
    }
}
function* findAllBySenderAndReceiver_saga(action) {
    try {
        const response = yield call(findAllBySenderAndReceiver,action.id)
        yield put({type:messageActions.type.FIND_ALL_MESSAGE_BY_SENDER_AND_RECEIVER_SUCCESS,data:response.data})
        yield action.callback(response.data)
    } catch (e) {
        console.log('err', e)
    }
}
function* postMessage_saga(action) {
    try {
        const response = yield call(postMessage,action.payload.data)
        yield findAllBySender_saga()
        yield action.callback()
    } catch (e) {
        console.log('err', e)
    }
}
function* findReceiverByUsername_saga(action) {
    try {
        const response = yield call(findReceiverByUsername,action.search)
        yield put({type:messageActions.type.FIND_RECEIVER_BY_USERNAME_SUCCESS,data:response.data})
    } catch (e) {
        console.log('err', e)
    }
}
function *listen() {
    yield takeEvery(messageActions.type.FIND_ALL_MESSAGE_BY_SENDER,findAllBySender_saga)
    yield takeEvery(messageActions.type.FIND_ALL_MESSAGE_BY_SENDER_AND_RECEIVER,findAllBySenderAndReceiver_saga)
    yield takeEvery(messageActions.type.POST_MESSAGE,postMessage_saga)
    yield takeEvery(messageActions.type.FIND_RECEIVER_BY_USERNAME,findReceiverByUsername_saga)
}
export default function*messageSaga () {
    yield all([listen()])
}