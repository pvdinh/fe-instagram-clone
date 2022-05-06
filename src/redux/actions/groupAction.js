const type ={
    GET_GROUP_BY_ROLE:"GET_GROUP_BY_ROLE",
    GET_GROUP_BY_ROLE_SUCCESS:"GET_GROUP_BY_ROLE_SUCCESS",
    CREATE_GROUP:"CREATE_GROUP",
    CREATE_GROUP_SUCCESS:"CREATE_GROUP_SUCCESS",
    ADD_MEMBER_INTO_GROUP:"ADD_MEMBER_INTO_GROUP",
    ADD_MEMBER_INTO_GROUP_SUCCESS:"ADD_MEMBER_INTO_GROUP_SUCCESS",
    GET_GROUP_BY_ID_GROUP_AND_ID_USER:"GET_GROUP_BY_ID_GROUP_AND_ID_USER",
    GET_GROUP_BY_ID_GROUP_AND_ID_USER_SUCCESS:"GET_GROUP_BY_ID_GROUP_AND_ID_USER_SUCCESS",

    //
    GET_ALL_POST_IN_GROUP: "GET_ALL_POST_IN_GROUP",
    GET_ALL_POST_IN_GROUP_SUCCESS: "GET_ALL_POST_IN_GROUP_SUCCESS",
    FETCH_ALL_POST_IN_GROUP: "FETCH_ALL_POST_IN_GROUP",
    FETCH_ALL_POST_IN_GROUP_SUCCESS: "FETCH_ALL_POST_IN_GROUP_SUCCESS",
    //
    GET_ALL_POST_IN_ALL_GROUP_SELF: "GET_ALL_POST_IN_ALL_GROUP_SELF",
    GET_ALL_POST_IN_ALL_GROUP_SELF_SUCCESS: "GET_ALL_POST_IN_ALL_GROUP_SELF_SUCCESS",
    FETCH_ALL_POST_IN_ALL_GROUP_SELF: "FETCH_ALL_POST_IN_ALL_GROUP_SELF",
    FETCH_ALL_POST_IN_ALL_GROUP_SELF_SUCCESS: "FETCH_ALL_POST_IN_ALL_GROUP_SELF_SUCCESS",
    //
    GET_MEMBER_IN_GROUP:"GET_MEMBER_IN_GROUP",
    GET_MEMBER_IN_GROUP_SUCCESS:"GET_MEMBER_IN_GROUP_SUCCESS",
    //
    GET_MEMBER_REQUEST_IN_GROUP:"GET_MEMBER_REQUEST_IN_GROUP",
    GET_MEMBER_REQUEST_IN_GROUP_SUCCESS:"GET_MEMBER_REQUEST_IN_GROUP_SUCCESS",
    //
    REQUEST_TO_JOIN_GROUP:"REQUEST_TO_JOIN_GROUP",
    REQUEST_TO_JOIN_GROUP_SUCCESS:"REQUEST_TO_JOIN_GROUP_SUCCESS",
    CANCEL_REQUEST_TO_JOIN_GROUP:"CANCEL_REQUEST_TO_JOIN_GROUP",
    CANCEL_REQUEST_TO_JOIN_GROUP_SUCCESS:"CANCEL_REQUEST_TO_JOIN_GROUP_SUCCESS",
    REJECT_REQUEST_TO_JOIN_GROUP:"REJECT_REQUEST_TO_JOIN_GROUP",
    REJECT_REQUEST_TO_JOIN_GROUP_SUCCESS:"REJECT_REQUEST_TO_JOIN_GROUP_SUCCESS",
    //
    CONFIRM_MEMBER_REQUEST:"CONFIRM_MEMBER_REQUEST",
    CONFIRM_MEMBER_REQUEST_SUCCESS:"CONFIRM_MEMBER_REQUEST_SUCCESS",
    CANCEL_MEMBER_REQUEST:"CANCEL_MEMBER_REQUEST",
    CANCEL_MEMBER_REQUEST_SUCCESS:"CANCEL_MEMBER_REQUEST_SUCCESS",
    //
    SEARCH_GROUP_BY_NAME:"SEARCH_GROUP_BY_NAME",
    //
    SEARCH_MEMBER_IN_GROUP:"SEARCH_MEMBER_IN_GROUP",
    SEARCH_MEMBER_IN_GROUP_SUCCESS:"SEARCH_MEMBER_IN_GROUP_SUCCESS",
    SEARCH_MEMBER_REQUEST_IN_GROUP:"SEARCH_MEMBER_REQUEST_IN_GROUP",
    SEARCH_MEMBER_REQUEST_IN_GROUP_SUCCESS:"SEARCH_MEMBER_REQUEST_IN_GROUP_SUCCESS",

}
const action = {
    getGroupByRole: (payload,callback) =>{
        return{
            type:type.GET_GROUP_BY_ROLE,
            payload:payload,
            callback,
        }
    },
    createGroup: (data,callback) => {
        return {
            type: type.CREATE_GROUP,
            payload: data,
            callback,
        }
    },
    addMemberIntoGroup: (data,callback) => {
        return {
            type: type.ADD_MEMBER_INTO_GROUP,
            payload: data,
            callback,
        }
    },
    getGroupByIdGroupAndIdUser: (idGroup,callback) => {
        return {
            type: type.GET_GROUP_BY_ID_GROUP_AND_ID_USER,
            id: idGroup,
            callback,
        }
    },
    getAllPostInGroup: (idGroup,payload) => {
        return {
            type: type.GET_ALL_POST_IN_GROUP,
            payload:payload,
            id:idGroup,
        }
    },
    getMemberInGroup: (idGroup,payload) => {
        return {
            type: type.GET_MEMBER_IN_GROUP,
            payload:payload,
            id:idGroup,
        }
    },
    getMemberRequestInGroup: (idGroup,payload) => {
        return {
            type: type.GET_MEMBER_REQUEST_IN_GROUP,
            payload:payload,
            id:idGroup,
        }
    },
    fetchAllPostInGroup:(idGroup,currentPage) =>{
        return{
            type:type.FETCH_ALL_POST_IN_GROUP,
            currentPage:currentPage,
            id:idGroup,
        }
    },
    getAllPostInAllGroupSelf: (payload) => {
        return {
            type: type.GET_ALL_POST_IN_ALL_GROUP_SELF,
            payload:payload
        }
    },
    fetchAllPostInAllGroupSelf:(currentPage) =>{
        return{
            type:type.FETCH_ALL_POST_IN_ALL_GROUP_SELF,
            currentPage:currentPage
        }
    },
    requestToJoinGroup:(idGroup,callback) =>{
        return{
            type:type.REQUEST_TO_JOIN_GROUP,
            id:idGroup,
            callback,
        }
    },
    cancelRequestToJoinGroup:(idGroup,callback) =>{
        return{
            type:type.CANCEL_REQUEST_TO_JOIN_GROUP,
            id:idGroup,
            callback,
        }
    },
    rejectRequestToJoinGroup:(idGroup,idUser,callback) =>{
        return{
            type:type.REJECT_REQUEST_TO_JOIN_GROUP,
            payload:{
              idGroup:idGroup,
              idUser:idUser,
            },
            callback,
        }
    },
    confirmMemberRequest:(payload,callback) =>{
        return{
            type:type.CONFIRM_MEMBER_REQUEST,
            payload,
            callback,
        }
    },
    cancelMemberRequest:(payload,callback) =>{
        return{
            type:type.CANCEL_MEMBER_REQUEST,
            payload,
            callback,
        }
    },
    searchGroupByName:(search,callback) =>{
        return{
            type:type.SEARCH_GROUP_BY_NAME,
            search:search,
            callback,
        }
    },
    searchMemberInGroup:(idGroup,payload,search,callback) =>{
        return{
            type:type.SEARCH_MEMBER_IN_GROUP,
            search:search,
            id:idGroup,
            payload:payload,
            callback,
        }
    },
    searchMemberRequestInGroup:(idGroup,payload,search,callback) =>{
        return{
            type:type.SEARCH_MEMBER_REQUEST_IN_GROUP,
            search:search,
            id:idGroup,
            payload:payload,
            callback,
        }
    },
}
export default {type,action}