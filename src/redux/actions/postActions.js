const type = {
    GET_ALL_POST_OF_FOLLOWING: "GET_ALL_POST_OF_FOLLOWING",
    GET_ALL_POST_OF_FOLLOWING_SUCCESS: "GET_ALL_POST_OF_FOLLOWING_SUCCESS",
    LIKE_POST:"LIKE_POST",
    UNLIKE_POST:"UNLIKE_POST",
    LIKE_POST_SUCCESS:"LIKE_POST_SUCCESS",
    UNLIKE_POST_SUCCESS:"UNLIKE_POST_SUCCESS",
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
}
export default {type, action}