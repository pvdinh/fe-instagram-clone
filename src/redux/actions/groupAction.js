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
}
export default {type,action}