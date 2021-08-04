const type = {
    GET_USER_PROFILE:"GET_USER_PROFILE",
    GET_USER_PROFILE_SUCCESS:"GET_USER_PROFILE_SUCCESS",
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
}
export default {type,action}