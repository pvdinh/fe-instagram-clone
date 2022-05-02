import {all, takeEvery, call, put,takeLatest} from "@redux-saga/core/effects";
import groupAction from "../actions/groupAction";
import {
    addMemberIntoGroup,
    createGroup, fetchAllPostInAllGroupSelf, fetchAllPostInGroup, getAllPostInAllGroupSelf, getAllPostInGroup,
    getGroupByIdGroupAndIdUser,
    getGroupByRole
} from "../../services/GroupApiService";
import comment from "../actions/comment";
import {getAllPostInformationFollowing} from "../../services/PostApiService";
import postActions from "../actions/postActions";

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

function *listen() {
    yield takeEvery(groupAction.type.GET_GROUP_BY_ROLE, getGroupByRole_saga)
    yield takeEvery(groupAction.type.CREATE_GROUP, createGroup_saga)
    yield takeEvery(groupAction.type.ADD_MEMBER_INTO_GROUP, addMemberIntoGroup_saga)
    yield takeEvery(groupAction.type.GET_GROUP_BY_ID_GROUP_AND_ID_USER, getGroupByIdGroupAndIdUser_saga)
    yield takeEvery(groupAction.type.GET_ALL_POST_IN_GROUP, getAllPostInGroup_saga)
    yield takeEvery(groupAction.type.FETCH_ALL_POST_IN_GROUP, fetchAllPostInGroup_saga)
    yield takeEvery(groupAction.type.GET_ALL_POST_IN_ALL_GROUP_SELF, getAllPostInAllGroupSelf_saga)
    yield takeEvery(groupAction.type.FETCH_ALL_POST_IN_ALL_GROUP_SELF, fetchAllPostInAllGroupSelf_saga)
}
function *groupSaga() {
    yield all([listen()])
}
export default groupSaga