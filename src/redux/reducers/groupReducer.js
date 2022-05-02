import groupAction from "../actions/groupAction";

const inItState={
    listPostOfGroup: [],
    listPostOfAllGroup: [],
    groupInformation: {},
    userMemberGroup: {},
}
const groupReducer = (state = inItState,action) =>{
    switch (action.type) {
        case groupAction.type.GET_ALL_POST_IN_GROUP_SUCCESS:
            return {...state,listPostOfGroup: [...state.listPostOfGroup,...action.data]}
        case groupAction.type.FETCH_ALL_POST_IN_GROUP_SUCCESS:
            return {...state,listPostOfGroup: action.data}
        case groupAction.type.GET_ALL_POST_IN_ALL_GROUP_SELF_SUCCESS:
            return {...state,listPostOfAllGroup: [...state.listPostOfAllGroup,...action.data]}
        case groupAction.type.FETCH_ALL_POST_IN_ALL_GROUP_SELF_SUCCESS:
            return {...state,listPostOfAllGroup: action.data}
        case groupAction.type.GET_GROUP_BY_ID_GROUP_AND_ID_USER_SUCCESS:
            return {...state,groupInformation: action.data.group, userMemberGroup: action.data.groupMember}
        default:
            return {...state}
    }
}
export default groupReducer