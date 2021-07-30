import {all, call, takeEvery} from "@redux-saga/core/effects";
import messageActions from "../actions/messageActions";


function* findAllBySender_saga(action) {
    try {
    } catch (e) {
        console.log('err', e)
    }
}
function* findAllBySenderAndReceiver_saga(action) {
    try {
    } catch (e) {
        console.log('err', e)
    }
}
function* postMessage_saga(action) {
    try {
    } catch (e) {
        console.log('err', e)
    }
}
function *listen() {
    yield takeEvery(messageActions.type.FIND_ALL_MESSAGE_BY_SENDER,findAllBySender_saga)
    yield takeEvery(messageActions.type.FIND_ALL_MESSAGE_BY_SENDER_AND_RECEIVER,findAllBySenderAndReceiver_saga)
    yield takeEvery(messageActions.type.POST_MESSAGE,postMessage_saga)
}
export default function*messageSaga () {
    yield all([listen()])
}