const type = {
    GET_LIST_ID_USER_LIKED_COMMENT:"GET_LIST_ID_USER_LIKED_COMMENT",
    GET_LIST_ID_USER_LIKED_COMMENT_SUCCESS:"GET_LIST_ID_USER_LIKED_COMMENT_SUCCESS",
    GET_ALL_REPLY_COMMENT:"GET_ALL_REPLY_COMMENT",
    GET_ALL_REPLY_COMMENT_SUCCESS:"GET_ALL_REPLY_COMMENT_SUCCESS",
    LIKE_COMMENT:"LIKE_COMMENT",
    LIKE_REPLY_COMMENT:"LIKE_REPLY_COMMENT",
    UNLIKE_COMMENT:"UNLIKE_COMMENT",
    UNLIKE_REPLY_COMMENT:"UNLIKE_REPLY_COMMENT",
    LIKE_COMMENT_SUCCESS:"LIKE_COMMENT_SUCCESS",
    LIKE_REPLY_COMMENT_SUCCESS:"LIKE_REPLY_COMMENT_SUCCESS",
    UNLIKE_COMMENT_SUCCESS:"UNLIKE_COMMENT_SUCCESS",
    UNLIKE_REPLY_COMMENT_SUCCESS:"UNLIKE_REPLY_COMMENT_SUCCESS",
    GET_USER_ACCOUNT_SETTING_LIKED_COMMENT_POST_SUCCESS:"GET_USER_ACCOUNT_SETTING_LIKED_COMMENT_POST_SUCCESS",
    GET_USER_ACCOUNT_SETTING_LIKED_COMMENT_POST:"GET_USER_ACCOUNT_SETTING_LIKED_COMMENT_POST",
}
const action = {
    getListIdUserLikedComment:(idComment,callback)=>{
        return{
            type:type.GET_LIST_ID_USER_LIKED_COMMENT,
            callback,
            id:idComment,
        }
    },
    getAllReplyComment:(idComment,callback)=>{
        return{
            type:type.GET_ALL_REPLY_COMMENT,
            callback,
            id:idComment,
        }
    },
    likeComment:(idComment,callback) =>{
        return{
            type:type.LIKE_COMMENT,
            id:idComment,
            callback,
        }
    },
    unLikeComment:(idComment,callback) =>{
        return{
            type:type.UNLIKE_COMMENT,
            id:idComment,
            callback,
        }
    },
    likeReplyComment:(idComment,callback) =>{
        return{
            type:type.LIKE_REPLY_COMMENT,
            id:idComment,
            callback,
        }
    },
    unLikeReplyComment:(idComment,callback) =>{
        return{
            type:type.UNLIKE_REPLY_COMMENT,
            id:idComment,
            callback,
        }
    },
    getUserAccountSettingLikedCommentPost:(idComment,payload)=>{
        return{
            type:type.GET_USER_ACCOUNT_SETTING_LIKED_COMMENT_POST,
            payload:payload,
            id:idComment,
        }
    },
}
export default {type, action}