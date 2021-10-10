const type = {
    GET_EXPLORE_POSTS:"GET_EXPLORE_POSTS",
    GET_EXPLORE_POSTS_SUCCESS:"GET_EXPLORE_POSTS_SUCCESS",
    FETCH_EXPLORE_POSTS:"FETCH_EXPLORE_POSTS",
    FETCH_EXPLORE_POSTS_SUCCESS:"FETCH_EXPLORE_POSTS_SUCCESS",
}
const action = {
    getExplorePosts:(payload)=>{
        return{
            type:type.GET_EXPLORE_POSTS,
            payload:payload,
        }
    },
    fetchExplorePosts:(payload)=>{
        return{
            type:type.FETCH_EXPLORE_POSTS,
            payload:payload,
        }
    },
}
export default {type, action}