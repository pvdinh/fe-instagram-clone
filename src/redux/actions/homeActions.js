const type = {
    GET_USER_ACCOUNT_PROFILE: "GET_USER_ACCOUNT_PROFILE",
    GET_USER_ACCOUNT_PROFILE_SUCCESS: "GET_USER_ACCOUNT_PROFILE_SUCCESS",
    GET_SUGGESTIONS_TO_FOLLOW: "GET_SUGGESTIONS_TO_FOLLOW",
    GET_SUGGESTIONS_TO_FOLLOW_SUCCESS: "GET_SUGGESTIONS_TO_FOLLOW_SUCCESS",
    BEGIN_FOLLOWING:"BEGIN_FOLLOWING",
    END_FOLLOWING:"END_FOLLOWING",
    REMOVE_FOLLOWING:"REMOVE_FOLLOWING",
    REMOVE_FOLLOWING_SUCCESS:"REMOVE_FOLLOWING_SUCCESS",
    GET_HISTORY_SEARCH_USER:"GET_HISTORY_SEARCH_USER",
    GET_HISTORY_SEARCH_USER_SUCCESS:"GET_HISTORY_SEARCH_USER_SUCCESS",
    SAVE_USER_HISTORY:"SAVE_USER_HISTORY",
    SAVE_USER_HISTORY_SUCCESS:"END_FOLLOWING_SUCCESS",
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
    removeFollowing: (id) => {
        return {
            type: type.REMOVE_FOLLOWING,
            id:id,
        }
    },
    getHistorySearchUser: () => {
        return {
            type: type.GET_HISTORY_SEARCH_USER,
        }
    },
    saveUserHistory: (data) => {
        return {
            type: type.SAVE_USER_HISTORY,
            payload:{
                data:data,
            }
        }
    },
}
export default {type, action}