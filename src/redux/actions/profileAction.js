const type = {
    GET_USER_PROFILE:"GET_USER_PROFILE",
    GET_USER_PROFILE_SUCCESS:"GET_USER_PROFILE_SUCCESS",
    EDIT_USER_ACCOUNT_SETTING:"EDIT_USER_ACCOUNT_SETTING",
    EDIT_USER_ACCOUNT_SETTING_SUCCESS:"EDIT_USER_ACCOUNT_SETTING_SUCCESS",
    GET_PRIVATE_INFORMATION:"GET_PRIVATE_INFORMATION",
    CHANGE_PASSWORD:"CHANGE_PASSWORD",
    GET_SAVED_POST:"GET_SAVED_POST",
    GET_SAVED_POST_SUCCESS:"GET_SAVED_POST_SUCCESS",
    GET_POST_VIDEO:"GET_POST_VIDEO",
    GET_POST_VIDEO_SUCCESS:"GET_POST_VIDEO_SUCCESS",
    CHECK_FOLLOWING_USER:"CHECK_FOLLOWING_USER",
    CHECK_FOLLOWING_USER_SUCCESS:"CHECK_FOLLOWING_USER_SUCCESS",
    CHECK_USER_HAVING_STORY:"CHECK_USER_HAVING_STORY",
    CHECK_USER_HAVING_STORY_SUCCESS:"CHECK_USER_HAVING_STORY_SUCCESS",
    CHANGE_PROFILE_PHOTO:"CHANGE_PROFILE_PHOTO",
}
const action = {
    getUserProfile:(username,callback,history)=>{
        return{
            type:type.GET_USER_PROFILE,
            username:username,
            callback,
            history,
        }
    },
    editUserAccountSetting:(data,callback)=>{
        return{
            type:type.EDIT_USER_ACCOUNT_SETTING,
            data:data,
            callback,
        }
    },
    getPrivateInformation:(callback)=>{
        return{
            type:type.GET_PRIVATE_INFORMATION,
            callback,
        }
    },
    changePassword:(data,callback)=>{
        return{
            type:type.CHANGE_PASSWORD,
            data:data,
            callback,
        }
    },
    changeProfilePhoto:(data,callback)=>{
        return{
            type:type.CHANGE_PROFILE_PHOTO,
            data:data,
            callback,
        }
    },
    getSavedPost:(username,callback,history)=>{
        return{
            type:type.GET_SAVED_POST,
            username:username,
            callback,
            history,
        }
    },
    getPostVideo:(username,callback,history,payload)=>{
        return{
            type:type.GET_POST_VIDEO,
            username:username,
            callback,
            history,
            payload:payload,
        }
    },
    checkFollowingUser:(userFollowingId,callback) =>{
        return{
            type:type.CHECK_FOLLOWING_USER,
            id:userFollowingId,
            callback,
        }
    },
    checkUserHavingStory:(userId)=>{
        return{
            type:type.CHECK_USER_HAVING_STORY,
            id:userId,
        }
    }
}
export default {type,action}