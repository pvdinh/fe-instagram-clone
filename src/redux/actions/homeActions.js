const type = {
    GET_USER_ACCOUNT_PROFILE: "GET_USER_ACCOUNT_PROFILE",
    GET_USER_ACCOUNT_PROFILE_SUCCESS: "GET_USER_ACCOUNT_PROFILE_SUCCESS",
    GET_SUGGESTIONS_TO_FOLLOW: "GET_SUGGESTIONS_TO_FOLLOW",
    GET_SUGGESTIONS_TO_FOLLOW_SUCCESS: "GET_SUGGESTIONS_TO_FOLLOW_SUCCESS",
    BEGIN_FOLLOWING:"BEGIN_FOLLOWING",
    END_FOLLOWING:"END_FOLLOWING",
}
const action = {
    getUserAccountProfile: (callback) => {
        return {
            type: type.GET_USER_ACCOUNT_PROFILE,
            callback,
        }
    },
    getSuggestionsToFollow: () => {
        return {
            type: type.GET_SUGGESTIONS_TO_FOLLOW,
        }
    },
    beginFollowing: (userFollowingId) => {
        return {
            type: type.BEGIN_FOLLOWING,
            id:userFollowingId,
        }
    },
    endFollowing: (userFollowingId) => {
        return {
            type: type.END_FOLLOWING,
            id:userFollowingId,
        }
    },
}
export default {type, action}