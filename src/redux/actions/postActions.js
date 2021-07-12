const type = {
    GET_ALL_POST_OF_FOLLOWING: "GET_ALL_POST_OF_FOLLOWING",
    GET_ALL_POST_OF_FOLLOWING_SUCCESS: "GET_ALL_POST_OF_FOLLOWING_SUCCESS",
    LIKE_POST:"LIKE_POST",
    UNLIKE_POST:"UNLIKE_POST",
    LIKE_POST_SUCCESS:"LIKE_POST_SUCCESS",
    UNLIKE_POST_SUCCESS:"UNLIKE_POST_SUCCESS",
    COMMENT_POST:"COMMENT_POST",
    GET_COMMENT_POST:"GET_COMMENT_POST",
    GET_COMMENT_POST_SUCCESS:"GET_COMMENT_POST_SUCCESS",
}
const action = {
    getAllPostOfFollowing: () => {
        return {
            type: type.GET_ALL_POST_OF_FOLLOWING
        }
    },
    likePost:(pId) =>{
        return{
            type:type.LIKE_POST,
            id:pId,
        }
    },
    unLikePost:(pId) =>{
        return{
            type:type.UNLIKE_POST,
            id:pId,
        }
    },
    commentPost:(data,callback) =>{
        return{
            type:type.COMMENT_POST,
            payload:{
                data:data,
            },
            callback,
        }
    },
    getCommentPost:(pId,callback) =>{
        return{
            type:type.GET_COMMENT_POST,
            id:pId,
            callback,
        }
    },
}
export default {type, action}