const type = {
    GET_USER_ACCOUNT_PROFILE: "GET_USER_ACCOUNT_PROFILE",
    GET_USER_ACCOUNT_PROFILE_SUCCESS: "GET_USER_ACCOUNT_PROFILE_SUCCESS",
}
const action = {
    getUserAccountProfile: () => {
        return {
            type: type.GET_USER_ACCOUNT_PROFILE,
        }
    }
}
export default {type, action}