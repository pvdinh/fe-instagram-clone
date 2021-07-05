const type = {
    GET_ALL_POST_OF_FOLLOWING: "GET_ALL_POST_OF_FOLLOWING",
    GET_ALL_POST_OF_FOLLOWING_SUCCESS: "GET_ALL_POST_OF_FOLLOWING_SUCCESS",
}
const action = {
    getAllPostOfFollowing: () => {
        return {
            type: type.GET_ALL_POST_OF_FOLLOWING
        }
    },
}
export default {type, action}