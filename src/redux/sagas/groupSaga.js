import {all, takeEvery, call, put,takeLatest} from "@redux-saga/core/effects";
import groupAction from "../actions/groupAction";
import {
    addMemberIntoGroup,
    cancelMemberRequest,
    cancelRequestToJoinGroup,
    confirmMemberRequest,
    createGroup,
    fetchAllPostInAllGroupSelf,
    fetchAllPostInGroup,
    getAllPostInAllGroupSelf,
    getAllPostInGroup,
    getGroupByIdGroupAndIdUser,
    getGroupByRole,
    getMemberInGroup,
    getMemberRequestInGroup,
    rejectRequestToJoinGroup,
    requestToJoinGroup,
    searchGroupByName, searchMemberInGroup, searchMemberRequestInGroup, updateGroup
} from "../../services/GroupApiService";

function *getGroupByRole_saga(action) {
    try {
        const response = yield call(getGroupByRole,action.payload)
        if(response.statusCode === 200){
            yield action.callback(response.data)
        }
    }catch (e) {
        console.log("err",e)
    }
}

function *createGroup_saga(action) {
    try {
        const response = yield call(createGroup,action.payload)
        if(response.statusCode === 200){
            yield action.callback(response.data)
        }
    }catch (e) {
        console.log("err",e)
    }
}

function *updateGroup_saga(action) {
    try {
        const response = yield call(updateGroup,action.payload)
        if(response.statusCode === 200){
            yield action.callback(response.data)
        }
    }catch (e) {
        console.log("err",e)
    }
}

function *addMemberIntoGroup_saga(action) {
    try {
        const response = yield call(addMemberIntoGroup,action.payload)
        if(response.statusCode === 200){
            yield action.callback(response.data)
        }
    }catch (e) {
        console.log("err",e)
    }
}

function *getGroupByIdGroupAndIdUser_saga(action) {
    try {
        const response = yield call(getGroupByIdGroupAndIdUser,action.id)
        if(response.statusCode === 200){
            yield put({type:groupAction.type.GET_GROUP_BY_ID_GROUP_AND_ID_USER_SUCCESS,data:response.data})
            yield action.callback(response.data)
        }
    }catch (e) {
        console.log("err",e)
    }
}

function* getAllPostInGroup_saga(action) {
    try {
        const response = yield call(getAllPostInGroup,{idGroup:action.id,...action.payload})
        console.log(response)
        yield put({type:groupAction.type.GET_ALL_POST_IN_GROUP_SUCCESS,data:response.data})
    } catch (e) {
        console.log("err", e)
    }
}

function* getMemberInGroup_saga(action) {
    try {
        const response = yield call(getMemberInGroup,{idGroup:action.id,...action.payload})
        console.log(response)
        yield put({type:groupAction.type.GET_MEMBER_IN_GROUP_SUCCESS,data:response.data})
    } catch (e) {
        console.log("err", e)
    }
}

function* getMemberRequestInGroup_saga(action) {
    try {
        const response = yield call(getMemberRequestInGroup,{idGroup:action.id,...action.payload})
        console.log(response)
        yield put({type:groupAction.type.GET_MEMBER_REQUEST_IN_GROUP_SUCCESS,data:response.data})
    } catch (e) {
        console.log("err", e)
    }
}

function* searchMemberInGroup_saga(action) {
    try {
        const response = yield call(searchMemberInGroup,{idGroup:action.id,...action.payload,search:action.search})
        yield put({type:groupAction.type.SEARCH_MEMBER_IN_GROUP_SUCCESS,data:response.data})
    } catch (e) {
        console.log("err", e)
    }
}

function* searchMemberRequestInGroup_saga(action) {
    try {
        const response = yield call(searchMemberRequestInGroup,{idGroup:action.id,...action.payload,search:action.search})
        yield put({type:groupAction.type.SEARCH_MEMBER_REQUEST_IN_GROUP_SUCCESS,data:response.data})
    } catch (e) {
        console.log("err", e)
    }
}
function* fetchAllPostInGroup_saga(action) {
    try {
        const response = yield call(fetchAllPostInGroup,{idGroup:action.id,page:0,size:9+(9*action.currentPage)})
        yield put({type:groupAction.type.FETCH_ALL_POST_IN_GROUP_SUCCESS,data:response.data})
    } catch (e) {
        console.log("err", e)
    }
}

function* getAllPostInAllGroupSelf_saga(action) {
    try {
        const response = yield call(getAllPostInAllGroupSelf,action.payload)
        console.log(response)
        yield put({type:groupAction.type.GET_ALL_POST_IN_ALL_GROUP_SELF_SUCCESS,data:response.data})
    } catch (e) {
        console.log("err", e)
    }
}
function* fetchAllPostInAllGroupSelf_saga(action) {
    try {
        const response = yield call(fetchAllPostInAllGroupSelf,{page:0,size:9+(9*action.currentPage)})
        yield put({type:groupAction.type.FETCH_ALL_POST_IN_ALL_GROUP_SELF_SUCCESS,data:response.data})
    } catch (e) {
        console.log("err", e)
    }
}
function* requestToJoinGroup_saga(action) {
    try {
        const response = yield call(requestToJoinGroup,action.id)
        yield action.callback(response.data)
    } catch (e) {
        console.log("err", e)
    }
}

function* cancelRequestToJoinGroup_saga(action) {
    try {
        const response = yield call(cancelRequestToJoinGroup,action.id)
        yield action.callback(response.data)
    } catch (e) {
        console.log("err", e)
    }
}

function* rejectRequestToJoinGroup_saga(action) {
    try {
        const response = yield call(rejectRequestToJoinGroup,action.payload)
        yield action.callback(response.data)
    } catch (e) {
        console.log("err", e)
    }
}
function* confirmMemberRequest_saga(action) {
    try {
        const response = yield call(confirmMemberRequest,action.payload)
        yield action.callback(response.data)
    } catch (e) {
        console.log("err", e)
    }
}
function* cancelMemberRequest_saga(action) {
    try {
        const response = yield call(cancelMemberRequest,action.payload)
        yield action.callback(response.data)
    } catch (e) {
        console.log("err", e)
    }
}
function* searchGroupByName_saga(action) {
    try {
        const response = yield call(searchGroupByName,action.search)
        yield action.callback(response.data)
    } catch (e) {
        console.log("err", e)
    }
}
function *listen() {
    yield takeEvery(groupAction.type.GET_GROUP_BY_ROLE, getGroupByRole_saga)
    yield takeEvery(groupAction.type.CREATE_GROUP, createGroup_saga)
    yield takeEvery(groupAction.type.UPDATE_GROUP, updateGroup_saga)
    yield takeEvery(groupAction.type.ADD_MEMBER_INTO_GROUP, addMemberIntoGroup_saga)
    yield takeEvery(groupAction.type.GET_GROUP_BY_ID_GROUP_AND_ID_USER, getGroupByIdGroupAndIdUser_saga)
    yield takeEvery(groupAction.type.GET_ALL_POST_IN_GROUP, getAllPostInGroup_saga)
    yield takeEvery(groupAction.type.GET_MEMBER_IN_GROUP, getMemberInGroup_saga)
    yield takeEvery(groupAction.type.GET_MEMBER_REQUEST_IN_GROUP, getMemberRequestInGroup_saga)
    yield takeEvery(groupAction.type.SEARCH_MEMBER_IN_GROUP, searchMemberInGroup_saga)
    yield takeEvery(groupAction.type.SEARCH_MEMBER_REQUEST_IN_GROUP, searchMemberRequestInGroup_saga)
    yield takeEvery(groupAction.type.FETCH_ALL_POST_IN_GROUP, fetchAllPostInGroup_saga)
    yield takeEvery(groupAction.type.GET_ALL_POST_IN_ALL_GROUP_SELF, getAllPostInAllGroupSelf_saga)
    yield takeEvery(groupAction.type.FETCH_ALL_POST_IN_ALL_GROUP_SELF, fetchAllPostInAllGroupSelf_saga)
    yield takeEvery(groupAction.type.REQUEST_TO_JOIN_GROUP, requestToJoinGroup_saga)
    yield takeEvery(groupAction.type.CANCEL_REQUEST_TO_JOIN_GROUP, cancelRequestToJoinGroup_saga)
    yield takeEvery(groupAction.type.REJECT_REQUEST_TO_JOIN_GROUP, rejectRequestToJoinGroup_saga)
    yield takeEvery(groupAction.type.CONFIRM_MEMBER_REQUEST, confirmMemberRequest_saga)
    yield takeEvery(groupAction.type.CANCEL_MEMBER_REQUEST, cancelMemberRequest_saga)
    yield takeEvery(groupAction.type.SEARCH_GROUP_BY_NAME, searchGroupByName_saga)
}
function *groupSaga() {
    yield all([listen()])
}
export default groupSaga