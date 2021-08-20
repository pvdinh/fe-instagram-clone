const type = {
    GET_USER_PROFILE:"GET_USER_PROFILE",
    GET_USER_PROFILE_SUCCESS:"GET_USER_PROFILE_SUCCESS",
    EDIT_USER_ACCOUNT_SETTING:"EDIT_USER_ACCOUNT_SETTING",
    EDIT_USER_ACCOUNT_SETTING_SUCCESS:"EDIT_USER_ACCOUNT_SETTING_SUCCESS",
    GET_PRIVATE_INFORMATION:"GET_PRIVATE_INFORMATION",
    CHANGE_PASSWORD:"CHANGE_PASSWORD",
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
}
export default {type,action}