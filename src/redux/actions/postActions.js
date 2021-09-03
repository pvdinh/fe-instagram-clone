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
    POST_NEW_POST:"POST_NEW_POST",
    POST_NEW_POST_SUCCESS:"POST_NEW_POST_SUCCESS",
    POST_IMAGE_TO_CLOUDINARY:"POST_IMAGE_TO_CLOUDINARY",
    GET_POST_INFORMATION_FROM_P_ID:"GET_POST_INFORMATION_FROM_P_ID",
    GET_POST_INFORMATION_FROM_P_ID_SUCCESS:"GET_POST_INFORMATION_FROM_P_ID_SUCCESS",
    LIKE_POST_IN_POST_DETAIL:"LIKE_POST_IN_POST_DETAIL",
    UNLIKE_POST_IN_POST_DETAIL:"UNLIKE_POST_IN_POST_DETAIL",
    DELETE_POST:"DELETE_POST",
    DELETE_POST_SUCCESS:"DELETE_POST_SUCCESS",
    CHECK_SAVED_POST:"CHECK_SAVED_POST",
    BEGIN_SAVE_POST:"BEGIN_SAVE_POST",
    END_SAVE_POST:"END_SAVE_POST",
}
const action = {
    getAllPostOfFollowing: () => {
        return {
            type: type.GET_ALL_POST_OF_FOLLOWING
        }
    },
    postImageToCloudinary: (data,callback) => {
        return {
            type: type.POST_IMAGE_TO_CLOUDINARY,
            payload:{
                data,
            },
            callback,
        }
    },
    postNewPost: (data,callback) => {
        return {
            type: type.POST_NEW_POST,
            payload:{
                data,
            },
            callback,
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
    likePostInPostDetail:(pId) =>{
        return{
            type:type.LIKE_POST_IN_POST_DETAIL,
            id:pId,
        }
    },
    unlikePostInPostDetail:(pId) =>{
        return{
            type:type.UNLIKE_POST_IN_POST_DETAIL,
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
    getPostInformationFromPId:(pId,callback) =>{
        return{
            type:type.GET_POST_INFORMATION_FROM_P_ID,
            id:pId,
            callback,
        }
    },
    deletePost:(pId)=>{
        return{
            type:type.DELETE_POST,
            id:pId,
        }
    },
    checkSavedPost:(pId,callback)=>{
        return{
            type:type.CHECK_SAVED_POST,
            id:pId,
            callback,
        }
    },
    beginSavePost:(pId,callback)=>{
        return{
            type:type.BEGIN_SAVE_POST,
            id:pId,
            callback,
        }
    },
    endSavePost:(pId,callback)=>{
        return{
            type:type.END_SAVE_POST,
            id:pId,
            callback,
        }
    },
}
export default {type, action}