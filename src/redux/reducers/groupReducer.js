import groupAction from "../actions/groupAction";

const inItState={
    listPostOfGroup: [],
    listPostOfAllGroup: [],
    groupInformation: {},
    userMemberGroup: {},
    listMemberInGroup: [],
    listMemberRequestInGroup: [],
    listMemberRequestSearchInGroup: [],
    listMemberSearchInGroup: [],
}
const groupReducer = (state = inItState,action) =>{
    switch (action.type) {
        case groupAction.type.GET_ALL_POST_IN_GROUP_SUCCESS:
            return {...state,listPostOfGroup: [...state.listPostOfGroup,...action.data]}
        case groupAction.type.GET_MEMBER_IN_GROUP_SUCCESS:
            return {...state,listMemberInGroup: [...action.data]}
        case groupAction.type.GET_MEMBER_REQUEST_IN_GROUP_SUCCESS:
            return {...state,listMemberRequestInGroup: [...action.data]}
        case groupAction.type.FETCH_ALL_POST_IN_GROUP_SUCCESS:
            return {...state,listPostOfGroup: action.data}
        case groupAction.type.GET_ALL_POST_IN_ALL_GROUP_SELF_SUCCESS:
            return {...state,listPostOfAllGroup: [...state.listPostOfAllGroup,...action.data]}
        case groupAction.type.FETCH_ALL_POST_IN_ALL_GROUP_SELF_SUCCESS:
            return {...state,listPostOfAllGroup: action.data}
        case groupAction.type.GET_GROUP_BY_ID_GROUP_AND_ID_USER_SUCCESS:
            return {...state,groupInformation: action.data.group, userMemberGroup: action.data.groupMember}
        case groupAction.type.SEARCH_MEMBER_IN_GROUP_SUCCESS:
            return {...state,listMemberSearchInGroup: action.data}
        case groupAction.type.SEARCH_MEMBER_REQUEST_IN_GROUP_SUCCESS:
            return {...state,listMemberRequestSearchInGroup: action.data}
        default:
            return {...state}
    }
}
export default groupReducer