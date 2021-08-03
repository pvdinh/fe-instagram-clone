const type = {
    GET_USER_PROFILE:"GET_USER_PROFILE",
    GET_USER_PROFILE_SUCCESS:"GET_USER_PROFILE_SUCCESS",
}
const action = {
    getUserProfile:(username,callback)=>{
        return{
            type:type.GET_USER_PROFILE,
            username:username,
            callback,
        }
    },
}
export default {type,action}